var isProgDrag = false;
(function() {
	var MUSIC_CONTROL = function() {};

	MUSIC_CONTROL.prototype = {
		thisControllerPosition:0,
		controllerPosition:0,
		volumePosition:50,
		thisVolumePosition:50,
		controllerTime:0,

		_callProgress:function() { return false; },
		_callVolume:function() { return false; },

		set:function() {
			var that = this;

			that.barWidth = that.bar.outerWidth();
			that.volumeWidth = that.volumebar.outerWidth();

			that.addTime();

			that.controller.bind(START_EV, $.proxy(that._start, that))
				.bind('focus', $.proxy(that._focus, that))
				.bind('blur', $.proxy(that._blur, that))
				.bind(CLICK_EV, function(e) { return false; });

			that.bar.bind(START_EV, $.proxy(that._touch, that));

			that.volumebar.bind(START_EV, $.proxy(that._volume, that));
			that.volume.bind(CLICK_EV, $.proxy(that._toggleVolume, that));

			$(window).bind('resize', function() {
				that.barWidth = that.bar.outerWidth();
			});
		},
		addZero: function(number){
			return parseInt(number, 10) < 10 ? '0' + number : number;
		},
		addTime:function() {
			var that = this,
				musicTime = that.addZero(Math.floor(that.playTime / 60)) + ':' + that.addZero(that.playTime % 60);

			$('.music-time').html(musicTime);

			that.thisTime();
		},
		thisTime:function() {
			var that = this;

			//var thisTime = Math.round(that.playTime * Math.round(that.controllerPosition) / 100);
			if(isNaN(that.controllerTime)) that.controllerTime = 0;

			thisTime = that.addZero(Math.floor(that.controllerTime / 60)) + ':' + that.addZero(that.controllerTime % 60);
			$('.play-time').html(thisTime);
		},
		_setProgress:function() {
			var that = this;

			if(that.controllerPosition >= 100)
				that.controllerPosition = 100;
			else if(that.controllerPosition <= 0)
				that.controllerPosition = 0;

			that.progress.css({
				width:that.controllerPosition + '%'
			});
			that.controller.css({
				left:that.controllerPosition + '%'
			});

			that.thisTime();
		},
		_keyEvent:function(e) {
			var that = this;
			switch(e.keyCode) {
				case 39:
					if(that.controllerPosition < 100)
						that.controllerPosition += 2;
					break;
				case 37:
					if(that.controllerPosition > 0)
						that.controllerPosition -= 2;
					break;
			}
			that.thisControllerPosition = that.controllerPosition;
			that._setProgress();
		},
		_focus:function() {
			var that = this;
			$(document).bind('keypress', $.proxy(that._keyEvent, that));
		},
		_blur:function() {
			var that = this;
			$(document).unbind('keypress', $.proxy(that._keyEvent, that));
		},
		_touch:function(e) {
			var that = this;

			var touchPoint = hasTouchEvent ? e.originalEvent.touches[0] : e.originalEvent;
			that.touchX = (touchPoint.pageX || touchPoint.clientX) - that.bar.offset().left;

			that.controllerPosition = (that.touchX / (that.barWidth - 5)) * 100;

			that.thisControllerPosition = that.controllerPosition;

			that.controllerTime = Math.round(that.playTime * that.controllerPosition / 100);

			that._setProgress();

			that._callProgress();
		},
		_start:function(e) {
			isProgDrag = true;
			var that = this;
			e.preventDefault();
			e.stopPropagation();

			var startPoint = hasTouchEvent ? e.originalEvent.touches[0] : e.originalEvent;
			that.startX = startPoint.pageX || startPoint.clientX;

			that.controller.addClass('show');
			/*
			that.bar.bind(MOVE_EV, $.proxy(that._move, that));
			that.bar.bind(END_EV, $.proxy(that._end, that));
			*/
			$(document).bind(MOVE_EV, $.proxy(that._move, that));
			$(document).bind(END_EV, $.proxy(that._end, that));

			//that.bar.bind('mouseout', $.proxy(that._mouseout, that));
		},
		_move:function(e) {
			var that = this;
			e.preventDefault();

			that.movePoint = hasTouchEvent ? e.originalEvent.touches[0] : e.originalEvent;
			that.deltaX = (that.movePoint.pageX || that.movePoint.clientX) - that.startX;

			that.controllerPosition = (that.deltaX / (that.barWidth - 5)) * 100 + that.thisControllerPosition;

			that.controllerTime = Math.round(that.playTime * that.controllerPosition / 100);

			if(that.controllerTime >= that.playTime) that.controllerTime = that.playTime;
			else if(that.controllerTime <= 0) that.controllerTime = 0;

			that._setProgress();
		},
		_end:function(e) {
			isProgDrag = false;
			var that = this;

			that.thisControllerPosition = that.controllerPosition;

			that.controllerTime = Math.round(that.playTime * that.controllerPosition / 100);

			that.controller.removeClass('show');

			/*
			that.bar.unbind(MOVE_EV, $.proxy(that._move, that));
			that.bar.unbind(END_EV, $.proxy(that._end, that));
			*/
			$(document).unbind(MOVE_EV, $.proxy(that._move, that));
			$(document).unbind(END_EV, $.proxy(that._end, that));

			//that.bar.unbind('mouseout', $.proxy(that._mouseout, that));

			that._callProgress();
		},
		_mouseout:function(e) {
			e = e.originalEvent;

			var that = this,
				t = e.relatedTarget || e.toElement,
				currentTarget = t;

			while(currentTarget != undefined) {
				if(currentTarget == that.bar[0]) return;
				else currentTarget = currentTarget.parentNode;
			}
			that._end(e);
		},
		_setVolume:function() {
			var that = this;

			that.volumePosition = Math.round(that.volumePosition);

			if(that.volumePosition <= 100 && that.volumePosition >= 0) {
				that.volumebar.find('a').css({
					width:that.volumePosition + '%'
				});
			}
			if(that.volumePosition <= 0) {
				that.volume.addClass('mute');
			} else
				that.volume.removeClass('mute');
		},
		_volume:function(e) {
			var that = this;
			e.preventDefault();
			e.stopPropagation();

			var touchPoint = hasTouchEvent ? e.originalEvent.touches[0] : e.originalEvent;
			that.volumeX = (touchPoint.pageX || touchPoint.clientX) - that.volumebar.offset().left;

			that.volumePosition = (that.volumeX / that.volumeWidth) * 100;

			$(document).bind(MOVE_EV, $.proxy(that._moveVolume, that));
			$(document).bind(END_EV, $.proxy(that._endVolume, that));

			that._setVolume();
		},
		_moveVolume:function(e) {
			var that = this;
			e.preventDefault();

			that.volumeMovePoint = hasTouchEvent ? e.originalEvent.touches[0] : e.originalEvent;
			that.volumeDeltaX = (that.volumeMovePoint.pageX || that.volumeMovePoint.clientX) - that.volumebar.offset().left;

			that.volumePosition = (that.volumeDeltaX / that.volumeWidth) * 100;

			that._setVolume();
		},
		_endVolume:function(e) {
			var that = this;

			that.thisVolumePosition = that.volumePosition;

			$(document).unbind(MOVE_EV, $.proxy(that._moveVolume, that));
			$(document).unbind(END_EV, $.proxy(that._endVolume, that));

			if(that.volumePosition >= 100)
				that.volumePosition = 100;
			else if(that.volumePosition <= 0)
				that.volumePosition = 0;

			that._setVolume();

			that._callVolume();
		},
		_toggleVolume:function(e) {
			var that = this;
			e.preventDefault();
			e.stopPropagation();

			if(that.volume.hasClass('mute')) {
				that.volumePosition = that.thisVolumePosition;

				that.volume.removeClass('mute');

				that._setVolume();

			} else {
				that.thisVolumePosition = that.volumePosition;
				that.volumePosition = 0;

				that.volume.addClass('mute');

				that._setVolume();
			}

			that._callVolume();
		}
	};

	window.MUSIC_CONTROL = MUSIC_CONTROL;
})();

Object.extend(LIST_SORT.prototype, {
	toggleExtend:function() {
		var that = this,
			wrap = $('#content .body'),
			scrollPosition = (wrap.scrollTop() + that.lists.filter('.select-list').position().top) - (wrap.height() / 2) + (function() {
				var l = that.lists.filter('.select-list');
				return ((l.size() * l.outerHeight()) / 2);
			})();

		wrap.scrollTop(scrollPosition);
		//wrap.stop().animate({ scrollTop:scrollPosition });
	}
});

(function() {
	var MUSIC_PLAYER = function() {
		this._option = {
			repeat: null,
			random: null
		}
		this._hook = null;
	};

	MUSIC_PLAYER.prototype = {
		_load:function(hook) {
			var that = this;
			that._hook = hook;
			//set btns
			$('<button type="button" class="fp-icon fp-random" title="�쒖감">�쒖감�ъ깮</button>').prependTo('.fp-controls');
			$('<button type="button" class="fp-icon fp-repeat" title="諛섎났�댁젣">諛섎났�댁젣</button>').prependTo('.fp-controls');
			$('<button type="button" class="fp-icon fp-prev">�댁쟾 怨� �ｊ린</button>').insertBefore('.fp-controls .fp-playbtn');
			$('<button type="button" class="fp-icon fp-next">�ㅼ쓬 怨� �ｊ린</button>').insertAfter('.fp-controls .fp-playbtn');
			$('<button type="button" class="fp-icon fp-lyrics" title="媛��ъ쟾泥대낫湲�">媛��ъ쟾泥대낫湲�</button>').insertAfter('.fp-volume');

			//set play / pause
			hook.off('click', '.fp-playbtn').on('click', '.fp-playbtn', function(e) {
				e.preventDefault();
				if(hook.hasClass('is-playing')) {
					$(this).text('�ъ깮');
				} else {
					$(this).text('�쇱떆�뺤�');
				}
			}).find('.fp-playbtn').attr('href','#').text('�ъ깮');

			hook.off('click', '.fp-prev').on('click', '.fp-prev', function(e) {
				fnPlayPrev();
			});

			hook.off('click', '.fp-next').on('click', '.fp-next', function(e) {
				fnPlayNext();
			});

			//set repeat
			hook.off('click', '.fp-repeat').on('click', '.fp-repeat', function(e) {
				if($(this).hasClass('all')) {
					$(this).removeClass('all').addClass('one').text('1怨〓컲蹂�').attr('title','1怨〓컲蹂�');
				} else if($(this).hasClass('one')) {
					$(this).removeClass('one').text('諛섎났�댁젣').attr('title','諛섎났�댁젣');
				} else {
					$(this).addClass('all').text('�꾩껜諛섎났').attr('title','�꾩껜諛섎났');
				}

				fnRepeatClick();
			});
			if(that._option.repeat != null) {
				if(that._option.repeat == 'all') {
					hook.find('.fp-repeat').attr('class', 'fp-icon fp-repeat all').text('�꾩껜諛섎났').attr('title','�꾩껜諛섎났');
				} else if(that._option.repeat == 'one') {
					hook.find('.fp-repeat').attr('class', 'fp-icon fp-repeat one').text('1怨〓컲蹂�').attr('title','1怨〓컲蹂�');
				}
			}

			//set random
			hook.off('click', '.fp-random').on('click', '.fp-random', function(e) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active').text('�쒖감�ъ깮').attr('title','�쒖감');
				} else {
					$(this).addClass('active').text('援먯감�ъ깮').attr('title','援먯감');
				}

				fnRandomClick();
			});

			if(that._option.random != null) {
				hook.find('.fp-random').attr('class', 'fp-icon fp-random active').text('援먯감�ъ깮').attr('title','援먯감');
			}

			//set volume
			hook.find('.fp-volumebtn').attr('href','#');

			//set lyrics
			hook.off('click', '.fp-lyrics').on('click', '.fp-lyrics', function(e) {
				that._toggleLyrics(e);
			});

			$('.lyrics-main').off('click').on('click', function(e) {
				$('.fp-lyrics').trigger('click');
			});

			if(!(typeof ieVERSION != 'undefined' && ieVERSION < 8)) {
				$('.lyrics-all').mCustomScrollbar({
					theme:"dark-thin"
				});
			}

			$('.lyrics-mode').off('click', '.btn-viewer').on('click', '.btn-viewer', function(e) {
				$('#img-viewer').addClass('active').attr('tabindex',0).focus();
			});

			//select-quality
			$('.select-quality').off('click', '.item').on('click', '.item', function(e) {
				$(this).closest('.toggle-button-box').find('.btn').text($(this).text()).trigger('click');
			});
		},
		_setLyrics:function(isExist) {
			var $lyrics = this._hook.find('.fp-lyrics');
			if(isExist) $lyrics.removeClass('disabled');
			else $lyrics.addClass('disabled');
		},
		_toggleLyrics:function(e) {
			if($('.fp-lyrics').hasClass('disabled')) {
				e.preventDefault();
			} else if($('.fp-lyrics').hasClass('active')) {
				$('.fp-lyrics').add('.lyrics-mode').removeClass('active');
				$('.lyrics-all').hide();
				$('.lyrics-main').fadeIn(200).attr('tabindex',0).focus();
			} else {
				$('.fp-lyrics').add('.lyrics-mode').addClass('active');
				$('.lyrics-main').hide();
				$('.lyrics-all').fadeIn(200).attr('tabindex',0).focus();
			}
		}
	};

	window.MUSIC_PLAYER = MUSIC_PLAYER;
})();

(function() {
	var MV_PLAYER = function() {
		this._option = {
			repeat: null,
			random: null,
			single: null,
		}
	};

	MV_PLAYER.prototype = {
		_load:function(hook) {
			var that = this,
				fpTitle = hook.find('.fp-title'),
				fpControls = hook.find('.fp-controls'),
				fpPause = hook.find('.fp-pause'),
				fpVolume = hook.find('.fp-volume');

			//set btns
			hook.find('.toggle-button-box.more').detach().insertAfter(fpTitle);
			hook.find('.fp-controls .fp-playbtn').detach().insertBefore(fpControls);
			$('<span class="btn-radius blt-pps" title="�뚯븙媛먯긽 李④컧 �댁슜">PPS李④컧</span>').appendTo(fpControls);
			hook.find('.select-quality').detach().appendTo(fpControls);
			hook.find('.fp-fullscreen').clone().attr('href','#').text('�꾩껜�붾㈃ �꾪솚').attr('title','�꾩껜�붾㈃').appendTo(fpControls);

			// single player
			if (that._option.single !== 'active') {
				$('<button type="button" class="fp-icon fp-prev">�댁쟾 怨� �ｊ린</button>').insertAfter(fpPause);
				$('<button type="button" class="fp-icon fp-next">�ㅼ쓬 怨� �ｊ린</button>').insertBefore(fpControls);
				$('<button type="button" class="fp-icon fp-repeat" title="諛섎났�댁젣">諛섎났�댁젣</button>').insertBefore(fpVolume);
				$('<button type="button" class="fp-icon fp-random" title="�쒖감">�쒖감�ъ깮</button>').insertBefore(fpVolume);
			} else {
				hook.find('.fp-volume').css('left','0');
			}

			//set play / pause
			hook.off('click', '.fp-play .playbtn').on('click', '.fp-play .playbtn', function(e) {
				e.preventDefault();
				if(hook.hasClass('is-playing')) {
					$(this).text('�ъ깮');
				} else {
					$(this).text('�쇱떆�뺤�');
				}
			}).find('.fp-playbtn').attr('href','#').text('�ъ깮');

			hook.off('click', '.fp-playbtn, .fp-volumebtn').on('click', '.fp-playbtn, .fp-volumebtn', function(e) {
				e.preventDefault();
			});
			
			hook.off('click', '.fp-prev').on('click', '.fp-prev', function(e) {
				fnPlayPrev();
			});

			hook.off('click', '.fp-next').on('click', '.fp-next', function(e) {
				fnPlayNext();
			});

			//set repeat
			hook.off('click', '.fp-repeat').on('click', '.fp-repeat', function(e) {
				if($(this).hasClass('all')) {
					$(this).removeClass('all').addClass('one').text('1怨〓컲蹂�').attr('title','1怨〓컲蹂�');
				} else if($(this).hasClass('one')) {
					$(this).removeClass('one').text('諛섎났�댁젣').attr('title','諛섎났�댁젣');
				} else {
					$(this).addClass('all').text('�꾩껜諛섎났').attr('title','�꾩껜諛섎났');
				}

				fnRepeatClick();
			});

			if(that._option.repeat != null) {
				if(that._option.repeat == 'all') {
					hook.find('.fp-repeat').attr('class', 'fp-icon fp-repeat all').text('�꾩껜諛섎났').attr('title','�꾩껜諛섎났');
				} else if(that._option.repeat == 'one') {
					hook.find('.fp-repeat').attr('class', 'fp-icon fp-repeat one').text('1怨〓컲蹂�').attr('title','1怨〓컲蹂�');
				}
			}

			//set random
			hook.off('click', '.fp-random').on('click', '.fp-random', function(e) {
				if($(this).hasClass('active')) {
					$(this).removeClass('active').text('�쒖감�ъ깮').attr('title','�쒖감');
				} else {
					$(this).addClass('active').text('援먯감�ъ깮').attr('title','援먯감');
				}

				fnRandomClick();
			});
			if(that._option.random != null) {
				hook.find('.fp-random').attr('class', 'fp-icon fp-random active').text('援먯감�ъ깮').attr('title','援먯감');
			}

			//set volume
			hook.find('.fp-volumebtn').attr('href','#').attr('css','left: 0');

			//select-quality
			hook.find('.select-quality').on('click', '.item', function(e) {
				var quality = $(this);
				quality.closest('.toggle-button-box').find('.btn').text($(this).text()).trigger('click');
				if(quality.hasClass('red')) quality.closest('.select-quality').addClass('red');
				else quality.closest('.select-quality').removeClass('red');
			});
		}
	};

	window.MV_PLAYER = MV_PLAYER;
})();

/*
 * mobile
 */
if($(document.documentElement).hasClass('touch')) {
	var anchorCheck = function(t) {
		var currentNode = t;
		while(currentNode != undefined) {
			if(currentNode.nodeName.toLowerCase() == 'a')
				return currentNode;
			else
				currentNode = currentNode.parentNode;
		}
		return currentNode;
	};

	Object.extend(MUSIC_LIST.prototype, {
		touchMove:false,
		_selectCheck:function() {
			var that = this;
			that.selectLength = that.hook.find('.list-wrap .list input[type=checkbox]:checked').length;

			$('#content .foot .list-info .select em').html(that.selectLength);
		},
		_listStart:function(e) {
			var that = this,
				t = e.target,
				e = e.originalEvent;

			var startPoint = hasTouchEvent ? e.touches[0] : e;
			that.startX = startPoint.pageX;
			that.startY = startPoint.pageY;

			that.isScrolling = undefined;

			that.list.bind(MOVE_EV, $.proxy(that._listMove, that));
			that.list.bind(END_EV, $.proxy(that._listEnd, that));
		},
		_listMove:function(e) {
			var that = this;

			e = e.originalEvent;

			var point = hasTouchEvent ? e.touches[0] : e,
				deltaX = point.pageX - that.startX,
				deltaY = point.pageY - that.startY;

			if(typeof that.isScrolling == 'undefined')
				that.isScrolling = !!( that.isScrolling || Math.abs(deltaX) < Math.abs(point.pageY - that.startY) );

			if(!!that.isScrolling) that.touchMove = true;
		},
		_listEnd:function(e) {
			var that = this,
				t = e.target;

			that._endNum = that._getThisIndex(t);

			if(anchorCheck(t) === null && that.touchMove === false) {
				that._listToggleSelect(that.list.eq(that._endNum));
			}

			that.list.unbind(MOVE_EV, $.proxy(that._listMove, that));
			that.list.unbind(END_EV, $.proxy(that._listEnd, that));

			that.touchMove = false;
		},
		_docEvent:null
	});
}


var FG_alertArr = [];
function showAlert(data, is_continue) {
	if(typeof is_continue == 'undefined') is_continue = false;

	var alertLayer = $('#player .controller .alert'),
		alertStatus = true,
		delayTime = 3000;

	var setPosition = function(p) {
		alertLayer = $('#player .controller .alert');
		return (alertLayer.size() > 0) ?
			function() {
				alertLayer.each(function() {
					p += $(this).outerHeight() + 1;
				});
				return p;
			}
			: p;
	};

	if ($('#player').hasClass('mv-player') == false){
		var layerStyle = ($(document).width() >= 650) ?
			{ top:'auto', bottom:setPosition(140) } :
			{ top:setPosition(-71), bottom:'auto' };
	}else{
		var layerStyle ={ top:setPosition(178), bottom:'auto' };
	}

	var fadeOutDone = function(element) {
		var elementHeight = element.outerHeight() + 1;
		alertLayer = $('#player .controller .alert').not('.alert-continue');
		element.remove();
		FG_alertArr.shift();

		if(alertLayer.size() > 0) {
			if(element.css('top') == 'auto') {
				alertLayer.css({ bottom:'-=' + elementHeight });
			} else if(element.css('bottom') == 'auto') {
				alertLayer.css({ top:'-=' + elementHeight });
			}
		}
	};

	$.each(FG_alertArr, function(i) {
		if(String(this) == String(data)) {
			alertLayer.eq(i).fadeOut(function() {
				fadeOutDone($(this));
			});
			alertStatus = false;
			return false;
		} else {
			alertStatus = true;
		}
	});

	if(alertStatus === true) {
		var layer;

		if(!is_continue) {
			layer = $('<div />', {'class':'alert'})
				.appendTo('#player .controller')
				.html(data)
				.css(layerStyle)
				.fadeIn()
				.delay(delayTime)
				.fadeOut('normal', function() {
					fadeOutDone($(this));
				});
		} else {
			layer = $('<div />', {'class':'alert alert-continue'})
				.appendTo('#player .controller')
				.html(data)
				.css(layerStyle)
				.fadeIn();
		}

		FG_alertArr.push(data);
	}
}


function toggleSetting(element) {
	layer = $('.layer-setting');

	if(layer.is(':hidden')) {
		layer.show();
		$(element).addClass('active');
		layer.find('.close').bind('click', function() {
			layer.hide();
			$(element).removeClass('active');
		});
	} else {
		layer.hide();
		$(element).removeClass('active');
	}
}

function resizeWindow(standard, w, h) {
	var window_w = $(window).width();
	if(window_w > standard) {
		try { window.resizeTo(w, h); }
		catch(e) {}
	}
}

var toastIDs = [];
function toastPopup(id, msg, isFadeOut) {
	if(typeof isFadeOut == 'undefined') isFadeOut = true;
	var bottom = 0;

	if($.inArray(id, toastIDs) > -1) return false;

	if($('.toast-popup').size() > 0) bottom = $(window).height() - $('.toast-popup:last').offset().top;

	var toast = $('<div id="' + id + '" class="toast-popup" style="bottom:'+bottom+'px"><p>'+msg+'</p><button type="button" class="close">�リ린</button></div>');

	toast.hide().appendTo('body').on('click', '.close', function(e) {
		toastClose($(this));
	});

	if(isFadeOut) {
		toast.fadeIn(500).delay(3000).fadeOut(400, function(){
			var obj = $(this), objId = obj.attr('id');
			toastIDs.splice($.inArray(objId, toastIDs), 1);
			obj.remove();
		});
	} else {
		toast.on('click', 'a', function(e) {
			toastClose($(this));
		}).fadeIn(500);
	}

	toastIDs.push(id);
}

function toastMVPopup(id, msg, isFadeOut, playerSelector) {
	if(typeof isFadeOut == 'undefined') isFadeOut = true;
	playerSelector = playerSelector || '.fp-player';

	var top = 0;

	if($.inArray(id, toastIDs) > -1) return false;

	if($('.toast-popup').size() > 0) top = $('.toast-popup:last').offset().top + $('.toast-popup:last').outerHeight() - 50;

	var toast = $('<div id="' + id + '" class="toast-popup" style="top:'+top+'px"><p>'+msg+'</p><button type="button" class="close">�リ린</button></div>');

	toast.hide().appendTo(playerSelector + ' .fp-ui').on('click', '.close', function(e) {
		toastClose($(this));
	})

	if(isFadeOut) {
		toast.fadeIn(500).delay(3000).fadeOut(400, function(){
			var obj = $(this), objId = obj.attr('id');
			toastIDs.splice($.inArray(objId, toastIDs), 1);
			obj.remove();
		});
	} else {
		toast.on('click', 'a', function(e) {
			toastClose($(this));
		}).fadeIn(500);
	}

	toastIDs.push(id);
}

function toastClose(obj) {
	var objId = obj.attr('id');
	toastIDs.splice($.inArray(objId, toastIDs), 1);
	obj.closest('.toast-popup').stop().remove();
}

function resetToastPopup() {
	if($('.toast-popup').size() > 0) $('.toast-popup').stop().remove();
	toastIDs = [];
}

function splashLayer(options, targetParent) {
	var $layer = $('<div class="layer-popup" style="width:' + options.width + 'px"' + (options.id && ' id="' + options.id + '"') + '>' +
				'   <div class="pc-regist inner"></div>' +
				'   <div class="close"><a href="#" class="layer-close">�リ린</a></div>' +
				'</div>');

	if(options.title !== undefined) {
		$('<h4/>',{
			text: options.title,
		}).appendTo($layer.find('.inner'));
	}

	if(options.list !== undefined) {
		$('<ul/>', {
			html: (function (){
				var el = '';
				$.each(options.list, function (prop, val) {
					el += '<li>'+ prop + ': <span class="blue">'+ val +'</span></li>';
				});
				return el;
			})()
		}).addClass('note').appendTo($layer.find('.inner'));
	}

	if(options.paragraph  !== undefined){
		$('<p/>', {
			html: options.paragraph
		}).addClass('desc').appendTo($layer.find('.inner'));
	}

	if(options.controls !== undefined){
		var $controls = $('<div class="confirm-btn" />');
		$.each(options.controls, function (prop, val) {
			var className = (val['class'] !== undefined) ? 'conf-btn radius ' + val['class'] : 'conf-btn radius';
			$('<a/>', {
				text: val.text,
				click: val.handleClick
			}).addClass(className).appendTo($controls);
		});
		$layer.append($controls);
	}

	$layer.hide().appendTo(targetParent).on('click', '.close', function() {
		splashClose($(this));
	});

	// �뚮젅�댁뼱 �대��앹뾽 �쒕뜑 �듭뀡 媛� �뗮똿
	var mvSplash = new LAYER_POPUP();
	mvSplash.layerStyle.position = 'absolute';
	mvSplash.option.modalHide = true;
	mvSplash.show($layer);
}

function splashClose(obj) {
	obj.closest('.layer-popup').stop().remove();
}

function showMovieInfo() {
    $('.tab.tab-lyrics .title').html('洹몃옉釉붾（');
    $('.tab.tab-lyrics .artist').html('');
    $('.tab.tab-lyrics .lyrics').html('媛뺥깭援щ뒗 2012�꾨��� �띾� �멸렐�� 移댄럹�� 怨듭뿰��, �뚮줈�� 湲멸굅由ъ뿉�� �몃옒�섍린 �쒖옉�덈떎. 洹몃━怨� 洹명빐 留� 裕ㅼ��� �꾨�怨� �ㅽ뵆由� �⑤쾾 [��]�� 諛쒕ℓ�덈떎. [��]�� �듯빐 泥섏쓬 鍮쏆쓣 蹂닿쾶 �� 媛뺥깭援ъ쓽 �몃옒�� �먮━怨� 怨좎쫰�됲븳 �ы겕 �뚯븙�� 怨좎쟾�� 誘멸컧�� 2010�꾨��� �ㅽ��쇰줈 �몃젴�섍쾶 援ы쁽�대궦 蹂닿린 �쒕Ц �뚯븙�대씪�� �됯낵 �④퍡 �щ엺�ㅼ쓽 �낆뿉�� �낆쑝濡� �꾪빐議뚮떎. �덉씠釉� �몃Ⅸ怨고뙜�댁� �④퍡 2013�� �곕쭚�� �� �깃� [諛붾엺�� �붾뱾由щ뒗 �섎Т�뚮━]�� 2017�� JTBC�� �덊슚由щ꽕 誘쇰컯�됱뿉�� �뚭컻�섎ŉ �ㅼ떆 �� 踰� �щ엺�� �ъ씠�먯꽌 �뚯옄�섍린�� �덈떎. <br><br> \'洹몃옉釉붾（\'�� 諛붾떎 媛숈� �뺤꽌瑜� 媛�吏� 議댁옱�ㅼ뿉 ���� �댁빞湲곗엯�덈떎. 洹멸굔 ���닿린�� �섍퀬 �대뼡 ���몄씠湲곕룄 �⑸땲��. �쒖＜�� �� �� �꿸낵 諛붾떎�� �먯＜ 媛붿뿀�듬땲��. �ㅼ뼇�� 諛붾떎瑜� 遊ㅼ뒿�덈떎. 諛붾떎�� �뚮줎 �꾨쫫�듦퀬, �뚮줎 �먮졄嫄곕굹 �ы뵂 �먮굦�� 二쇨린�� �덉뒿�덈떎. ���� 洹� �쒓컙�ㅼ쓣 湲곕줉�섍퀬 �띠뿀�듬땲��. 洹멸납�먯꽌 �섎늿 ���붾굹, �대뼡 紐⑥뒿, �꾧뎔媛��� �쒖젙 媛숈� 寃껊뱾��  媛�留뚰엳 �먮㈃ 洹몃깷 吏��섍� 踰꾨━�� �쒓컙�ㅼ쓣 �≪븘 �볤퀬 媛꾩쭅�섍퀬 �띠뿀�듬땲��. �쒓컙�� 吏��섍� 踰꾨━吏�留�, 湲곗뼲�� 癒몃Ъ寃� �댁＜�덇퉴��. <br>- 媛뺥깭援�');
    $('.btn-lyrics').trigger( "click" );
    $('.tab.tab-lyrics > *').show();
    $('.no-data').hide();
}

function toggleLyrics() {
	$('.btn-lyrics').trigger( "click" );
    $('.tab.tab-lyrics > *').hide();
    $('.no-data').show();
}

var imgViewerSlider;

function setImageViewer(json) {
	$('.btn-viewer').show();

	var html = new Array();

	for(var i=0;i<json.length;i++) {
		html.push('<li><img src="//image.genie.co.kr'+json[i].IMG_PATH+'" onerror="this.src=\'//image.genie.co.kr/imageg/web/common/blank.png\';" alt="" /></li>');
	}

	if(imgViewerSlider != null) imgViewerSlider.destroySlider();

	var pager = true;
	if(navigator.userAgent.indexOf("MSIE 8") > 0) {
		pager = false;
	}

	imgViewerSlider = $('#img-viewer .bxslider').html(html.join('')).bxSlider({
		mode: 'fade',
		pager: pager,
		pagerType: 'short',
		pagerShortSeparator: ' / ',
		infiniteLoop: false,
		hideControlOnEnd: true,
		prevSelector: '.img-viewer .btn-prev',
		nextSelector: '.img-viewer .btn-next',
		speed: 400
	});

	$('#img-viewer').off('click').on('click', '.close', function(e) {
		$('#img-viewer').removeClass('active');
		$('.btn-viewer').focus();
	});
}

function loadingPlayer(hook) {
	FG_loading.loadingAppendTo = hook;
	Object.extend(FG_loading.loadingBoxStyle, {
		height: 'auto',
		bottom: 0
	});

	Object.extend(FG_loading.loadingImageStyle, {
		position:'absolute'
	});

	FG_loading._start();

	setTimeout(function() {
		FG_loading._end();
	}, 5000);
}

function loadingPage() {
	var FG_popupLoad = new LOADING();

	FG_popupLoad.loadingImageIntervalTime = 200;
	FG_popupLoad.loadingImageCount = 6;
	Object.extend(FG_popupLoad.loadingImageValue, {
		width:175,
		height:58
	});

	Object.extend(FG_popupLoad.loadingBoxStyle, {
		opacity:0.85
	});
	Object.extend(FG_popupLoad.loadingImageStyle, {
		width:FG_popupLoad.loadingImageValue.width,
		height:FG_popupLoad.loadingImageValue.height,
		margin:'-'+ (FG_popupLoad.loadingImageValue.height / 2) +'px 0 0 -'+ (FG_popupLoad.loadingImageValue.width / 2) +'px',
		backgroundImage:'url("//image.genie.co.kr/imageg/web/common/loading_pop_r1.png")'
	});

	FG_popupLoad._start();

	setTimeout(function() {
		FG_popupLoad._end();
	}, 5000);
}