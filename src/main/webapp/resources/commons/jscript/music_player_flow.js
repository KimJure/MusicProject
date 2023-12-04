var musicAdultYn = "N";

var tempAnotherToken = "";
var strAnotherToken = "";

var sFullStreamYN = "Y";
var isSnsStmLog = false;
var isFlowplayerLoad = false;
var cdnDomain = "";
var audioApi;

var ALBUM_ID;
var ARTIST_ID;

var isPlay = false;			//理쒖큹 �ъ깮 �щ�(false : 理쒖큹)
var iPlaySongId = 0;		//�꾩옱 �ъ깮 以묒씤 SONG_ID
var iSongDuration = 0;		//�꾩옱 �ъ깮 以묒씤 怨≪쓽 �ъ깮�쒓컙
var iSongTotalCnt = 0;		//珥� 怨≪닔
var iTotalDuration = 0;

var retryCnt = 0;			//�ъ깮 �ъ떆�� 移댁슫��(理쒕� 3��)

var iProdType = 0;			//1: �곹뭹�ъ슜��, 2:���몃옓3, 3:醫낅웾�쒖긽��, 4:�뚯븙�섎늻湲�, 5:�뚮쑑�뚯븙媛먯긽

var stmAbusingCnt = 200;
var iStmLogSecond = 60;		//�뺤궛濡쒓렇 �몄텧 �쒖젏
var iAddStmLogSecond = 0;
var iBeforeStmSecond = 0;

var is60 = false;			//�뺤궛 愿��� 泥섎━ �щ�(true硫� �뺤궛濡쒓렇, PPS 李④컧 �� 紐⑤몢 泥섎━)
var isAction = false;		//�꾩껜 媛먯긽 媛��ν븳 �곹깭�몄� 援щ텇
var strStreamLogData = "";	//�뺤궛 濡쒓렇
var strStreamLogData2 = "";	//PPS 李④컧�� 濡쒓렇

var strRandomChk = "";		//�쒕뜡 �ъ깮 泥댄겕��
var isSyncAction = "N";		//�ъ깮紐⑸줉 �숆린�� 泥섎━ 以묒씤吏� 援щ텇(Y�대㈃ �숆린�� 以묒씠誘�濡� �ъ깮紐⑸줉 異붽� �� 泥섎━�� 蹂꾨룄 援щ텇)
var sStopState = false;		//#TO-DO:�⑸룄 �뺤씤 �꾩슂#
var isClickChk = false;		//�뚮젅�댁뼱 �ㅻ룞�� 諛⑹�瑜� �꾪빐 �붾툝�대┃ 李⑤떒
var isClickChkSet = function() { isClickChk = false; };

var isPreviewCover = false;	//�뚮젅�댁뼱 �ㅽ뵂�� �ъ깮�� 怨� �뺣낫 �명똿�� �꾪빐 �ъ슜(�뚮젅�댁뼱 �붾㈃ �명똿留� �섍퀬 �ъ깮�� �덈릺�꾨줉)

var lyricsYn = 'N',
	normalLyrics = '';

var isPlayEnd = false;

var browserInfo = fnGetBrowserInfo();

function flowplayerLoad() {
	if(browserInfo.browser.name == 'Edge') {
		var ver = browserInfo.browser.version;

		if(!isNaN(ver)) {
			if(parseInt(ver) < 16) {
				fnShowIssueLayer('updateEdge');
			}
		}
	}
	
	if (browserInfo.browser.name == 'ie' && parseInt(browserInfo.browser.version, 10) > 10 && !('MediaSource' in window)) {
		fnShowIssueLayer('notSupportMedia');
		return false;
	}
	
	if(
		(browserInfo.browser.name == 'Chrome' && parseInt(browserInfo.browser.version, 10) < 50) ||
		(browserInfo.browser.name == 'Firefox' && parseInt(browserInfo.browser.version, 10) < 53)
	) {
		FG_layerPopup.show('#notSupportBrowser');
	}

	flowplayer.conf = {
		debug: false,
		key: "$551322333229375",
		splash: false,
		poster: false,
		fullscreen: false,
		share: false,
		autoplay: false,
		mutedAutoplay: false,
		audioOnly: true,
		keyboard: false,
		muted: iRemoveVolume == 0 ? true : false,
		volume: iVolumeLevel
	};

	flowplayer(function (api, root) {
		api.unbind("error");

		api.on("load", function (e, api, video) {
			$('.flowplayer').css({
				'height': '',
				'margin-top': ''
			});

			$('.fp-controls').css({'background': 'none'});

		}).on("ready", function (e, api, video) {
			api.video.duration = iSongDuration;
			iAddStmLogSecond = 0;

		}).on("beforeresume", function(e) {
			if(!isPlay && !sStopState) {
				if(iNowPlayMode == 2) {
					fnPlayShare(iPlaySeqShare);
				} else {
					fnPlay(iPlaySeq);
				}
				e.preventDefault();
			}

		}).on("buffer", function (e, api, buffer) {

		}).on('progress', function(e, api) {
			//�ъ깮�곹깭 �쒖떆
			//濡쒓렇�� �� �ъ깮 以묒씤 怨� 諛붾줈 �ъ깮�섎뒗�� �ъ슜
			if(api.playing) {
				isPlay = true;
				sStopState = true;
			}

			var playTime = api.video.time - iBeforeStmSecond;

			iAddStmLogSecond = iAddStmLogSecond + (playTime > 0 ? playTime : 0);
			iBeforeStmSecond = api.video.time;

			fnPlayingTime(api.video.time, iSongDuration);

		}).on('beforeseek', function(e, api, seekTime) {
			iBeforeStmSecond = seekTime;
			if(lteIE8 && seekTime < 10) e.preventDefault();

		}).on('seek', function(e, api) {
			//�꾧끝 �ъ깮 �좊Т, �쒕쾲�대씪�� seeking�덉쓣 �뚯뿉�� �꾧끝 濡쒓렇 �④린吏� �딆쓬
			sFullStreamYN = "N";

		}).on("pause", function (e, api) {
			setTimeout(function() {
				isPlay = false;
			}, 500);

		}).on("stop", function (e, api) {

		}).on('finish', function(e, api) {
			if(!is60) {
				iAddStmLogSecond = iSongDuration - iAddStmLogSecond <= 1 ? iSongDuration : iAddStmLogSecond;
				fnPlayingTime(iAddStmLogSecond, iSongDuration);
			}

			//�꾧끝 �ъ깮 濡쒓렇
			if (sFullStreamYN == "Y") {
				fnFullStreamLog(iPlaySongId, iMemUno);
			}

			fnPalyStopAction(2, 0);

		}).on('volume', function(e, api, vol) {
			iVolumeLevel = vol;

			if(iVolumeLevel == 0 && !api.muted) {
				api.mute();
			}

			fnSetPlayerCookie();

		}).on('mute', function(e, api, muted) {
			iRemoveVolume = muted ? 0 : 1;
			fnSetPlayerCookie();

		}).on("error", function(e, api, err) {
			var errCd = err.code,
				errMsg = err.message,
				msg = "";

			switch(errCd) {
				case 1: msg = "�뚯썝�� �ъ깮�섏� 紐삵뻽�듬땲��."; break;
				case 2: msg = "�ㅽ듃�뚰겕 �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎."; break;
				case 3: msg = "吏��먰븯吏� �딅뒗 �몄퐫�� �뚯썝�낅땲��."; break;
				case 4: msg = "PC�ㅽ뵾而�/�ㅻ뱶�� �곌껐怨� �명꽣�� �묒냽 �곹깭瑜� �뺤씤�댁＜�몄슂.<br>�뺤긽�� 寃쎌슦�먮룄 �ъ깮�� �먰솢�섏� �딆쓣 寃쎌슦 怨좉컼�쇳꽣濡� 臾몄쓽�� 二쇱떆湲� 諛붾엻�덈떎."; break;
				case 5: msg = "吏��먰븯吏� �딅뒗 �몄퐫�� �뚯썝�낅땲��."; break;
				case 6: msg = "�ㅽ궓�� �곸슜�섏� 紐삵뻽�듬땲��."; break;
				case 7: msg = "�뚮옒�щ� 濡쒕뵫�섏� 紐삵뻽�듬땲��."; break;
				case 8: msg = "�뚯썝 �쒕ぉ�� �섎せ�섏뿀�듬땲��."; break;
				case 9: msg = "�섎せ�� �ㅽ듃由щ컢 URL�낅땲��.[RTMP]"; break;
				case 10: msg = "吏��먰븯吏� �딅뒗 �몄퐫�� �뚯썝�낅땲��.<br>理쒖떊 踰꾩쟾�쇰줈 �ㅼ튂�대낫�몄슂."; break;
				default: msg = "�ъ깮�섎뒗�� �ㅻ쪟媛� 諛쒖깮�덉뒿�덈떎.[" + errMsg + "]"; break;
			}

			//踰꾪띁留곸씠 紐삵븯�� �곹솴�� 寃쎌슦(CDN timeout, network)
			if(retryCnt < 3 && errCd == 2 && errMsg != null && errMsg.toUpperCase().indexOf('PIPELINE_ERROR_READ') > -1) {
				retryCnt++;
				toastPopup('NETWORK_ERROR', '�ㅽ듃�뚰겕�� 臾몄젣媛� 諛쒖깮�섏뿬 �ㅼ떆 �ъ깮 �쒕룄�⑸땲��.(�ъ떆�� �잛닔 : ' + retryCnt + ')');
				fnPlay(iPlaySeq);
				return false;
			}

			retryCnt = 0;

			if(msg != "") {
				if(errCd == 4) {
					if (trustedIE() == 2) {
						fnShowIssueLayer('trustedIE');
					} else {
						toastPopup('PLAYER_ERROR', msg, false);
					}
				} else {
					toastPopup('PLAYER_ERROR', msg);
				}
				fnPlayStopEnd();
			}
		});

		var randomCss = null,
			repeatCss = null;

		if(iRepeatType == 2) {
			repeatCss = "one";
		} else if(iRepeatType == 1) {
			repeatCss = "all";
		}

		if(iRandomType == 1) {
			randomCss = "active";
		}

		MusicPlayer._option = {
			repeat: repeatCss, //one, all
			random: randomCss //active
		};

		MusicPlayer._load($('.flowplayer'));
	});

	if(flowplayer.support.video) {
		cdnDomain = "hls";

		audioApi = flowplayer("#fp-audio", {
			wmode: "transparent",
			clip: {
				audio: true,
				hlsjs: {
					safari: true
				},
				sources: [
					{
						type: "application/x-mpegurl",
						src: (browserInfo.browser.name !== 'ie') ? httpMuteMp3 : httpMuteM4a
					}
				]
			},
			hlsjs: {
				debug: false
			}
		}).one('ready', function(e) {
			$(".fp-duration").html("00:00");
			audioApi.stop();
			audioApi.unload();
			
			isFlowplayerLoad = true;
		});
	} else {
		FG_popupLoad._end();
		alert('吏��먰븯吏� �딅뒗 釉뚮씪�곗��낅땲��.');
		window.close();

		return false;
	}
}

function fnSetStreamBit(bit, qtp){
	if (browserInfo.browser.name === 'ie'){
		strStreamBit = '96';
		strFileType = 'AAC';
	}
	
	if (bit != "" && bit != null && typeof bit != 'undefined'){
		strStreamBit = browserInfo.browser.name !== 'ie' ? bit : strStreamBit;
		strFileType = browserInfo.browser.name !== 'ie' ? qtp : strFileType;
		fnSetPlayerCookie();
		toastPopup(
			'BITRATE_CHANGE',
			(browserInfo.browser.name === 'ie' && bit !== '96') ? 'Internet Explorer 11 釉뚮씪�곗��먯꽌�� AAC+ �뚯쭏濡쒕쭔 �ъ깮�� �� �덉뒿�덈떎.' : '�좏깮�섏떊 �뚯쭏�� �ㅼ쓬 怨〓��� �곸슜�⑸땲��.'
		);
	}
	
	setTimeout(function () {
		if (strStreamBit == '1000') {
			$("#dpBitrate").html('flac');
		} else if (strStreamBit == '96') {
			$("#dpBitrate").html('AAC+');
		} else {
			$("#dpBitrate").html(strFileType + ' ' + strStreamBit + 'k');
		}
	});
}

function fnRandomClick(){
	if($(".fp-random").hasClass('active')) {
		iRandomType = 1;
	} else {
		iRandomType = 0;
	}

	fnSetPlayerCookie();
}

function fnRepeatClick(){
	//0:諛섎났�놁쓬, 1:�꾧끝, 2:1怨�
	if($('.fp-repeat').hasClass('all')) {
		iRepeatType = 1;
	} else if($('.fp-repeat').hasClass('one')) {
		iRepeatType = 2;
	} else {
		iRepeatType = 0;
	}

	fnSetPlayerCookie();
}

function fnGetDefaultPlayListArr(arr){
	var html = '';

	if(lsNowVer != lsSvcVer) {
		//�ъ깮紐⑸줉 踰꾩쟾�� 蹂�寃쎈맂 寃쎌슦 湲곗〈 ���λ맂 localstorage �곗씠�곕� �ㅼ떆 議고쉶�댁샂
		var songids = '';

		for(var i = 0; i < arr.length; i++)  {
			songids += arr[i].SONG_ID + ';';
		}

		songids = songids.substr(0, songids.length - 1);

		fnGetDefaultPlayList(songids);

		return false;
	}

	for(var i = 0; i < arr.length; i++) {
		html += listSort._template(arr[i]);
	}

	iSongTotalCnt = iSongTotalCnt + arr.length;

	if(listSort.arrayLists.length == 0) {
		listSort.arrayLists = arr;
	} else {
		listSort.arrayLists.concat(arr);
	}

	$(listSort.listsWrap).html(html);
	$("#SongTatalArea").html(iSongTotalCnt);
	$("#SongTitleTotal").html("(" + iSongTotalCnt + ")");

	fnPlaylistReload();

	if(iSongTotalCnt == 0) {
		$('#music-tab .list-wrap>ul').hide();
		$('#music-tab .no-data').show();
	} else {
		$('#music-tab .list-wrap>ul').show();
		$('#music-tab .no-data').hide();

		//留덉�留� �ъ깮�� 怨� �ъ깮紐⑸줉�� �쒖떆
		//fnSetNowPlaying();
		isPreviewCover = true;
		fnPlay(iPlaySeq);
	}

	FG_popupLoad._end();
	strOnload = "Y";
}

function fnGetDefaultPlayListCookie(songs){
	if (songs != ""){

		if (iSongTotalCnt >=500){
			toastPopup('PLAYLIST_FULL', '�ъ깮紐⑸줉�먮뒗 500怨� 源뚯� �댁쓣 �� �덉뒿�덈떎.<br/>珥덇낵 �섎뒗 怨≪� �ъ깮紐⑸줉�� 異붽� �섏� �딆뒿�덈떎.');
			return;
		}

		var iChkPlaySeq = iSongTotalCnt;

		$.post("/player/bPlayerSongList", {xgnm: songs, s: iSongTotalCnt, d: iTotalDuration},
			function(strResult){
				strResult = $.trim(strResult);

				if (strResult != ""){
					$(listSort.listsWrap).html(strResult);

					$("#SongTatalArea").html(iSongTotalCnt);
					$("#SongTitleTotal").html("(" + iSongTotalCnt + ")");

					fnPlaylistReload();

					if(iSongTotalCnt == 0) {
						$('#music-tab .list-wrap>ul').hide();
						$('#music-tab .no-data').show();
					} else {
						$('#music-tab .list-wrap>ul').show();
						$('#music-tab .no-data').hide();

						//留덉�留� �ъ깮�� 怨� �ъ깮紐⑸줉�� �쒖떆
						//fnSetNowPlaying();
						isPreviewCover = true;
						fnPlay(iPlaySeq);
					}

					strOnload = "Y"
				}
			}
		).error(function(){
			alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![0]");
		});
	}else{
		FG_popupLoad._end();
		fnClearInterval(LoadInterval);
	}
	strRandomChk = "";

}

function fnGetDefaultPlayList(songs){
	if (songs != ""){
		// localstorage�먯꽌 �쎌뼱�ㅻ㈃ JSON�곗씠�곌� 諛붾줈 �ㅼ뼱媛��� �� 泥섎━��.
		songs = getSongIdsInStorage(songs);

		if (iSongTotalCnt >=1000){
			toastPopup('PLAYLIST_FULL', '�ъ깮紐⑸줉�먮뒗 1000怨� 源뚯� �댁쓣 �� �덉뒿�덈떎. 珥덇낵 �섎뒗 怨≪� �ъ깮紐⑸줉�� 異붽� �섏� �딆뒿�덈떎.');
			return;
		}

		$.ajax({
			url: "/player/jPlayerSongList.json",
			type: "POST",
			data: {xgnm: songs},
			dataType: "json",
			success: function (k) {
				if(k.resultCode == 0) {
					var arr = k.DataSet.DATA;
					var html = '';

					for(var i = 0; i < arr.length; i++) {
						html += listSort._template(arr[i]);
					}

					iSongTotalCnt = iSongTotalCnt + arr.length;

					if(listSort.arrayLists.length == 0 || lsNowVer != lsSvcVer) {
						listSort.arrayLists = arr;
					} else {
						listSort.arrayLists = listSort.arrayLists.concat(arr);
					}

					$(listSort.listsWrap).html(html);
					$("#SongTatalArea").html(iSongTotalCnt);
					$("#SongTitleTotal").html("(" + iSongTotalCnt + ")");

					fnPlaylistReload();

					if(lsNowVer != lsSvcVer) {
						lsNowVer = lsSvcVer;
						genieStore.set('geniePlayVer', lsNowVer);
					}

					if(iSongTotalCnt == 0) {
						$('#music-tab .list-wrap>ul').hide();
						$('#music-tab .no-data').show();
					} else {
						$('#music-tab .list-wrap>ul').show();
						$('#music-tab .no-data').hide();

						//留덉�留� �ъ깮�� 怨� �ъ깮紐⑸줉�� �쒖떆
						//fnSetNowPlaying();
						isPreviewCover = true;
						fnPlay(iPlaySeq);
					}

					strOnload = "Y";
				} else {
					toastPopup('LICENSE_NONE', '�ъ깮 遺덇� �뚯썝 �낅땲��!');
				}
			},
			error: function(e) {
				FG_popupLoad._end();
				alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![1]");
			},
			complete : function(e){
				FG_popupLoad._end();
			}
		});
	}else{
		$('#music-tab .list-wrap>ul').hide();
		$('#music-tab .no-data').show();
		FG_popupLoad._end();
	}
	strRandomChk = "";

}

function fnGetPlayListCookie(songs, at){
	$("#MusicListFirst").remove();

	if (songs != ""){
		if (iSongTotalCnt >=500){
			if(!isLSMsgShow) {
				alert("�꾩옱 �� PC�� �ъ깮紐⑸줉�먮뒗 500怨� 源뚯� �댁쓣 �� �덉뒿�덈떎.\n珥덇낵 �섎뒗 怨≪� �ъ깮紐⑸줉�� 異붽� �섏� �딆뒿�덈떎.\n�뚮젅�댁뼱 �곷떒 FAQ瑜� �좏깮�섏떆硫�, �곸꽭�� �댁슜�� �뺤씤�섏떎 �� �덉뒿�덈떎.");
				isLSMsgShow = true;
			} else {
				toastPopup('PLAYLIST_FULL', '�ъ깮紐⑸줉�먮뒗 500怨� 源뚯� �댁쓣 �� �덉뒿�덈떎.<br/>珥덇낵 �섎뒗 怨≪� �ъ깮紐⑸줉�� 異붽� �섏� �딆뒿�덈떎.');
			}
			return;
		}

		var iChkPlaySeq = iSongTotalCnt;

		$.post("/player/bPlayerSongList", {xgnm: songs, s: iSongTotalCnt, d: iTotalDuration},
			function(strResult){
				strResult = $.trim(strResult);
				if (strResult != ""){
					if ((strAddType == 2)&&($('#music-tab li.list').hasClass('this-play'))){
						$('.this-play').after(strResult);
					}else{
						$(listSort.listsWrap).append(strResult);
					}

					fnPlaylistReload();

					if(iSongTotalCnt == 0) {
						$('#music-tab .list-wrap>ul').hide();
						$('#music-tab .no-data').show();
					} else {
						$('#music-tab .list-wrap>ul').show();
						$('#music-tab .no-data').hide();

						//留덉�留� �ъ깮�� 怨� �ъ깮紐⑸줉�� �쒖떆
						//fnSetNowPlaying();
						isPreviewCover = true;
						fnPlay(iPlaySeq);
					}

					if ((isPlay==false) && (iPlaySeq==0)){//理쒖큹李쎌삤��,�ъ깮��
						if (strStreamList != ""){
							if (parseInt(iPlayType) < 3){
								fnPlay(iChkPlaySeq+1);
							}
						}
					}else{
						if (at == 1){
							if(strAddType == 2) {
								fnPalyStopAction(1, iPlaySeq + 1);
							} else {
								fnPalyStopAction(1, iChkPlaySeq + 1);
							}
						}
						toastPopup('PLAYLIST_ADD', '�ъ깮紐⑸줉�� 異붽��섏뿀�듬땲��.');
					}

					if (isSyncAction == "N"){
						$("#SinkArea").html("");
					}else{
						isSyncAction = "N"
					}
				}else{//�꾪뻾�� �ㅻ쪟 諛� 湲고� 硫뷀� �뺣낫 error
					toastPopup('LICENSE_NONE', '�ъ깮 遺덇� �뚯썝 �낅땲��!');
				}

				strOnload = "Y";

			}
		).error(function(){
			alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![1]");
		});
	}else{
		$('#music-tab .list-wrap>ul').hide();
		$('#music-tab .no-data').show();
		FG_popupLoad._end();
	}
	strRandomChk = "";
}

function fnGetPlayList(songs, at){
	if(isFlowplayerLoad) {
		if(!genieStore.isLocalstorage) {
			fnGetPlayListCookie(songs, at);
			return false;
		}

		if (songs != ""){
			// localstorage�먯꽌 �쎌뼱�ㅻ㈃ JSON�곗씠�곌� 諛붾줈 �ㅼ뼱媛��� �� 泥섎━��.
			songs = getSongIdsInStorage(songs);

			if (iSongTotalCnt >=1000){
				toastPopup('PLAYLIST_FULL', '�ъ깮紐⑸줉�먮뒗 1000怨� 源뚯� �댁쓣 �� �덉뒿�덈떎. 珥덇낵 �섎뒗 怨≪� �ъ깮紐⑸줉�� 異붽� �섏� �딆뒿�덈떎.');
				return;
			}

			var iChkPlaySeq = iSongTotalCnt;

			$.ajax({
				url: "/player/jPlayerSongList.json",
				type: "POST",
				data: {xgnm: songs},
				dataType: "json",
				async: false,
				success: function (k) {
					if(k.resultCode == 0) {
						var arr = k.DataSet.DATA;
						var html = '';

						for(var i = 0; i < arr.length; i++) {
							if(iSongTotalCnt >= 1000) {
								toastPopup('PLAYLIST_FULL', '�ъ깮紐⑸줉�먮뒗 1000怨� 源뚯� �댁쓣 �� �덉뒿�덈떎. 珥덇낵 �섎뒗 怨≪� �ъ깮紐⑸줉�� 異붽� �섏� �딆뒿�덈떎.');
								break;
							}

							html += listSort._template(arr[i]);
							iSongTotalCnt++;

							// �꾩옱 �ъ깮怨� �댁뼱 �ｊ린�쒖뿉 怨� 異붽� �ㅻ쪟 �섏젙. 2016-06-07 �댄솉
							if ((strAddType == 2)&&($('#music-tab li.list').hasClass('this-play'))){
								listSort.arrayLists.splice($(".this-play").index()+1 , 0, arr[i]);
							}else{
								listSort.arrayLists = listSort.arrayLists.concat(arr[i]);
							}
						}

						if ((strAddType == 2)&&($('#music-tab li.list').hasClass('this-play'))){
							$(html).insertAfter('.this-play');
						}else{
							$(html).appendTo("#music-tab .list-wrap>ul");
						}

						$("#SongTatalArea").html(iSongTotalCnt);
						$("#SongTitleTotal").html("(" + iSongTotalCnt + ")");

						fnPlaylistReload();

						$('#music-tab .list-wrap>ul').show();
						$('#music-tab .no-data').hide();

						if(lsNowVer != lsSvcVer) {
							lsNowVer = lsSvcVer;
							genieStore.set('geniePlayVer', lsNowVer);
						}

						if (!isPlay && iPlaySeq == 0){//理쒖큹李쎌삤��,�ъ깮��
							if (strStreamList != ""){
								if(parseInt(iPlayType) < 3){
									fnPlay(iChkPlaySeq + 1);
								}
							}
						}else{
							if (at == 1){
								isPlayEnd = false;

								if(strAddType == 2) {
									fnPalyStopAction(1, iPlaySeq + 1);
								} else {
									fnPalyStopAction(1, iChkPlaySeq + 1);
								}
							}

							toastPopup('PLAYLIST_ADD', '�ъ깮紐⑸줉�� 異붽��섏뿀�듬땲��.');
						}
					} else {//�꾪뻾�� �ㅻ쪟 諛� 湲고� 硫뷀� �뺣낫 error
						toastPopup('LICENSE_NONE', '�ъ깮 遺덇� �뚯썝 �낅땲��!');
					}

					strOnload = "Y";
				},
				error: function(e) {
					alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![1]");
				}
			});
		}else{
			FG_popupLoad._end();
		}
		strRandomChk = "";
	}
}

function fnGetAlbumList(albumid, at){
	if (albumid != ""){
		var strParams = {axnm: albumid};
		$.post("/player/bPlayerAlbumList", strParams,
			function(strResult){
				strResult = $.trim(strResult);
				if (strResult != ""){
					fnGetPlayList(strResult, at);
				}else{
					alert("�⑤쾾 �섎줉怨� �뺣낫媛� 議댁옱 �섏� �딆뒿�덈떎.");
				}
			}
		).error(function(){
			alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![4]");
		});
	}else{
		alert("�뚮씪誘명꽣 �뺣낫媛� 議댁옱 �섏� �딆뒿�덈떎.");
	}
}

function fnSetNowPlaying() {
	var tempSeq = iPlaySeq-1;
	if(tempSeq < 0) tempSeq = 0;
	//�꾩옱 �ъ깮以묒씤 怨� �쒖떆
	musicList.list.removeClass('this-play').eq(tempSeq).addClass('this-play');

	if($('.list-wrap .this-play')[0]) { //�쒖꽦�� �� �곹깭�먯꽌留� �ъ빱��
		var scrollPos = ($('#music-tab .list-wrap').scrollTop() + $('.list-wrap .this-play').position().top) - ($('#music-tab .list-wrap').height() / 2) + ($('.list-wrap .this-play').height() / 2);
		$('#music-tab .list-wrap').animate({ scrollTop: scrollPos }, 500);
	}
}

function PlayerErrorReset() {
	$("#fp-audio")
		.removeClass("is-error")
		.addClass("is-mouseover");

	try {
		audioApi.error = audioApi.loading = audioApi.seeking = false;
	} catch(e) {}
}

function fnPalyStopAction(op, seq){
	sStopState = false;

	if(!isPlayEnd) {
		isPlayEnd = true;

		if(op==1){
			fnPlay(seq);
		}else if(op==2){
			setTimeout(fnPlayNext, 1000);
		}else if(op==3){
			setTimeout(fnPlayPrev, 1000);
		}
	}
}

function fnPlayListAction(seq){
	if(!isPlay && !sStopState){
		//泥섏쓬
		fnPlay(seq);
	}else if(sStopState){
		//由ъ뒪��
		fnPalyStopAction(1, seq);
	}else if(isPlay && sStopState){
		//???
		fnPalyStopAction(1, seq);
	}else{
		//萸먯�...??
		fnPalyStopAction(1, seq);
	}
}

function smStationImgViewer(){
	var songid = iNowPlayMode == 2 ? iPlaySongIdShare : iPlaySongId;

	if($.isNumeric(songid)){
		$.ajax({
			type:"POST",
			url:"/player/imageViewerList",
			data: {songId : songid},
			success : function(strResult) {
				if(strResult == null || strResult == '') {
					$('.btn-viewer').hide();
				} else {
					setImageViewer(strResult);
				}
			},
			error: function() {
				$('.btn-viewer').hide();
			}
		});
	}
}

function fnPlaylistSort(field, asc) {
	listSort._sort(field, asc);
	fnPlaylistReload(true, false, true);
}

function fnPlay(seq){
	if(!isClickChk && supportStatusCheck() !== 'notSupport') {
		isClickChk = true;

		if(iSongTotalCnt==0){
			toastPopup('PLAYLIST_NONE', '�ъ깮紐⑸줉�� 異붽��� 怨≪씠 �놁뒿�덈떎.');
			isClickChk = false;
			return false;
		}else if(seq == 0) {

			if($("#SongTatalArea").val() == "0" ) {
				toastPopup('PLAYLIST_NONE', '�ъ깮紐⑸줉�� 異붽��� 怨≪씠 �놁뒿�덈떎.');
				isClickChk = false;
				return false;
			} else {
				seq = 1;
			}
		}

		document.title = "吏��� : �뚯븙, 洹몃━怨� �ㅻ젅��";

		if ((iRandomType == 1) && (iRepeatType == 0) && (strRandomChk == "")){//�쒕뜡�ㅼ젙 諛섎났�놁쓣 ��
			strRandomChk = "**"+seq+"**";
		}

		iNowPlayMode = 1;

		iProdType = 0;
		iStmLogSecond = 60;
		is60 = false;
		isAction = false;
		isSnsStmLog = false;
		strStreamLogData = "";
		strStreamLogData2 = "";
		iSongDuration = 0;
		iPlaySeq = seq;

		lyricsYn = 'N';
		normalLyrics = '';
		musicAdultYn = 'N';

		//肄섑듃濡� �곸뿭 李⑤떒 �덉씠�� �쒓굅 �덈릺�� �댁뒋 泥섎━
		$(".no-play #player .block-after").remove();
		$("body").removeClass("no-play");

		iPlaySongId = parseInt(musicList.list.eq(parseInt(seq)-1).attr('music-id'));

		if (iPlaySongId == "NaN" || isNaN(iPlaySongId)) return false;

		//留덉�留� �ъ깮�� �꾩튂 ����
		fnSetPlayerCookie();

		if(!isPreviewCover && getStmLogCnt() >= stmAbusingCnt && stmAbusingCnt > 0) {
			isClickChk = false;
			fnStreamConfirm();

			if(audioApi.playing) audioApi.stop();

			return false;
		}

		FG_loading._start();

		// SM image viewer
		smStationImgViewer();

		//'�щ＼ 遺�紐⑥갹 醫낅즺 �� 荑좏궎 ��젣 �꾩긽 �덉쇅 泥섎━ - 20140213 �좎꽦��
		$.ajax({
			type: "post",
			url: "/player/playStmInfo.json",
			contentType: "application/x-www-form-urlencoded; charset=euc-kr",
			data: {
				sq: seq,
				xgnm: iPlaySongId,
				bit: strStreamBit,
				uxnm: iMemUno,
				uxtk:iMemToken,
				ualt: strAnotherToken,
				cdm: cdnDomain,
				previewYn: isPreviewCover ? "Y" : "N",
				qtp : strFileType
			},
			dataType: "json",
			async: false,
			error: function (a, b) {
				FG_loading._end();
				toastPopup('NETWORK_ERROR', '�ㅽ듃�뚰겕 �곹깭媛� �먰솢 �섏� �딆뒿�덈떎. �좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂.');
				isClickChk = false;
			},
			success: function(strResult){
				isPlayEnd = false;

				if (strResult.Result.RetCode == 0){
					clearInterval(FG_lyricInterval);

					$("#HoldArea").removeClass("on");

					var objData					= strResult.DATA0;
					var STREAMING_MP3_URL		= decodeURIComponent(objData.STREAMING_MP3_URL);
					var STREAMING_LICENSE_YN	= objData.STREAMING_LICENSE_YN;
					var SONG_DURATION			= objData.SONG_DURATION;
					musicAdultYn				= objData.ADULT_YN;
					lyricsYn					= objData.LYRICS_YN;
					normalLyrics				= decodeURIComponent(objData.LYRICS);
					var DPMRSTM_CNT				= objData.DPMRSTM_CNT;
					var DPMRSTM_YN				= objData.DPMRSTM_YN;
					var FILE_PATHMP3			= decodeURIComponent(objData.FILE_PATHMP3);
					var SONG_NAME				= decodeURIComponent(objData.SONG_NAME);
					var ARTIST_NAME				= decodeURIComponent(objData.ARTIST_NAME);
					var ISLOGIN					= objData.ISLOGIN;
					var SID						= objData.SID;
					var MRSTM_YN				= objData.MRSTM_YN;
					var MRSTM_MAX_NUM			= objData.MRSTM_MAX_NUM;
					var MRSTM_NUM				= objData.MRSTM_NUM;
					var ABM_IMG_PATH			= decodeURIComponent(objData.ABM_IMG_PATH);
					var SONG_LIKE_YN			= objData.SONG_LIKE_YN;
					var HOLD_BACK				= objData.HOLD_BACK;
					var ALBUM_NAME				= decodeURIComponent(objData.ALBUM_NAME);
					var BITRATE					= objData.BITRATE;
					var ITEM_PPS_CNT			= objData.ITEM_PPS_CNT;
					var NONLICENCE				= objData.NONLICENCE;
					var MEM_CHK_UNO				= objData.MEM_CHK_UNO;
					var LOG_PARAM				= objData.LOG_PARAM;
					var LICENSE_YN				= objData.LICENSE_YN;
					var LICENSE_MSG				= objData.LICENSE_MSG;
					var COLL_ID 				= objData.COLL_ID;

					ALBUM_ID					= objData.ALBUM_ID;
					ARTIST_ID					= objData.ARTIST_ID;
					iStmLogSecond				= parseInt(objData.LOG_SECOND);

					/*
					硫뷀��뺣낫瑜� localstorage ���ν븯誘�濡� 硫뷀�媛� 蹂�寃쎈릺�덉쓣 寃쎌슦瑜� ��鍮꾪빐��
					�ㅽ듃由щ컢�쒕쭏�� 硫뷀�瑜� �낅뜲�댄듃�쒕떎
					 */
					if(isLSStreamList) {
						listSort._updateMeta(parseInt(seq)-1, objData);
						musicList._updateMeta(parseInt(seq)-1, objData);
					}

					sFullStreamYN = "Y";
					lyricsYn = lyricsYn.replace(/</g, "&#60;");
					lyricsYn = lyricsYn.replace(/>/g, "&#62;");
					lyricsYn = lyricsYn.replace(/&#60;br&#62;/gi, "<br />");
					lyricsYn = lyricsYn.replace(/&#60;br\/&#62;/gi, "<br />");
					lyricsYn = lyricsYn.replace(/&#60;br \/&#62;/gi, "<br />");

					iSongDuration = SONG_DURATION;
					strAnotherToken = "";

					if (iMemUno == "" && ISLOGIN == "Y"){
						alert("濡쒓렇�� �섏뼱 �덈줈怨좎묠 �⑸땲��.");
						fnSetPlayerStatus(true);	//20140226 �좎꽦�� - 濡쒓렇�� �� �ъ깮 以� 怨� 泥섏쓬遺��� �ㅼ떆 �ｊ린
						window.document.location.reload();
						return;
					}

					if (iMemUno != "" && ISLOGIN == "N"){
						alert("濡쒓렇�꾩썐 �섏뼱 �덈줈怨좎묠 �⑸땲��.");
						window.document.location.reload();
						return;
					}

					if (iMemUno != MEM_CHK_UNO){
						alert("濡쒓렇�� �뺣낫媛� 蹂�寃� �섏뼱 �덈줈怨좎묠 �⑸땲��.");
						fnSetPlayerStatus(true);	//20140226 �좎꽦�� - 濡쒓렇�� �� �ъ깮 以� 怨� 泥섏쓬遺��� �ㅼ떆 �ｊ린
						window.document.location.reload();
						return;
					}

					if(iMemUno != "" && FG_cookie.get('GENIE%5FUXM') == "") {
						alert("濡쒓렇�꾩썐 �섏뼱 �덈줈怨좎묠 �⑸땲��.");
						window.document.location.reload();
						return;
					}

					//�꾩옱 �ъ깮以묒씤 怨� �쒖떆
					fnSetNowPlaying();

					document.title =  SONG_NAME + " - "+ ARTIST_NAME + " - 吏���";

					$("#SongTitleArea").html(SONG_NAME);
					$("#ArtistNameArea").html(ARTIST_NAME);

					$('#AlbumImgArea').html('<img src="' + ABM_IMG_PATH + '" alt="' + ALBUM_NAME + '" onerror="this.src=\'//image.genie.co.kr/imageg/web/common/blank.png\';"/>');
					$('.player .cover_bg').html('<img src="' + ABM_IMG_PATH + '" alt="' + ALBUM_NAME + '" onerror="this.src=\'//image.genie.co.kr/imageg/web/common/blank.png\';"/>');

					var svg =	'<defs>' +
						'	<filter id="album_bg01">' +
						'		<feGaussianBlur stdDeviation="35" in="SourceGraphic"/>' +
						'	</filter>' +
						'</defs>\n' +
						'<image class="bg_svg_img" xlink:href="' + ABM_IMG_PATH + '" xmlns:xlink="http://www.w3.org/1999/xlink" width="110%" height="110%" preserveAspectRatio="xMidYMid slice" filter="url(&quot;#album_bg01&quot;)"/>';

					$('.player .cover_svg').html(svg);
					$('.player').removeClass('play-ready');

					fnGetPlayerInfo(iPlaySongId);

					if(isPreviewCover) {
						FG_loading._end();
						$('div[id="loading-box"]').remove();
						isClickChk = false;
						isPreviewCover = false;
						return false;

					} else {
						if (musicAdultYn == "Y" && isMemStatus != "4") {
							//19湲� 怨�
							switch(isMemStatus) {
								case "1":	//蹂몄씤�몄쬆 �덊븿
									toastPopup('ADULT_CHECK',
										'泥�냼�� �댁슜�쒗븳 �뚯썝�� �댁슜�섏떆�ㅻ㈃ 蹂몄씤�몄쬆�� �댁빞 �⑸땲��.<br />' +
										'<a href="#" onclick="fnPlayerConfirm(\'3\'); return false;"><span>蹂몄씤�몄쬆�섍린</span></a>'
										, false);
									break;

								case "2":	//誘몄꽦�꾩옄
									toastPopup('ADULT_BLOCK', '�대떦怨≪� 泥�냼�� �댁슜�쒗븳�쇰줈 �ъ깮�섏떎 �� �놁뒿�덈떎. <br/>�ㅼ쓬 怨≪쓣 �ъ깮 �⑸땲��.');
									break;

								case "3":	//蹂몄씤�ъ씤利� �꾩슂
									toastPopup('ADULT_CHECK',
										'泥�냼�� �댁슜�쒗븳 �뚯썝�� �댁슜�섏떆�ㅻ㈃ 蹂몄씤�몄쬆�� �댁빞 �⑸땲��.<br />' +
										'<a href="#" onclick="fnPlayerConfirm(\'3\'); return false;"><span>蹂몄씤�몄쬆�섍린</span></a>'
										, false);
									break;

								default:
									toastPopup('ADULT_LOGIN',
										'泥�냼�� �댁슜�쒗븳 �뚯썝�쇰줈, 濡쒓렇�� �� �댁슜 媛��� �⑸땲��.<br />' +
										'<a href="#" onclick="loginPopup(); return false;"><span>濡쒓렇�명븯湲�</span></a>'
										, false);
							}

							fnGetLyrics();

							FG_loading._end();
							$('div[id="loading-box"]').remove();
							isClickChk = false;
							fnClearSet();

							if(iPlaySeq < iSongTotalCnt) {
								fnPalyStopAction(2,0); //<-- fnPlayNext();
							}else{
								fnPalyStopAction(2,iPlaySeq + 1); //<-- fnPlayNext();
							}

							return;
						}

						//�쇰컲 �ㅽ듃由щ컢, PPS �ъ슜�� �꾩껜 �ъ깮
						if (STREAMING_LICENSE_YN == "Y" || (MRSTM_YN == "Y" && MRSTM_NUM > 0)){
							iSongDuration = SONG_DURATION;
							isAction = true;
						}else{
							iSongDuration = parseInt(SONG_DURATION) < 60 ? SONG_DURATION : 60;
							isAction = false;
						}

						strStreamLogData = LOG_PARAM;

						if (STREAMING_LICENSE_YN == "Y"){
							if(DPMRSTM_YN=="Y"){
								iProdType = 5;	//�뚮쑑�뚯븙媛먯긽
							}else{
								iProdType = 1;	//�쇰컲
							}

						}else if ((MRSTM_YN == "Y") && (MRSTM_NUM > 0)){
							iProdType = 3;	//PPS
							strStreamLogData2 = ITEM_PPS_CNT;
							toastPopup('PPS_COUNT', '�붿뿬怨�: ' + MRSTM_NUM);
						}

						fnGetLyrics();

						$(".btn-like").show();
						$('.has-add-album').show();

						if (SONG_LIKE_YN == "Y"){
							$(".btn-like").addClass("active");
						}else{
							$(".btn-like").removeClass("active");
						}

						if (iSmrsSeq != "" || typeof musicList_share != "undefined"){
							musicList_share.list.removeClass('this-play');
						}

						if (isLogin){
							if (!isAction){
								if (NONLICENCE == "N"){
									if ((HOLD_BACK == "Y") && (SID == "")){
										toastPopup('LICENSE_1M', '沅뚮━�ъ쓽 �붿껌�쇰줈 1遺� 誘몃━�ｊ린留� �쒓났�⑸땲��.(HOLD-BACK)');
									}else{
										if (LICENSE_YN == "N" && LICENSE_MSG != ""){
											toastPopup('LICENSE_1M', LICENSE_MSG + '<br/><a href=#" onclick="fnGoProduct(); return false;"><span>�곹뭹 援щℓ�섍린</span></a>');
										}else{
											toastPopup('LICENSE_1M',
												'�뚯썝�섍퍡�쒕뒗 1遺� 誘몃━�ｊ린留� 媛��ν빀�덈떎. �뚯븙媛먯긽 �곹뭹�� 援щℓ�섏떆硫� �꾧끝 媛먯긽�� 媛��ν빀�덈떎.<br />' +
												'<a href="#" onclick="fnGoProduct(); return false;"><span>�곹뭹 援щℓ�섍린</span></a>');
										}
									}
								}else{
									toastPopup('LICENSE_1M', '沅뚮━�ъ쓽 �붿껌�쇰줈 1遺� 誘몃━�ｊ린留� �쒓났�⑸땲��.');
								}
							}

						}else{
							toastPopup('LICENSE_1M',
								'1遺� 誘몃━�ｊ린 以묒엯�덈떎.<br />濡쒓렇�� �� �뚯븙媛먯긽 �곹뭹�� �덉쑝�쒕㈃ �꾧끝 媛먯긽�� 媛��ν빀�덈떎.<br />' +
								'<a href="#" onclick="loginPopup(); return false;"><span>濡쒓렇��</span></a>'
								, false);
						}

						if(iProdType == 5 && !isDpMrLayerAgree) {
							var iPayCnt = parseInt(DPMRSTM_CNT);
							var iPayAmount = parseInt(DPMRSTM_CNT) * 10;
							var iPayPointAmount = parseInt(DPMRSTM_CNT) * 5;
							if( COLL_ID == '21116' || COLL_ID == '31116') {
								iPayAmount = parseInt(DPMRSTM_CNT) * 15;
							} else if( COLL_ID == '21117' || COLL_ID == '31117') {
								iPayAmount = parseInt(DPMRSTM_CNT) * 10;
							}

							if(iPayCnt % 100 == 0 && iPayCnt >= 100) {

								var iPopCnt = parseInt(iPayCnt / 100);

								$("#DpMrTitle").html("");
								$("#DpMrDesc").html("");
								$("#DpMrCNT").html("");
								$("#DpMrAMT").html("");

								var DpMrTitle = "";
								var DpMrDesc = "";

								if(iPopCnt >= 5) {
									DpMrTitle = "�붽툑 怨쇰떎 �ъ슜 �덈궡";
									DpMrDesc = "怨좉컼�섏� �뚯븙媛먯긽 �ъ슜�됱씠 留롮뒿�덈떎.<br />留ㅼ썡 �뺤븸�쇰줈 臾댁젣�� �뚯븙媛먯긽�� 媛��ν븳 �곹뭹��<br />�댁슜�섏떆湲� 諛붾엻�덈떎.";
								}else{
									DpMrTitle = "�꾩옱源뚯� �ъ슜��(湲덉븸) �덈궡";
									DpMrDesc = "蹂대떎 �먯꽭�� �ы빆�� [�� �뺣낫]�먯꽌 �뺤씤 媛��ν빀�덈떎.<br />�뺤씤�� �꾨Ⅴ�쒕㈃ 怨≪씠 �ъ깮�⑸땲��.";
								}

								$("#DpMrTitle").html(DpMrTitle);
								$("#DpMrDesc").html(DpMrDesc);
								$("#DpMrCNT").html(FC_GLComma(iPayCnt) + "��");
								if( COLL_ID == '21117' || COLL_ID == '31117') {
									$("#DpMrAMT").html(FC_GLComma(iPayAmount) + "�� + " + FC_GLComma(iPayPointAmount) + "P");
								} else {
									$("#DpMrAMT").html(FC_GLComma(iPayAmount) + "��");
								}

								FG_loading._end();
								$('div[id="loading-box"]').remove();
								isClickChk = false;
								setTimeout(function () {
									FG_layerPopup.show("#DpMrPopUp");
								}, 100);
								//FG_layerPopup.show("#DpMrPopUp");
								return false;
							}
						}

						isDpMrLayerAgree = false;

						PlayerErrorReset();

						audioApi.load({
							audio: true,
							hlsjs: {
								safari: true
							},
							sources: [
								{
									type: "application/x-mpegurl",
									src: STREAMING_MP3_URL
								}
							]
						}, function (e, api, video) {
							// api.volume(iVolumeLevel); // ie
							video.duration = iSongDuration;
							$('.fp-duration').html(getConvertDuration(iSongDuration));
							isClickChk = false;
						});

						if (iProdType == 3){//PPS �곹뭹�쇰줈 FULL �ъ깮 沅뚰븳 �덉쓣 ��
							$("#ppsUse").show();
						} else {
							$("#ppsUse").hide();
						}
					}

				}else if (strResult.Result.RetCode == "A00003"){
					var objData		= strResult.DATA0;

					tempAnotherToken = fnURLDecode(objData.ANOTHER_CHK);
					FG_layerPopup.show($('#login-another'));

					if(audioApi.playing) audioApi.stop();

				}else if (strResult.Result.RetCode == "S00001"){ //2014.05.26 �곗씠�� �놁쓣�� �덉쇅泥섎━
					toastPopup('LICENSE_NONE', '沅뚮━�ъ쓽 �붿껌�쇰줈 �쒕퉬�� 以묒�以묒씤 怨≪엯�덈떎.');
					fnClearSet();
					isClickChk = false;
					fnPalyStopAction(2,0); //<-- fnPlayNext();

				}else{
					if (iPlaySongId == "NaN" || isNaN(iPlaySongId)) { //2014.03.06 iPlaySongID媛� NaN�쇨꼍�� �덉쇅泥섎━
						toastPopup('NETWORK_ERROR', '�명꽣�� �묒냽 �곹깭媛� �먰솢�섏� �딆븘 �ㅼ쓬 怨≪쓣 �ъ깮�⑸땲��.[5]');
						fnClearSet();
						fnPalyStopAction(2,0); //<-- fnPlayNext();
						return;

					}else{
						alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![3]");
					}
					isClickChk = false;
				}

				FG_loading._end();
				$('div[id="loading-box"]').remove();
			}
		});

	}else{

	}

}

var isDpMrLayerAgree = false;
function fnDpMrLayerConfirm() {
	isDpMrLayerAgree = true;
	fnPlay(iPlaySeq);
}

function fnStopAnotherIP() {
	isClickChk = false;
	tempAnotherToken = "";
	strAnotherToken = "";
	fnClearSet();
	FG_layerPopup.hide($('#login-another'));
}

function fnGoAnotherIP() {
	isClickChk = false;
	strAnotherToken = tempAnotherToken;
	fnPlay(iPlaySeq);
	FG_layerPopup.hide($('#login-another'));
}

var FG_lyricArr = [],
	FG_lyricInterval;

var FG_fnSetLyric = function(scroll) {
	try{
		if(scroll){
			var thisTime = Math.round(audioApi.video.time);

			if($.inArray(thisTime, FG_lyricArr) >= 0) {
				var thisLyricLine = $('p[time-id]')
					.removeClass('this')
					.filter('[time-id='+ thisTime +']')
					.addClass('this');

				$('.lyrics-main > div').css('top', (thisLyricLine.position().top * -1)+'px');

				if(scroll == true && $('.lyrics-all').is(':visible')) {
					var to = $('.lyrics-all p[time-id='+ thisTime +']').position().top - ($('.lyrics-all .mCSB_container').parent().height() / 2);

					if(to > 0) {
						$('.lyrics-all').mCustomScrollbar('scrollTo', to, { scrollInertia:100 });
					}
				}
			}
		}
	}catch(e){};
};

function fnNoLyrics() {
	$(".lyrics-all .mCSB_container").html("");
	$(".lyrics-main").html("<p class=\"no-data\">媛��ш� �놁뒿�덈떎</p>");

	if($('.fp-lyrics').hasClass('active')) {
		$('.fp-lyrics').trigger('click');
	}
	MusicPlayer._setLyrics(false);
}

function fnGetLyrics() {
	var lyricsGenData = "";
	var lyricsGenDataView = "";
	var isMsl = false;

	$(".lyrics-all .mCSB_container").html("");
	$(".lyrics-main").html("");

	if(lyricsYn == "N" || normalLyrics == "") {
		fnNoLyrics();
		return false;
	}

	if ((musicAdultYn == "Y") && (isMemStatus != "4")) {
		$(".lyrics-all .mCSB_container")
			.html("<p>�대떦 怨≪� <strong>泥�냼�� �댁슜�쒗븳 怨�</strong>�낅땲��.<br /><strong>19��</strong> �댁긽�� �깆씤 �댁슜�먯뿉寃뚮쭔 媛��щ낫湲� 湲곕뒫�� �쒓났 �⑸땲��.</p>");
		MusicPlayer._setLyrics(false);
		return false;
	}

	MusicPlayer._setLyrics(true);

	if(strLyricType == "Y") {
		var tempSongID = (iNowPlayMode == 2 ? iPlaySongIdShare : iPlaySongId);

		$.getJSON('//dn.genie.co.kr/app/purchase/get_msl.asp?path=a&songid=' + tempSongID + '&callback=?')
			.done(function (strResult) {
				if (!jQuery.isEmptyObject(strResult)) {
					FG_lyricArr.clear();

					$.each(strResult, function (idx, item) {
						var roundIdx = Math.ceil(idx / 1000);
						FG_lyricArr.push(roundIdx);
						var item_replace = item;
						item_replace = item_replace.replace(/</g, "(").replace(/>/g, ")");
						lyricsGenData = lyricsGenData + "<p id='0000000" + idx + "' time-id='" + roundIdx + "'>" + item_replace + "</p>\n";
						lyricsGenDataView += "<p time-id='" + roundIdx + "'><a href='#" + roundIdx + "'>" + item_replace + "</a></p>\n";
					});

					if (lyricsGenData != '') {
						$(".lyrics-main").html("<div class=\"lyrics-inner\">" + lyricsGenData + "</div>");

						$('.lyrics-all .mCSB_container')
							.html(lyricsGenDataView)
							.find('p[time-id] a')
							.bind('click', function () {
								fnPlaySeek(this.hash.replace('#', ''));
								return false;
							});

						$('.lyrics-all').mCustomScrollbar('scrollTo', 0);

						isMsl = true;
					}
				}
			});
	}

	if(!isMsl) {
		$(".lyrics-all .mCSB_container").html(normalLyrics);
		$(".lyrics-main").html(
			"<p>�ㅼ떆媛� 媛��щ� �쒓났�섏� �딆뒿�덈떎</p>" +
			"<button type=\"button\" class=\"btn-lyrics\">�쇰컲媛��щ낫湲�</button>");
	}
}

function fnSetlyrics(op){
	if (op != ""){
		strLyricType = op;
		fnSetPlayerCookie();
		fnGetLyrics();
	}
}

function fnPlaySeek(op){
	if(parseInt(iSongDuration) <= 60 && parseInt(op) >= 60){
		toastPopup('LYRICS_1M', '�좏깮援ш컙�� �꾩껜�ｊ린 �� �쒓났媛��ν빀�덈떎.');
		return;
	}else{
		audioApi.seek(op);
	}
}

function fnSnsStmLog(uno, snid, abid, atid){

	$.ajax({
		url: "/player/jPlayerStmCntProc.json",
		type: "POST",
		data: {unm: uno, xgnm: snid, axnm: abid, xxnm: atid},
		dataType: "json",
		success: function (k) {	}
	});

	isSnsStmLog = true;
}

function fnStreamLog(info){

	if (info != ""){
		var strParams = {LOG_PARAM: info};
		$.post("/player/sendPlayStreamLog", strParams, function(strResult){
			addStmLogCnt();

			if(strResult.DATA1 != null && typeof strResult.DATA1 != 'undefined') {
				var sflag = strResult.DATA1.sflag,
					rtn = strResult.DATA1.rtnCd;

				if (sflag == "R") {
					if (rtn == "0") {
						var RemainCnt = strResult.DATA1.RemainCnt;
						var Rcnt = strResult.DATA1.Rcnt;
						toastPopup('PPS_SHARE_COUNT', Rcnt + "怨� 李④컧 �섏뿀�듬땲��. (" + RemainCnt + "怨� �⑥쓬) (怨듭쑀�ъ깮紐⑸줉)");
						$("#ShareCntArea").text(RemainCnt);

					} else if (rtn == "B00019") {
						fnPlayStopEnd();
						toastPopup('PPS_SHARE_END', '�뚯븙�섎늻湲곌� 醫낅즺�섏뿀嫄곕굹 �ъ슜�� �� �녿뒗 �곹깭�낅땲��.');
						window.close();

					} else {
						var RemainCnt = strResult.DATA1.RemainCnt;
						toastPopup('PPS_SHARE_END', '�붿뿬怨≪씠 �놁뒿�덈떎. �ㅼ쓬 怨≪쓣 �ъ깮 �⑸땲��.(怨듭쑀�ъ깮紐⑸줉)');
						$("#ShareCntArea").text(RemainCnt);
						setTimeout(fnPlayNext, 1000);
					}
				}
			}
		});
	}
}

function fnDPMeterRateOffSet(slogData){
	var strParams = {xpld: slogData};
	$.post("/player/jPlayerDpMeterRateOffSet", strParams,
		function(strResult){
			if (strResult.Result.RetCode == 0){
				var iPayCnt = strResult.DATA0.DPMRSTM_CNT;
				var iPayAmount = strResult.DATA0.DPMRSTM_AMT;
				var sPopType = strResult.DATA0.DPMRSTM_POP_TYPE;

				fnStreamLog(strStreamLogData);

				if(sPopType =="T"){
					var t = (new Date()).getTime();
					toastPopup('DPMR_USE_' + t, iPayCnt+'�� �꾩쟻 �ъ슜以�');
				}
			}
		}
		, "json");

}
function fnMeterRateOffSet(snid, dura){
	var strParams = {xgnm: snid, duration: dura, ppscnt:strStreamLogData2};
	$.post("/player/jPlayerMeterRateOffSet", strParams,
		function(strResult){
			if (strResult.Result.RetCode == 0){
				var RemainCnt = strResult.DATA0.RemainCnt;
				var cCnt = strResult.DATA0.Cnt;
				fnStreamLog(strStreamLogData);
				var t = (new Date()).getTime();
				toastPopup('PPS_USE_' + t, cCnt+'怨� 李④컧 �섏뿀�듬땲��. (' + RemainCnt + '怨� �⑥쓬)');

			}else if (strResult.Result.RetCode == "B00022"){
				toastPopup('PPS_END', '�붿뿬怨≪씠 �놁뒿�덈떎. �ㅼ쓬 怨≪쓣 �ъ깮 �⑸땲��.');
				fnClearSet();
				fnPalyStopAction(2,0); //<-- fnPlayNext();
			}
		}
		, "json");
}

var iBeforeTime = 0;

function fnPlayingTime(currentTime, iTotDurationTime){
	var iTotTime = iTotDurationTime;

	if(iTotTime > 0){
		FG_fnSetLyric(true);

		if(iAddStmLogSecond >= iStmLogSecond && (!is60) && (isAction)){
			is60 = true;

			if (iNowPlayMode == 1){//�쇰컲�ъ깮
				if (iProdType == 1)	{
					fnStreamLog(strStreamLogData);
				}else if (iProdType == 3){
					fnMeterRateOffSet(iPlaySongId, iTotTime);
				}else if (iProdType == 5){
					fnDPMeterRateOffSet(strStreamLogData);
				}
			}else{//怨듭쑀�ъ깮
				if (iProdType == 1)	{
					fnStreamLog(strStreamLogData);
				}else if (iProdType == 3){
					fnMeterRateOffSet(iPlaySongIdShare, iTotTime);
				}else if (iProdType == 4){
					fnMrShareStmOffSet(iPlaySongIdShare, iTotTime);
				}else if (iProdType == 5){
					fnDPMeterRateOffSet(strStreamLogData);
				}
			}
		}

		//理쒓렐 媛먯긽 �대젰 �ъ깮 �쒖옉 �� 3珥� �ㅼ뿉 �몄텧�섎룄濡� �섏젙
		if (isAction && parseInt(currentTime) > 3 && !isSnsStmLog && iProdType != 4){
			fnSnsStmLog(iMemUno, iPlaySongId, ALBUM_ID, ARTIST_ID);
		}
	}

	if(currentTime >= iTotDurationTime || (iBeforeTime == currentTime && Math.ceil(currentTime) == iTotDurationTime)) {
		fnPalyStopAction(2, 0);
		return false;
	}

	iBeforeTime = currentTime;
}

function fnPlayPrev(){
	if (iNowPlayMode == 1){
		if (strStreamList == ""){
			toastPopup('PLAY_END', '�ъ깮 �� 怨≪씠 �놁뒿�덈떎.');
			return;
		}

		var CurrentSeq = $("#music-tab .this-play").index() + 1;

		if (iRandomType == 0){
			if (iRepeatType ==2){
				fnPlay(CurrentSeq);

			}else if(iRepeatType ==1){
				iPlaySeq = CurrentSeq - 1;

				if (iPlaySeq <= 0){
					iPlaySeq = iSongTotalCnt;
				}

				fnPlay(iPlaySeq);

			}else{
				if (iPlaySeq <= 1){
					toastPopup('PLAY_END', '�댁쟾 �ъ깮 �� 怨≪씠 �놁뒿�덈떎.');
					fnPlayStopEnd();

				}else{
					iPlaySeq = CurrentSeq - 1;
					fnPlay(iPlaySeq);
				}
			}
		}else{
			if (iRepeatType ==2){
				fnPlay(CurrentSeq);

			}else if(iRepeatType ==1){
				var iChkSeq = fnRandomNum();

				if (iChkSeq == 0){
					strRandomChk = "";
					iChkSeq = fnRandomNum();
				}

				fnPlay(iChkSeq);

			}else{
				var iChkSeq = fnRandomNum();

				if (iChkSeq == 0){
					toastPopup('PLAY_END', '�댁쟾 �ъ깮 �� 怨≪씠 �놁뒿�덈떎.');
					iPlaySeq = CurrentSeq - 1;
					fnPlayStopEnd();

				}else{
					fnPlay(iChkSeq);
				}
			}
		}

	}else{
		if (iPlaySeqShare <= 1){
			toastPopup('PLAY_END', '�댁쟾 �ъ깮 �� 怨≪씠 �놁뒿�덈떎.(怨듭쑀�ъ깮紐⑸줉)');
			fnPlayStopEnd();
		}else{
			iPlaySeqShare = iPlaySeqShare - 1;
			fnPlayShare(iPlaySeqShare);
		}
	}
}

function fnPlayNext(){
	if (iNowPlayMode == 1){
		if (strStreamList == ""){
			toastPopup('PLAY_END', '�ъ깮 �� 怨≪씠 �놁뒿�덈떎.');
			return;
		}

		var CurrentSeq = $("#music-tab .this-play").index() + 1;

		if (iRandomType == 0){
			if (iRepeatType ==2){
				fnPlay(CurrentSeq);

			}else if(iRepeatType ==1){
				iPlaySeq = CurrentSeq + 1;

				if (iPlaySeq > iSongTotalCnt){
					iPlaySeq = 1;
				}

				fnPlay(iPlaySeq);

			}else{
				iPlaySeq = CurrentSeq + 1;

				if (iPlaySeq > iSongTotalCnt){
					toastPopup('PLAY_END', '�ㅼ쓬 �ъ깮 �� 怨≪씠 �놁뒿�덈떎.');
					iPlaySeq = iPlaySeq - 1;
					fnPlayStopEnd();

				}else{
					fnPlay(iPlaySeq);
				}
			}
		}else{

			if (iRepeatType ==2){
				fnPlay(CurrentSeq);

			}else if(iRepeatType ==1){
				var iChkSeq = fnRandomNum();

				if (iChkSeq == 0){
					strRandomChk = "";
					iChkSeq = fnRandomNum();
				}

				fnPlay(iChkSeq);

			}else{
				var iChkSeq = fnRandomNum();

				if (iChkSeq == 0){
					toastPopup('PLAY_END', '�ㅼ쓬 �ъ깮 �� 怨≪씠 �놁뒿�덈떎.');
					iPlaySeq = CurrentSeq - 1;
					fnPlayStopEnd();

				}else{
					fnPlay(iChkSeq);
				}
			}
		}

	}else{
		iPlaySeqShare = iPlaySeqShare + 1;

		if (iPlaySeqShare > iSongTotalCntShare){
			toastPopup('PLAY_END', '�ㅼ쓬 �ъ깮 �� 怨≪씠 �놁뒿�덈떎.(怨듭쑀�ъ깮紐⑸줉)');
			iPlaySeqShare = iPlaySeqShare - 1;
			fnPlayStopEnd();

		}else{
			fnPlayShare(iPlaySeqShare);
		}
	}
}

function fnPlayerInit() {
	iPlaySeq = 0;
	iPlaySongId = 0;
	fnSetPlayerCookie();

	if(iSongTotalCnt > 0) {
		$("#SongTitleArea").html('�ъ깮 以묒씤 怨≪씠 �놁뒿�덈떎');
	} else {
		$("#SongTitleArea").html('�ъ깮 紐⑸줉�� �놁뒿�덈떎');
	}
	$("#ArtistNameArea").html('�ｊ퀬 �띠� 怨≪쓣 �좏깮�� 蹂댁꽭��!');

	$(".btn-like").hide();
	$('.has-add-album').hide();

	$('#AlbumImgArea').html('<img src="//image.genie.co.kr/imageg/web/common/blank.png" alt="" />');
	$('.player .cover_bg').html('<img src="" alt=""/>');
	$("#btnPlayerInfo").html('');
	var svg =	'<defs>' +
		'	<filter id="album_bg01">' +
		'		<feGaussianBlur stdDeviation="35" in="SourceGraphic"/>' +
		'	</filter>' +
		'</defs>\n' +
		'<image class="bg_svg_img" xlink:href="" xmlns:xlink="http://www.w3.org/1999/xlink" width="110%" height="110%" preserveAspectRatio="xMidYMid slice" filter="url(&quot;#album_bg01&quot;)"/>';

	$('.player .cover_svg').html(svg);
	$('.player').addClass('play-ready');

	FG_fnSetLyric(false);

	$(".lyrics-all .mCSB_container").html("");
	$(".lyrics-main").html("");

	if($('.fp-lyrics').hasClass('active')) {
		$('.fp-lyrics').trigger('click');
	}
	MusicPlayer._setLyrics(false);

	fnPlayStopEnd();

	audioApi.shutdown();

	audioApi = flowplayer("#fp-audio", {
		wmode: "transparent",
		clip: {
			audio: true,
			hlsjs: {
				safari: true
			},
			sources: [
				{
					type: "application/x-mpegurl",
					src: (browserInfo.browser.name !== 'ie') ? httpMuteMp3 : httpMuteM4a
				}
			]
		},
		hlsjs: {
			debug: false
		}
	}).one('ready', function(e) {
		$(".fp-duration").html("00:00");
	});

	audioApi.stop();
	audioApi.unload();

	$(".fp-elapsed").html("00:00");
	$(".fp-duration").html("00:00");
	$(".fp-progress").css({'width': '0'});

	isPlay = false;
	sStopState = false;
}

function fnPlayStopEnd(){
	fnClearSet();
	if(!lteIE8) fnPalyStopAction(0, 0);

	if ((iRandomType == 1) && (iRepeatType==0)){//�쒕뜡�ㅼ젙 諛섎났�놁쓣 ��, 硫붿꽭吏� 1�� �덈궡 �� 珥덇린��
		strRandomChk = "";
	}

}

function fnPlayOn(obj){
	if (supportStatusCheck() === 'notSupport') return;
	
	var iRow = $('#music-tab li.list').index($(obj).parent('li.list'));
	iRow = parseInt(iRow) + 1;

	isPlayEnd = false;

	fnPlayListAction(iRow);
}

function fnClearSet(){
	iProdType = 0;
	isAction = false;
	isPlay = false;
}

function fnPlayOff(){
	if(audioApi.paused) {
		audioApi.play();

	} else if (audioApi.playing) {
		audioApi.pause();

	}else if(audioApi.ready){
		if (iNowPlayMode == 1){
			fnPlay(iPlaySeq);
		}else{
			fnPlayShare(iPlaySeqShare);
		}

	}
}

function fnVolumeOff(){
	audioApi.mute();
	iRemoveVolume = audioApi.muted ? 0 : 1;
	fnSetPlayerCookie();
}

function fnVolumeControl(op){
	var iVolume  = audioApi.volumeLevel,
		volAdder = 0.1;

	if(op=="up"){
		iVolumeLevel = iVolume + volAdder;
		iRemoveVolume = 1;

		if (iVolumeLevel > 1){
			iVolumeLevel = 1;
		}

	}else{
		iVolumeLevel = iVolume - volAdder;
		iRemoveVolume = 1;

		if (iVolumeLevel < 0){
			iVolumeLevel = 0;
			iRemoveVolume = 0;
		}
	}

	audioApi.volume(iVolumeLevel);
	fnSetPlayerCookie();
}

function fnSetAddType(at) {
	if (at != ""){
		strAddType = at;
		fnSetPlayerCookie();
	}
}

/**
 * �뚮젅�댁뼱 �ъ깮紐⑸줉 ��젣 泥섎━
 */
function fnDelPlaylist(){
	var delFn = function(){
		var chk_area = $("#music-tab li.list .select-check:checked");

		if(chk_area.size() > 0){
			listSort._del();
			$("#selectCNT").html("0");
			chk_area.parents('li.list').remove();
			iSongTotalCnt = $("#music-tab li.list").size();

			$("#SongTatalArea").html(iSongTotalCnt);
			$("#SongTitleTotal").html("(" + iSongTotalCnt + ")");

			fnPlaylistReload();

			$("#all-check").prop('checked', false);

			if (iSongTotalCnt == 0) {
				$('#music-tab .list-wrap>ul').hide();
				$('#music-tab .no-data').show();
			}

			$("li.list").removeClass('select-list');

			//�꾩옱 �ъ깮 以묒씤 怨≪씠 ��젣�섏뿀�쇰㈃ �ъ깮 以묒�
			if($("#music-tab li.this-play").size() == 0) {
				fnPlayerInit();
			} else {
				iPlaySeq = $("#music-tab .this-play").index() + 1;
				fnSetPlayerCookie();
			}

		} else {
			alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
		}
	};

	setTimeout(delFn, 1);
	$("#ClickLowArea").html("0");
}

/**
 * �뚮젅�댁뼱 �ъ깮紐⑸줉 以묐났 ��젣 泥섎━
 */
function fnDelPlayListDupl() {
	var delArr = listSort._unique(iPlaySeq);

	for(var i = 0; i < delArr.length; i++) {
		musicList.list.eq(delArr[i]).addClass('DEL_TEMP');
	}

	musicList.list.each(function() {
		if($(this).hasClass('DEL_TEMP')) $(this).remove();
	});

	iSongTotalCnt = $("#music-tab li.list").size();

	$("#SongTatalArea").html(iSongTotalCnt);
	$("#SongTitleTotal").html("(" + iSongTotalCnt + ")");

	fnPlaylistReload(true, true, true);
}


//�뚮젅�댁뼱 �ㅼ젙 荑좏궎 ����
function fnSetPlayerCookie(){
	FG_cookie.set("MusicPlayerCookie", strStreamBit + ";" + iRandomType + ";" + iRepeatType + ";" + iRemoveVolume + ";" + iVolumeLevel + ";" + strVisualType + ";" + strLyricType + ";" + strSpeechAgree + ";" + strAddType + ";" + iPlaySeq + ";" + strFileType, 1000);
}

function fnSetCntDuration(cnt, dur, duration, err){
	if ((parseInt(cnt) >= 0) && (parseInt(dur) >= 0 ) && (duration != "")){
		$("#SongTatalArea").html(cnt);
		$("#SongTitleTotal").html("(" + cnt + ")");
		iSongTotalCnt = parseInt(cnt);
		iTotalDuration = parseInt(dur);
	}
	if (err == "True"){
		if(!isLSMsgShow) {
			alert("�꾩옱 �� PC�� �ъ깮紐⑸줉�먮뒗 500怨� 源뚯� �댁쓣 �� �덉뒿�덈떎.\n珥덇낵 �섎뒗 怨≪� �ъ깮紐⑸줉�� 異붽� �섏� �딆뒿�덈떎.\n�뚮젅�댁뼱 �곷떒 FAQ瑜� �좏깮�섏떆硫�, �곸꽭�� �댁슜�� �뺤씤�섏떎 �� �덉뒿�덈떎.");
			isLSMsgShow = true;
		} else {
			toastPopup('PLAYLIST_FULL', '�ъ깮紐⑸줉�먮뒗 500怨� 源뚯� �댁쓣 �� �덉뒿�덈떎.<br/>珥덇낵 �섎뒗 怨≪� �ъ깮紐⑸줉�� 異붽� �섏� �딆뒿�덈떎.');
		}
	}
}

function fnClearInterval(obj){
	if (typeof obj != "undefined"){
		clearInterval(obj);
	}
}

function fnRandomNum() {
	var iRanNum = -1;
	var iChkNum = 0;

	for (var r=1; r<=500000; r++){
		iRanNum = Math.ceil(Math.random() * iSongTotalCnt);
		if (strRandomChk.indexOf("**" + iRanNum + "**") == -1){
			if (strRandomChk == ""){
				strRandomChk = "**" + iRanNum + "**";
			}else{
				strRandomChk = strRandomChk + " | " + "**" + iRanNum + "**";
			}
			break;
		}else{
			if (strRandomChk.indexOf("|") != -1){
				iChkNum = strRandomChk.split("|").length;
				if (parseInt(iChkNum) == parseInt(iSongTotalCnt)){
					iRanNum = 0;
					break;
				}else{
					continue;
				}
			}
		}
	}

	return iRanNum;
}

function fnGoProduct(){
	if (!fnLoginAlertChk())	{
		return;
	}
	fnBuyProductPop();
}

function fnShowMyAlbum(){
	if (!fnLoginAlertChk())	{
		return;
	}

	FG_popupLoad._start();

	$.post("/player/bPlayerMyAlbumList", {pg: 1, pgsize: 2000},
		function(strResult){
			strResult = $.trim(strResult);

			if (strResult != ""){
				$("#tabMyListWrap").html(strResult);
				$("#myAlbumTotal").html("(" + FC_GLComma($("#maAlbumTotal").val()) + ")");

				$('.tab-my .btns a').removeClass('active');
				$('.tab-my .btns a:eq(0)').addClass('active');

				FG_popupLoad._end();
			}else{
				alert("�깅줉�� �뚮젅�대━�ㅽ듃 �뺣낫媛� 議댁옱 �섏� �딆뒿�덈떎.");
				FG_popupLoad._end();
			}
		}
	).error(function(){
		alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![21]");
		FG_popupLoad._end();
	});
}

function fnChangeMyAlbum(v){
	FG_popupLoad._start();

	$.post("/player/bPlayerMyAlbumSongList", {mxnm: v},
		function(strResult){
			strResult = $.trim(strResult);

			if (strResult != ""){
				$("#tabMyListWrap").html(strResult);

				FG_popupLoad._end();
			}else{
				var strNoDataHtml	= "<div class='no-result'>";
				strNoDataHtml		+= "	<p>";
				strNoDataHtml		+= "		�대떦 �뚮젅�대━�ㅽ듃�� 異붽��� 怨≪씠 �놁뒿�덈떎.<br />";
				strNoDataHtml		+= "	</p>";
				strNoDataHtml		+= "</div>";
				$("#MyAlbumListArea .list-wrap").html(strNoDataHtml);

				FG_popupLoad._end();
			}
			$('#myalbum-share-foot .check_all_box').prop('checked', false);
			$('#content .foot .list-info .select em').html($("div.list input:checkbox[name='select_chk']:checked").length);
		}
	).error(function(){
		alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![22]");
		FG_popupLoad._end();
	});
}

function fnShowMyStmList(){
	if (!fnLoginAlertChk())	{
		return;
	}

	FG_popupLoad._start();

	$.post("/player/bPlayerStmList", {pg: 1, pgsize: 100},
		function(strResult){
			strResult = $.trim(strResult);
			if (strResult != ""){
				$("#tabMyListWrap").html(strResult);

				$('.tab-my .btns a').removeClass('active');
				$('.tab-my .btns a:eq(1)').addClass('active');

				FG_popupLoad._end();

			}else{
				FG_popupLoad._end();
			}
		}
	).error(function(){
		alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![31]");
		FG_popupLoad._end();
	});
}

function fnShowMyLikeList(){
	if (!fnLoginAlertChk())	{
		return;
	}

	FG_popupLoad._start();

	$.post("/player/bPlayerLikeList", {pg: 1, pgsize: 100},
		function(strResult){
			strResult = $.trim(strResult);
			if (strResult != ""){
				$("#tabMyListWrap").html(strResult);

				$('.tab-my .btns a').removeClass('active');
				$('.tab-my .btns a:eq(2)').addClass('active');

				FG_popupLoad._end();

			}else{
				FG_popupLoad._end();
			}
		}
	).error(function(){
		alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![31]");
		FG_popupLoad._end();
	});
}

function fnShowMySongList(){
	if (!fnLoginAlertChk())	{
		return;
	}

	FG_popupLoad._start();

	$.post("/player/bPlayerPurchaseList", {pg: 1, pgsize: 100},
		function(strResult){
			strResult = $.trim(strResult);

			if (strResult != ""){
				$("#tabMyListWrap").html(strResult);

				$('.tab-my .btns a').removeClass('active');
				$('.tab-my .btns a:eq(3)').addClass('active');

				FG_popupLoad._end();

			}else{
				alert("怨� 援щℓ �댁뿭�� 議댁옱 �섏� �딆뒿�덈떎.");
				FG_popupLoad._end();
			}
		}
	).error(function(){
		alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![41]");
		FG_popupLoad._end();

	});
}

function fnPlayerMusicDown(songids){
	if (!fnLoginAlertChk())	{
		return;
	}

	var downFn = function() {
		if(songids != '') {
			fnDownSong(songids, 1);
		}else{
			alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
			FG_popupLoad._end();
			return;
		}
	}

	downFn();
}

function fnPlayMyAlbumPop(iMaId, iPlayType) {
	if (supportStatusCheck() === 'notSupport') return;

	var songIds = fnGetMyAlbumSongIds(iMaId);

	if(songIds != '') {
		fnGetPlayList(songIds, iPlayType);
	} else {
		alert('�뚮젅�대━�ㅽ듃�� �닿릿 怨≪씠 �놁뒿�덈떎.');
	}
}

function fnGetMyalbum(obj, songids){
	fnAddMyAlbumForm(obj, songids, 0, -1 * ($('#my-album').outerHeight() + 4));
}

function fnSyncAct(act, t){
	if (!fnLoginAlertChk())	{
		return;
	}

	if (t == 's'){
		if (act != ""){
			FG_layerPopup.show("#sync-" + act);
		}
	}else{
		if (act != ""){
			FG_layerPopup.hide("#sync-" + act);
		}
	}
}

function fnSyncSave(){
	if (!fnLoginAlertChk())	{
		return;
	}

	if (strStreamList == ""){
		alert("�ъ깮紐⑸줉�� 怨≪씠 �놁뼱��, 紐⑸줉 �щ━湲곕� �� �� �놁뒿�덈떎!");
		return;
	}else{
		FG_popupLoad._start();

		strStreamList = genieStore.get('geniePlayerList');

		var strUpLocal = "";
		var strUpList = "";

		if(genieStore.isLocalstorage) {
			var jsonList = JSON.parse(strStreamList);

			for (var s = 0; s < jsonList.length; s++) {

				if (s == (jsonList.length - 1)) {
					strUpLocal = strUpLocal + "N";
					strUpList = strUpList + jsonList[s].SONG_ID;
				} else {
					strUpLocal = strUpLocal + "N,";
					strUpList = strUpList + jsonList[s].SONG_ID + ",";
				}

			}

			if(strUpList.substr(-1) == ",") strUpList = strUpList.substr(0, strUpList.length-1);
		} else {
			strUpList = strStreamList.replace(/;/gi, ",");
			if(strUpList.substr(-1) == ",") strUpList = strUpList.substr(0, strUpList.length-1);

			strUpLocal = "";
			for(var s=0; s < strUpList.split(",").length; s++) {
				if (s == strUpList.split(",").length - 1){
					strUpLocal = strUpLocal + "N"
				}else{
					strUpLocal = strUpLocal + "N,"
				}
			}
		}

		if(strUpLocal.substr(-1) == ",") strUpLocal = strUpLocal.substr(0, strUpLocal.length-1);

		$.post("/player/jPlayerSyncListProc", {lsi: strUpList, llp: strUpLocal},
			function(strResult){
				if (strResult.Result.RetCode == 0){
					fnSyncAct('up','h');
					FG_popupLoad._end();
					alert("紐⑸줉 �щ━湲곌� �꾨즺 �섏뿀�듬땲��!");
				}else{
					alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![12]");
					FG_popupLoad._end();
				}
			}
			, "json").error(function(){
			alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![11]");
			FG_popupLoad._end();
		});
	}
}

function fnGetSyncList(){
	if (!fnLoginAlertChk())	{
		return;
	}

	FG_popupLoad._start();

	$.post("/player/jPlayerSyncList", {pls: ""},
		function(strResult){
			if (strResult.Result.RetCode == 0){
				var SYNC_SONGID = fnURLDecode(strResult.DATA1.SYNC_SONGID);

				// �ъ깮紐⑸줉�� 500媛� �댁긽�� 寃쎌슦 block.(�ъ깮紐⑸줉 1000怨� 諛⑹뼱)
				if (SYNC_SONGID.split(';').length > 1001){
					fnSyncAct('down','h');
					alert("1000怨� 珥덇낵�섏뿬 �뺤씤�� 遺덇��⑸땲��.\n鍮좊Ⅸ �쒖씪 �댁뿉 �쒕퉬�� 吏��먰븯�꾨줉 �섍쿋�듬땲��.");
					FG_popupLoad._end();
					return;
				}

				$('#music-tab li.list').remove();

				listSort.arrayLists.length = 0;

				listSort.saveData(function(){
					strStreamList = genieStore.get('geniePlayerList');
					FG_popupLoad._end();
				});

				fnSyncAct('down','h');
				iPlaySeq = 0;
				iSongTotalCnt = 0;
				isSyncAction = "Y";
				fnGetPlayList(SYNC_SONGID, 1);

			}else{
				fnSyncAct('down','h');
				alert("�대젮 諛쏆쓣 �ъ깮紐⑸줉�� �놁뒿�덈떎.\n�ъ깮紐⑸줉 �щ━湲곕줈 �ъ깮紐⑸줉�� 留뚮뱾�� 二쇱꽭��!");
				FG_popupLoad._end();
			}
		}
		, "json").error(function(){
		alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂![13]");
		FG_popupLoad._end();
	});

}

function fnLoginAlertChk(){
	if (iMemUno == ""){
		alert("濡쒓렇�� �섏뀛�� �댁슜 �섏떎 �� �덉뒿�덈떎!");
		$("#mv_uxd").focus();
		return false;
	}
	return true;
}

function fnPlayerLikeAct(){
	if (!fnLoginAlertChk())	{
		return;
	}

	var songId = (iPlaySongIdShare != "" ? iPlaySongIdShare : iPlaySongId);

	if(songId == ""){
		alert('醫뗭븘�뷀븷 怨≪쓣 �뚮젅�� �댁＜�몄슂.');
		return;
	}

	if (!($(".btn-like").hasClass("active"))){
		like("SONG_LIKE", songId, iMemUno, fnCallBackLike);
	}else{
		unlike("SONG_LIKE", songId, iMemUno, fnCallBackLike);
	}
}

function fnCallBackLike(ret){
	if (ret != ""){
		if (ret.split("|")[0] == 0){
			if (!($(".btn-like").hasClass("active"))){
				$(".btn-like").addClass("active");
			}else{
				$(".btn-like").removeClass("active");
			}
		}else{
			alert("�ㅽ뙣 �섏��듬땲��!");
		}
	}else{
		alert("�ㅽ뙣 �섏��듬땲��.");
	}
}

function fnPlayerConfirm(){
	if (!fnLoginAlertChk())	{
		return;
	}
	fnMemConfirm('3');
}

function fnViewProduct(){
	fnBuyProductPop();
}

function fnStreamConfirm(){
	if (!fnLoginAlertChk())	{
		return;
	}
	window.open(vGenieUri+"/player/streamConfirm?limitCnt=" + stmAbusingCnt, "popStreamConfirm", "width=450, height=380");
}

function fnStreamConfirmOk() {
	setStmLogCnt(0);
	fnPlay(iPlaySeq);
}

function fnURLDecode(txt){
	if (txt==undefined || txt==null || txt==""){
		return txt;
	}
	var HEXCHARS = "0123456789ABCDEFabcdef";
	var encoded = txt;
	var plaintext = "";
	var i = 0;
	while (i < encoded.length) {
		var ch = encoded.charAt(i);
		if (ch == "+") {
			plaintext += " ";
			i++;
		} else if (ch == "%") {
			if (i < (encoded.length-2) && HEXCHARS.indexOf(encoded.charAt(i+1)) != -1 && HEXCHARS.indexOf(encoded.charAt(i+2)) != -1 ) {
				plaintext += unescape( encoded.substr(i,3) );
				i += 3;
			} else {
				plaintext += ch;
				i++;
			}
		} else {
			plaintext += ch;
			i++;
		}
	}
	return plaintext;
}

//20140226 �좎꽦�� - 濡쒓렇�� �� �ъ깮 以� 怨� 泥섏쓬遺��� �ㅼ떆 �ｊ린
function fnSetPlayerStatus(pIsPlay)
{
	if (pIsPlay == "" || pIsPlay == "null" || pIsPlay == "undefined") {
		pIsPlay = isPlay;
	}

	FG_cookie.set('genie-player-status', pIsPlay + ":" + iPlaySeq , 1000);
	return;
}

//20140226 �좎꽦�� - 濡쒓렇�� �� �ъ깮 以� 怨� 泥섏쓬遺��� �ㅼ떆 �ｊ린
function fnDelPlayerStatus()
{
	FG_cookie.del('genie-player-status');
	return;
}

function fnFullStreamLog(songid, unm){
	if(unm == ""){
		return;
	}

	var strParams = {xgnm : songid, unm : unm};
	$.post("/player/sendStreamFullLog", strParams,function(strResult){});
}

/**
 * 濡쒖뺄 �ㅽ넗由ъ��� �덈뒗 �곗씠�곗뿉�� songId 異붿텧��.
 * @param strList
 * @returns {string}
 */
function getSongIdsInStorage(strList){

	var strUpList = "";

	if(strList != "" && strList != undefined){

		try{
			var jsonList = JSON.parse(strList);

			if(typeof jsonList == "number" || typeof jsonList == "string") {
				strUpList = strList;
			} else {
				for (var s = 0; s < jsonList.length; s++) {
					if (s == (jsonList.length - 1)) {
						strUpList = strUpList + jsonList[s].SONG_ID;
					} else {
						strUpList = strUpList + jsonList[s].SONG_ID + ";";
					}
				}
			}
		}catch (e){
			//parsing error return origin value
			strUpList = strList;
		}
	}
	return strUpList;

}

function fnGetPlayerInfo(songId) {
	var btnPlayerInfoHtml = '';

	$.ajax({
		url: "/player/jPlayerSongList.json",
		type: "POST",
		data: {xgnm: songId},
		dataType: "json",
		success: function (k) {
			if (k.resultCode == 0) {
				var arr = k.DataSet.DATA;

				var DOWN_YN = arr[0].DOWN_YN,
					MP3_YN = arr[0].MP3_YN,
					ALBUM_ID = arr[0].ALBUM_ID,
					ARTIST_ID = arr[0].ARTIST_ID,
					ADULT_YN = arr[0].ADLT_YN;

				btnPlayerInfoHtml += '<li><a href="#" class="item" title="�덉갹 �대┝" onclick="fnViewSongInfoPop(\'' + songId + '\'); return false;">怨� �뺣낫</a></li>';
				btnPlayerInfoHtml += '<li><a href="#" class="item" title="�덉갹 �대┝" onclick="fnViewAlbumPop(\'' + ALBUM_ID + '\'); return false;">�⑤쾾 �뺣낫</a></li>';
				btnPlayerInfoHtml += '<li><a href="#" class="item" title="�덉갹 �대┝" onclick="fnViewArtistPop(\'' + ARTIST_ID + '\'); return false;">�꾪떚�ㅽ듃 �뺣낫</a></li>';

				btnPlayerInfoHtml += '<li>';
				btnPlayerInfoHtml += '	<button id="btnPlayerMyAlbum" type="button" class="item" onclick="fnAddMyAlbumForm(\'#btnPlayerMyAlbum\', \'' + songId + '\', $(this).parent().width(), 0, 184); return false;">';
				btnPlayerInfoHtml += '		<span class="hide">留덉씠�⑤쾾�� </span>�닿린';
				btnPlayerInfoHtml += '	</button>';
				btnPlayerInfoHtml += '</li>';

				if (DOWN_YN == "Y" || MP3_YN == "Y") {
					btnPlayerInfoHtml += '<li><a href="#" class="item" title="�덉갹 �대┝" onclick="fnDownSong(\'' + songId + '\', 3); return false;">�ㅼ슫濡쒕뱶</a></li>';
				} else {
					btnPlayerInfoHtml += '<li><a href="#" class="item disabled" title="�덉갹 �대┝">�ㅼ슫濡쒕뱶</a></li>';
				}
				btnPlayerInfoHtml += '<li><a href="#" class="item" title="�덉갹 �대┝" onclick="shareDo(\'' + songId + '\'); return false;">怨듭쑀�섍린/�뚯븙�섎늻湲�</a></li>';
				if (ADULT_YN != "Y"){
					btnPlayerInfoHtml += '<li><a href="#" class="item" title="�덉갹 �대┝" onclick="fnGiftSong(\'' + songId + '\');return false;">�좊Ъ�섍린</a></li>';
				}
			}
		},
		complete: function() {
			$('#btnPlayerInfo').html(btnPlayerInfoHtml);
		}
	});
}

function fnPlayMyAlbumSong(songids, at) {
	if(songids == '') {
		alert('�좏깮�� 怨≪씠 �놁뒿�덈떎.');
		return false;
	}

	fnGetPlayList(songids, at);
}

function fnPlaylistReload(ml, ls, sq) {
	if(ml == null || typeof ml == 'undefined') ml = true;
	if(ls == null || typeof ls == 'undefined') ls = true;
	if(sq == null || typeof sq == 'undefined') sq = false;

	if(ml) {
		musicList._reset();
		musicList = new MUSIC_LIST();
		musicList.hook = $('.tab-playlist .music-list-wrap');
		musicList.listType = 'play_list';
		musicList.keyName = 'music-id';
		musicList.option = {
			scroll:false,
			multiple:true
		};
		musicList._load();
	}

	if(ls) {
		listSort._reset();
		listSort.saveData(function(){
			strStreamList = genieStore.get('geniePlayerList');
		});
	}

	if(sq) {
		listSort.callback();
	}
}

function fnCloseLoad(){
	if (strOnload == "Y"){
		FG_popupLoad._end();
		fnClearInterval(LoadInterval);
		strOnload = "N";
	}
}

function setStmAbusingCnt(cnt) {
	if(cnt == null || cnt == '' || isNaN(cnt)) {
		cnt = '200';
	}

	stmAbusingCnt = parseInt(cnt, 10);
}

function getStmLogCnt() {
	var cnt = $.cookie('GENIE_SLC');

	if(typeof cnt == 'undefined' || cnt == null) {
		cnt = 0;
	}

	return parseInt(cnt, 10);
}

function addStmLogCnt() {
	setStmLogCnt(getStmLogCnt() + 1);
}

function setStmLogCnt(cnt) {
	var expire = new Date();
	expire.setDate(expire.getDate() + 1);
	$.cookie('GENIE_SLC', cnt, {path: '/', domain: 'genie.co.kr', expires: new Date(expire.getFullYear(), expire.getMonth(), expire.getDate()), secure : false});
}

function supportStatusCheck() {
	if (browserInfo.browser.name == 'ie') {
		if (parseInt(browserInfo.browser.version, 10) > 10) {
			if (!('MediaSource' in window)) {
				fnShowIssueLayer('notSupportMedia');
				return 'notSupport';
			}
		} else {
			fnShowIssueLayer('notSupportBrowser');
			return 'notSupport';
		}
	}
}