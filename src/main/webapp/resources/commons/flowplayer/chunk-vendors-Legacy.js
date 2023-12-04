var AUDIO = document.createElement('audio');

flowplayer.extend(flowplayer.support, {audio: !!AUDIO.canPlayType});

var getType = function(type) {
	return /mpegurl/i.test(type) ? "application/x-mpegurl" : "audio/" + type;
};

var canPlayAudio = function(type) {
	if (!/^(audio|application)/i.test(type))
		type = getType(type);
	return !!AUDIO.canPlayType(type).replace("no", '');
};

var audioEngine = function(player, root) {
	var EVENTS = {
		ended: 'finish',
		pause: 'pause',
		play: 'resume',
		timeupdate: 'progress',
		volumechange: 'volume',
		seeked: 'seek',
		loadeddata: 'ready',
		error: 'error'
	};

	var common = flowplayer.common,
		api = common.findDirect('audio', root)[0] || common.find('.fp-player > audio', root)[0],
		bean = flowplayer.bean,
		support = flowplayer.support,
		conf = player.conf,
		timer,
		lastBuffer,
		volumeLevel;

	var engine = {
		engineName: audioEngine.engineName,

		createAudioTag: function(audio, autoplay, preload) {
			if (typeof autoplay === 'undefined') autoplay = true;
			if (typeof preload === 'undefined') preload = 'none';

			var el  = document.createElement('audio');
			el.src = audio.src;
			el.type = getType(audio.type);
			var className = 'fp-engine ';
			el.className = className;
			if (flowplayer.support.autoplay) el.autoplay = autoplay ? 'autoplay' : false;
			if (flowplayer.support.dataload) el.preload = preload;

			return el;
		},

		listen: function(api, sources, audio) {
			// listen only once
			var instanceId = root.getAttribute('data-flowplayer-instance-id');

			if (api.listeners && api.listeners.hasOwnProperty(instanceId)) {
				api.listeners[instanceId] = audio;
				return;
			}
			(api.listeners || (api.listeners = {}))[instanceId] = audio;

			bean.on(sources, 'error', function(e) {
				try {
					if (canPlayAudio(e.target.getAttribute('type'))) {
						player.trigger("error", [player, { code: 4, audio: extend(audio, {src: api.src, url: api.src}) }]);
					}
				} catch (er) {
					// Most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
				}
			});

			player.on('shutdown', function() {
				bean.off(sources);
				bean.off(api, '.dvrhack');
				player.off('.loophack');
			});

			var eventListeners = {};
			//Special event handling for HLS metadata events

			Object.keys(EVENTS).forEach(function(type) {
				var flow = EVENTS[type];

				if (!flow) return;
				var l = function(e) {
					audio = api.listeners[instanceId];
					if (!e.target || !common.hasClass(e.target, 'fp-engine')) return;

					if (conf.debug && !/progress/.test(flow)) console.log(type, "->", flow, e);

					var triggerEvent = function() {
						player.trigger(flow, [player, arg]);
					};

					var round = function(val, per) {
						per = per || 100;
						return Math.round(val * per) / per;
					};

					// no events if player not ready
					if (!player.ready && !/ready|error/.test(flow) || !flow || !common.find('audio', root).length) {
						if (flow === 'resume') player.one('ready', function() { setTimeout(function() { triggerEvent(); }) });
						return;
					}
					var arg;

					if (flow === 'unload') { //Call player unload
						player.unload();
						return;
					}

					switch (flow) {

						case "ready":

							arg = flowplayer.extend(audio, {
								duration: api.duration < Number.MAX_VALUE ? api.duration : 0,
								url: api.currentSrc,
								src: api.currentSrc
							});

							try {
								arg.seekable = /mpegurl/i.test(audio ? (audio.type || '') : '') && api.duration || api.seekable && api.seekable.end(null) || player.live;

							} catch (ignored) {}

							// buffer
							timer = timer || setInterval(function() {

									try {
										arg.buffer = api.buffered.end(null);

									} catch (ignored) {}

									if (arg.buffer) {
										if (round(arg.buffer, 1000) < round(arg.duration, 1000) && !arg.buffered && arg.buffer !== lastBuffer) {
											player.trigger("buffer", [player, arg.buffer]);
											lastBuffer = arg.buffer;

										} else if (!arg.buffered && arg.buffer !== lastBuffer) {
											arg.buffered = true;
											player.trigger("buffer", [player, arg.buffer]).trigger("buffered", e);
											lastBuffer = arg.buffer;
											clearInterval(timer);
											timer = 0;
										}
									}

								}, 500);

							if (!player.live && !arg.duration && !support.hlsDuration && type === "loadeddata") {
								var durationChanged = function() {
									arg.duration = api.duration;
									try {
										arg.seekable = api.seekable && api.seekable.end(null);

									} catch (ignored) {}
									triggerEvent();
									api.removeEventListener('durationchange', durationChanged);
									common.toggleClass(root, 'is-live', false);
								};
								api.addEventListener('durationchange', durationChanged);

								// Ugly hack to handle broken Android devices
								var timeUpdated = function() {
									if (!player.ready && !api.duration) { // No duration even though the audio already plays
										arg.duration = 0;
										common.addClass(root, 'is-live'); // Make UI believe it's live
										triggerEvent();
									}
									api.removeEventListener('timeupdate', timeUpdated);
								};
								api.addEventListener('timeupdate', timeUpdated);
								return;
							}

							break;

						case "progress": case "seek":

							if (api.currentTime > 0 || player.live) {
								arg = Math.max(api.currentTime, 0);

							} else if (flow == 'progress') {
								return;
							}
							break;

						case "volume":
							arg = round(api.volume);
							break;

						case "error":
							try {
								arg = (e.srcElement || e.originalTarget).error;
								arg.audio = flowplayer.extend(audio, {src: api.src, url: api.src});
							} catch (er) {
								// Most likely https://bugzilla.mozilla.org/show_bug.cgi?id=208427
								return;
							}
					}

					triggerEvent();


				};
				root.addEventListener(type, l, true);
				if (!eventListeners[type]) eventListeners[type] = [];
				eventListeners[type].push(l);

			});
			return eventListeners;

		},

		pick: function(sources) {
			var source = (function() {
				for (var i = 0; i < sources.length; i++) {
					if (canPlayAudio(sources[i].type)) return sources[i];
				}
			})();
			if (!source) return;
			if (typeof source.src === 'string') source.src = common.createAbsoluteUrl(source.src);
			return source;
		},

		load: function(audio) {
			var container = common.find('.fp-player', root)[0], reload = false, created = false;

			conf.nativesubtitles = false;

			if (conf.splash && !api) {
				api = this.createAudioTag(audio, undefined, undefined);
				common.prepend(container, api);
				created = true;
			} else if (!api) {
				api = this.createAudioTag(audio, !!audio.autoplay || !!conf.autoplay, conf.clip.preload || true);
				common.prepend(container, api);
				created = true;
			} else {
				common.addClass(api, 'fp-engine');
				common.find('source,track', api).forEach(common.removeNode);
				reload = api.src === audio.src;
			}

			bean.on(player, 'loadeddata', function() {
				audio.duration = api.duration;
				player.trigger('ready', [player, audio]);
			});

			bean.on(player, 'volumechange', function() {
				player.trigger('volume', [player, api.volume]);
			});

			bean.on(player, 'playing', function() {
				player.trigger('resume', [player]);
			});

			bean.on(player, 'pause', function() {
				player.trigger('pause', [player]);
			});

			bean.on(api, 'timeupdate', function() {
				if(api.currentTime > 0) {
					//player.trigger('progress', [player, api.currentTime]);
				}
			});

			bean.on(player, 'seeked', function() {
				player.trigger('seek', [player, api.currentTime]);
			});

			common.prop(api, 'loop', false);
			player.off('.loophack');
			if (audio.loop || conf.loop) {
				if (/mpegurl/i.test(audio.type)) {
					player.on('finish.loophack', function() { player.resume(); });
				}
				else common.prop(api, 'loop', true);
			}

			if (typeof volumeLevel !== 'undefined') {
				api.volume = volumeLevel;
			}

			if (player.video.src && audio.src != player.video.src || audio.index) common.attr(api, 'autoplay', 'autoplay');
			api.src = audio.src;
			api.type = audio.type;

			this.listen(api, common.find("source", api).concat(api), audio);

			if (reload || (created && !conf.splash)) api.load();
			if (support.iOS.iPad && support.iOS.chrome) api.load();
			if (api.paused && (audio.autoplay || conf.autoplay || conf.splash)) api.play();
		},

		pause: function() {
			api.pause();
		},

		resume: function() {
			api.play();
		},

		seek: function(time) {
			try {
				var pausedState = player.paused;
				api.currentTime = time;
				if (pausedState) api.pause();
			} catch (ignored) {}
		},

		volume: function(level) {
			volumeLevel = level;
			if (api) {
				api.volume = level;
			}
		},

		unload: function() {
			common.find('audio.fp-engine', root).forEach(function (audioTag) {
				common.attr(audioTag, 'src', '');
				common.removeNode(audioTag);
			});
			timer = clearInterval(timer);
			api = 0;
		}
	};

	return engine;
};

audioEngine.engineName = "audio";
audioEngine.canPlay = function (type) {
	return flowplayer.support.audio && canPlayAudio(type);
};

flowplayer.engines.unshift(audioEngine);