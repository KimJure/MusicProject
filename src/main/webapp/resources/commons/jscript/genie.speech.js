/**
 * Created by yeomchangryong on 2017. 7. 11..
 */

(function() {
	var GENIE_SPEECH = function(_voices, _callback) {
		this.voices = _voices;
		this.callback = _callback;
		this.avail = false;
		this.recognition = null;
		this.init();
	};

	GENIE_SPEECH.prototype = {
		init: function() {
			var that = this;

			try {
				var SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

				if (SpeechRecognition != undefined) {
					that.recognition = new SpeechRecognition();

					//console.log("that.recognition>>>");
					//console.log(that.recognition);

					var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;

					if(SpeechGrammarList != undefined) {
						var grammar = '#JSGF V1.0; grammar voices; public <color> = ' + that.voices.join(' | ') + ' ;';

						var speechRecognitionList = new SpeechGrammarList();
						speechRecognitionList.addFromString(grammar, 1);

						that.recognition.grammars = speechRecognitionList;
						that.recognition.lang = 'ko';
						that.recognition.continuous = true;
						that.recognition.interimResults = true;

						that.recognition.onstart = function() {
							console.log('recognition.start');
						};

						that.recognition.onstop = function() {
							console.log('recognition.stop');
						};

						that.recognition.onresult = function (event) {
							var last = event.results.length - 1;
							var voice = event.results[last][0].transcript;

							that.callback(voice.replace(/(\s*)/g, ""));
						};

						that.recognition.onspeechend = function () {
							//console.log('Stop to receive a color command.');
						};

						that.recognition.onnomatch = function (event) {
							//console.log('I didn\'t recognise that color.');
						};

						that.recognition.onerror = function (event) {
							//console.log('Error occurred in recognition: ' + event.error);
						};

						that.avail = true;
					}
				}
			} catch(e) {
			}
		},

		on: function() {
			var that = this;

			if(that.avail) {
				that.recognition.start();
			}
		},

		off: function() {
			var that = this;

			if(that.avail) {
				that.recognition.stop();
			}
		}
	};

	window.GENIE_SPEECH = GENIE_SPEECH;
})();