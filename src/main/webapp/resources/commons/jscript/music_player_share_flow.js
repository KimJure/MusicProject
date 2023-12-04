var iPlaySeqShare = 0;
var iSongTotalCntShare = 0;
var iPlaySongIdShare = 0;

function fnGetSnsList(seq){
	if (parseInt(iSmrsSeq) > 0){
		$.post("/player/bPlayerSnsList", {seq: iSmrsSeq},
			function(strResult){
				$('.btn-share').trigger('click');

				$(".tab-share").html(strResult);

				iSongTotalCntShare = parseInt($('#ShareTotalCnt').text());

				iPlaySeqShare = 1;
				fnPlayShare(iPlaySeqShare);
				strOnload = "Y";
			}
		).error(function(){
			alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂!(怨듭쑀�ъ깮紐⑸줉)[51]");
		});
	}
}

function fnPlayShare(seq){
	if(isClickChk === true) return;
	isClickChk = true;

	document.title = "吏��� : �뚯븙, 洹몃━怨� �ㅻ젅��";

	iNowPlayMode = 2;

	iProdType = 0;
	iChkTime = 60;
	is60 = false;
	isAction = false
	strStreamLogData = "";
	strStreamLogData2 = "";

	//fnTimeAreaReset();
	FG_loading._start();
	iPlaySeqShare = seq;

	musicList_share._reset();
	$("body").removeClass("no-play");

	iPlaySongIdShare = musicList_share.list.eq(parseInt(seq)-1).attr('music-id');

	// SM image viewer
	smStationImgViewer();

	$.ajax({
		type: "post",
		url: "/player/playStmInfo.json",
		contentType: "application/x-www-form-urlencoded; charset=euc-kr",
		data: {
			sq: seq,
			xgnm: iPlaySongIdShare,
			bit: strStreamBit,
			mrseq: iSmrsSeq,
			cdm: cdnDomain
		},
		dataType: "json",
		async: false,
		error: function (a, b) {
			alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂!(怨듭쑀�ъ깮紐⑸줉)[52]");
			FG_loading._end(isClickChkSet);
			fnPlayStopEnd();
		},
		success: function(strResult){
			isPlayEnd = false;

			if (strResult.Result.RetCode == 0){
				clearInterval(FG_lyricInterval);
				$("#HoldArea").removeClass("on");

				fnGetLyrics(iPlaySongIdShare);

				var objData					= strResult.DATA0;
				var STREAMING_MP3_URL		= fnURLDecode(objData.STREAMING_MP3_URL);
				var STREAMING_LICENSE_YN	= objData.STREAMING_LICENSE_YN;
				var SONG_DURATION			= objData.SONG_DURATION;
				var ADULT_YN				= objData.ADULT_YN;
				var LYRICS_YN				= objData.LYRICS_YN;
				var LYRICS					= fnURLDecode(objData.LYRICS);
				var DPMRSTM_CNT				= objData.DPMRSTM_CNT;
				var DPMRSTM_YN				= objData.DPMRSTM_YN;
				var FILE_PATHMP3			= fnURLDecode(objData.FILE_PATHMP3);
				var SONG_NAME				= fnURLDecode(objData.SONG_NAME);
				var ARTIST_NAME				= fnURLDecode(objData.ARTIST_NAME);
				var ISLOGIN					= objData.ISLOGIN;
				var SID						= objData.SID;
				var MRSTM_YN				= objData.MRSTM_YN;
				var MRSTM_NUM				= objData.MRSTM_NUM;
				var ABM_IMG_PATH			= fnURLDecode(objData.ABM_IMG_PATH);
				var SONG_LIKE_YN			= objData.SONG_LIKE_YN;
				var HOLD_BACK				= objData.HOLD_BACK;
				var ALBUM_NAME				= fnURLDecode(objData.ALBUM_NAME);
				var MRSHARECHK				= objData.MRSHARECHK;
				var MRSHAREFIRSTNUM			= objData.MRSHAREFIRSTNUM;
				var MRSHARENUM				= objData.MRSHARENUM;
				var ITEM_PPS_CNT			= objData.ITEM_PPS_CNT;
				var NONLICENCE				= objData.NONLICENCE;
				var MEM_CHK_UNO				= objData.MEM_CHK_UNO;
				var LOG_PARAM				= objData.LOG_PARAM;
				var LICENSE_YN				= objData.LICENSE_YN;
				var LICENSE_MSG				= objData.LICENSE_MSG;

				if ((iMemUno == "") && (ISLOGIN == "Y")){
					alert("濡쒓렇�� �섏뼱 �덈줈怨좎묠 �⑸땲��.");
					window.document.location.reload();
					return;
				}

				if ((iMemUno != "") && (ISLOGIN == "N")){
					alert("濡쒓렇�꾩썐 �섏뼱 �덈줈怨좎묠 �⑸땲��.");
					window.document.location.reload();
					return;
				}

				if (iMemUno != MEM_CHK_UNO){
					alert("濡쒓렇�� �뺣낫媛� 蹂�寃� �섏뼱 �덈줈怨좎묠 �⑸땲��.");
					window.document.location.reload();
					return;
				}

				iSongDuration = SONG_DURATION;
				if (parseInt(iSongDuration) <= 60){
					iChkTime = parseInt(iSongDuration)/2;
				}

				iSongDuration = ((STREAMING_LICENSE_YN == "Y") || ((MRSTM_YN == "Y") && (MRSTM_NUM > 0))|| MRSHARECHK == "Y" ? SONG_DURATION : 60);

				musicList_share.list.removeClass('this-play').eq(iPlaySeqShare-1).addClass('this-play');
				if($('#music-tab-share .list-wrap .this-play')[0]) {
					var scrollPos = ($('#music-tab-share .list-wrap').scrollTop() + $('#music-tab-share .list-wrap .this-play').position().top) - ($('#music-tab-share .list-wrap').height() / 2) + ($('music-tab-share .list-wrap .this-play').height() / 2);
					$('#music-tab-share .list-wrap').animate({ scrollTop: scrollPos }, 500);
				}

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

				fnGetPlayerInfo(iPlaySongIdShare);

				$("#ShareTotCntArea").text(MRSHAREFIRSTNUM);
				$("#ShareCntArea").text(MRSHARENUM);

				$(".btn-like").show();
				$('.has-add-album').show();

				if (SONG_LIKE_YN == "Y"){
					$(".btn-like").addClass("active");
				}else{
					$(".btn-like").removeClass("active");
				}

				if ((ADULT_YN == "Y") && (isAdult != "true")) {
					if (!isLogin){
						toastPopup('ADULT_BLOCK', '�대떦怨≪� 泥�냼�� �댁슜�쒗븳�쇰줈 誘몃━�ｊ린 �섏떎 �� �놁뒿�덈떎. <br/>�ㅼ쓬 怨≪쓣 �ъ깮 �⑸땲��.(怨듭쑀�ъ깮紐⑸줉)');
					}else{
						if (isConf != "0"){
							toastPopup('ADULT_CHECK',
								'泥�냼�� �댁슜�쒗븳 �뚯썝�� �댁슜�섏떆�ㅻ㈃ 蹂몄씤�몄쬆�� �댁빞 �⑸땲��.<br />' +
								'<a href="#" class="close"><span>痍⑥냼</span></a>' +
								'<a href="#" onclick="fnPlayerConfirm(\'3\'); return false;"><span>蹂몄씤�몄쬆�섍린</span></a>'
								, false);
						}else{
							toastPopup('ADULT_BLOCK', '�대떦怨≪� 泥�냼�� �댁슜�쒗븳�쇰줈 �ъ깮�섏떎 �� �놁뒿�덈떎. <br/>�ㅼ쓬 怨≪쓣 �ъ깮 �⑸땲��.(怨듭쑀�ъ깮紐⑸줉)');
						}
					}

					$(".lyrics-all .mCSB_container")
						.html("<p>�대떦 怨≪� <strong>泥�냼�� �댁슜�쒗븳 怨�</strong>�낅땲��.<br />" +
							"<strong>19��</strong> �댁긽�� �깆씤 �댁슜�먯뿉寃뚮쭔 媛��щ낫湲� 湲곕뒫�� �쒓났 �⑸땲��.</p>");

					FG_loading._end(isClickChkSet);
					setTimeout(fnPlayNext, 1000);
					return;
				}

				if(LYRICS_YN == "Y") {
					if (ADULT_YN == "Y" && isAdult != "true") {
						$(".lyrics-all .mCSB_container")
							.html("<p>�대떦 怨≪� <strong>泥�냼�� �댁슜�쒗븳 怨�</strong>�낅땲��.<br /><strong>19��</strong> �댁긽�� �깆씤 �댁슜�먯뿉寃뚮쭔 媛��щ낫湲� 湲곕뒫�� �쒓났 �⑸땲��.</p>");
					} else {
						//�ㅼ떆媛� 媛���
						strNomalLyrics = LYRICS;
						fnGetLyrics();
					}
				}

				strStreamLogData = LOG_PARAM;

				if ((MRSHARECHK == "N") && (parseInt(MRSHARENUM) <= 0)){ // �붿뿬 移댁슫�� �놁쓣��
					if (STREAMING_LICENSE_YN == "Y"){
						if(DPMRSTM_YN=="Y"){
							iProdType = 5;
						}else{
							iProdType = 1;
						}

					}else if ((MRSTM_YN == "Y") && (MRSTM_NUM > 0)){
						iProdType = 3;
						strStreamLogData2 = ITEM_PPS_CNT;
						toastPopup('PPS_SHARE_COUNT', '�붿뿬怨�: ' + MRSTM_NUM + ' (怨듭쑀�ъ깮紐⑸줉)');
					}

					if ((STREAMING_LICENSE_YN == "Y") || ((MRSTM_YN == "Y") && (MRSTM_NUM > 0))){//full streaming
						isAction = true;
					}else{
						isAction = false;
					}

					if (!isLogin){
						toastPopup('LICENSE_1M',
							'1遺� 誘몃━�ｊ린 以묒엯�덈떎.(怨듭쑀�ъ깮紐⑸줉)<br />濡쒓렇�� �� �뚯븙媛먯긽 �곹뭹�� �덉쑝�쒕㈃ �꾧끝 媛먯긽�� 媛��ν빀�덈떎.<br />' +
							'<a href="#" onclick="loginPopup(); return false;"><span>濡쒓렇��</span></a>');
					}else{
						if ((STREAMING_LICENSE_YN == "N")&&((MRSTM_YN == "N")&&(MRSTM_NUM <= 0))){
							if (NONLICENCE == "N"){
								if ((HOLD_BACK == "Y") && (SID == "")){
									toastPopup('LICENSE_1M', '沅뚮━�ъ쓽 �붿껌�쇰줈 1遺� 誘몃━�ｊ린留� �쒓났�⑸땲��.(HOLD-BACK)(怨듭쑀�ъ깮紐⑸줉)');
								}else{
									if (LICENSE_YN == "N" && LICENSE_MSG != ""){
										toastPopup('LICENSE_1M',
										LICENSE_MSG +
											'<br/><a href="#" onclick="fnGoProduct(); return false;"><span>�곹뭹 援щℓ�섍린</span></a>');
									}else{
										toastPopup('LICENSE_1M',
										'�뚯썝�섍퍡�쒕뒗 1遺� 誘몃━�ｊ린留� 媛��ν빀�덈떎.<br />�뚯븙媛먯긽 �곹뭹�� 援щℓ�섏떆硫� �꾧끝 媛먯긽�� 媛��ν빀�덈떎.<br />' +
											'<a href="#" onclick="fnGoProduct(); return false;"><span>�곹뭹 援щℓ�섍린</span></a>');
									}
								}
							}else{
								toastPopup('LICENSE_1M', '沅뚮━�ъ쓽 �붿껌�쇰줈 1遺� 誘몃━�ｊ린留� �쒓났�⑸땲��.(怨듭쑀�ъ깮紐⑸줉)');
							}
						}
					}

					if (iProdType == 3){//PPS �곹뭹�쇰줈 FULL �ъ깮 沅뚰븳 �덉쓣 ��
						$("#HoldArea").addClass("on");
					}

				}else{
					iProdType = 4; //怨듭쑀�섍린 李④컧 Go
					strStreamLogData2 = ITEM_PPS_CNT;

					$("#HoldArea").addClass("on");

					isAction = true;
				}

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
					video.duration = iSongDuration;
					$('.fp-duration').html(getConvertDuration(iSongDuration));
				});

				if(iProdType == 5) {
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
							DpMrDesc = "蹂대떎 �먯꽭�� �ы빆�� [�� �뺣낫]�먯꽌 �뺤씤 媛��ν빀�덈떎.<br />	�뺤씤�� �꾨Ⅴ�쒕㈃ 怨≪씠 �ъ깮�⑸땲��.";
						}

						$("#DpMrTitle").html(DpMrTitle);
						$("#DpMrDesc").html(DpMrDesc);
						$("#DpMrCNT").html(FC_GLComma(iPayCnt) + "��");
						if( COLL_ID == '21117' || COLL_ID == '31117') {
							$("#DpMrAMT").html(FC_GLComma(iPayAmount) + "�� + " + FC_GLComma(iPayPointAmount) + "P");
						} else {
							$("#DpMrAMT").html(FC_GLComma(iPayAmount) + "��");
						}

						FG_layerPopup.show("#DpMrPopUp");
						audioApi.pause();
					}
				}

				FG_loading._end(isClickChkSet);

			}else if (strResult.Result.RetCode == "A00003"){
				var ANOTHER_IP = strResult.DATA0.ANOTHER_IP;
				alert("�숈씪�� ID濡� �ㅻⅨ 怨녹뿉�� 濡쒓렇�� �섏뼱\n�ㅽ듃由щ컢 以묒엯�덈떎.("+ANOTHER_IP+")\n\n�꾩옱 �댁슜 以묒씤 �쒕퉬�ㅻ뒗 濡쒓렇�꾩썐 �⑸땲��.\n怨꾩냽 �댁슜 �섏떆�ㅻ㈃ �ㅼ떆 濡쒓렇�� �댁＜�몄슂.(怨듭쑀�ъ깮紐⑸줉)");
				ANOTHER_IP = "";
				logoutpop("popmusic");
				FG_loading._end(isClickChkSet);
			}else{
				alert("�ㅽ듃�뚰겕 �곹깭媛� �먰븷 �섏� �딆뒿�덈떎.\n�좎떆 �� �ㅼ떆 �댁슜 �댁＜�몄슂!(怨듭쑀�ъ깮紐⑸줉)[53]");
				FG_loading._end(isClickChkSet);
			}
		}
	});
}

function fnPlayOnShare(iRow){
	fnClearSet();
	fnPlayShare(iRow);
}

function fnSetCntDurationShare(tot, idur, strdur, mid, stotcnt, scnt){
	iSongTotalCntShare = tot;
	$("#ShareSongTatalArea").text(tot);
	$("#ShareTotDurationArea").text(strdur);
	$("#ShareIdArea").text(mid);
	$("#ShareTotCntArea").text(stotcnt);
	$("#ShareCntArea").text(scnt);
}

function fnMrShareStmOffSet(snid, dura){
	/*
	var strParams = {mrseq:iSmrsSeq, xgnm: snid, duration: dura, ppscnt:strStreamLogData2};
	$.post("/player/jPlayerMrShareStmOffSet", strParams,
		function(strResult){
			if (strResult.Result.RetCode == 0){
				var RemainCnt = strResult.DATA0.RemainCnt;
				var Rcnt = strResult.DATA0.Rcnt;
				fnStreamLog(strStreamLogData);
				showAlert(Rcnt + "怨� 李④컧 �섏뿀�듬땲��. (" + RemainCnt + "怨� �⑥쓬) (怨듭쑀�ъ깮紐⑸줉)");
				$("#ShareCntArea").text(RemainCnt);

			}else{
				showAlert("�붿뿬怨≪씠 �놁뒿�덈떎. �ㅼ쓬 怨≪쓣 �ъ깮 �⑸땲��.(怨듭쑀�ъ깮紐⑸줉)");
				$("#ShareCntArea").text("0");
				setTimeout(fnPlayNext, 1000);
			}
		}
	, "json");
	*/

	fnStreamLog(strStreamLogData);
}

function fnCloseLoad(){
	if (strOnload == "Y"){
		FG_popupLoad._end();
		fnClearInterval(LoadInterval);
		strOnload = "N";
	}
}