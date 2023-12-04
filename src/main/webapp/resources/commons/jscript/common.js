var objPopGift;

//window.document.domain="genie.co.kr"

function fnGiftSong(songids){

	if (iMemUno == "" ){
		//alert("濡쒓렇�� �� �ㅼ슫濡쒕뱶 媛��ν빀�덈떎.");
		loginPopup();
		return false;
	}
	if (songids != "" ){
		if(songids.substr(0, 1) == ';') {
			songids = songids.substr(-1 * (songids.length - 1));
		}

		if(songids.length - songids.replace(/\;/gi, '').length > 99) {
			songids = songids.split(';', 100).join(';');
			alert('�ㅼ슫濡쒕뱶�� 100怨↔퉴吏� 媛��ν빀�덈떎.\n100怨≪쑝濡� �ㅼ슫濡쒕뱶 吏꾪뻾�⑸땲��.');
		}
		songids = songids.replace(/\;/gi, '^');

		var strPlayUrl = "/gift/popSendGift?xgnm=" + songids;
		objPopGift = window.open(strPlayUrl, 'genieGiftLoader', 'width=670, height=650, resizable=no');
	}else{
		alert("�뚯썝 �뺣낫媛� �놁뒿�덈떎.\n �뺤긽�곸씤 諛⑸쾿�쇰줈 �묎렐 �댁＜�몄슂!");
	}
	return false;
}


var objPopDownLoader;
var strDownSongids = "";
var iDownSongType = 1;
var InterValDown;

function fnAlbumDown(albumid){

	if (isConf == "1"){
		alert("�ㅼ슫濡쒕뱶�� 蹂몄씤 �몄쬆 �꾨즺 �� 媛��ν빀�덈떎.");
		fnMemConfirm('2');
		return;
	}
	if (albumid == "" )	{
		alert("�ㅼ슫濡쒕뱶 �� �⑤쾾�� 議댁옱�섏� �딆뒿�덈떎.");
		return;
	}

	var m = "/download/jAlbumDownload"
	var n = "post";
	var o = "axnm=" + albumid;

	$.ajax({
		type: n,
		url: m,
		contentType: "application/x-www-form-urlencoded; charset=euc-kr",
		data: o,
		dataType: "json",
		error: function (a, b) {
			alert("�ㅼ슫濡쒕뱶 �곗씠�� 濡쒕뱶 以� �먮윭媛� 諛쒖깮�섏��듬땲��.");
		},
		success: function (k) {
			var RetCode = k.Result.RetCode;
			var strHtmlList = "";
			var rownum = 0;

			if (RetCode == "0" ){
				if (k.DataSet.DATA) {
					itemList = new Array();

					$.each(k.DataSet.DATA, function (i) {
						var list_songid = this.SONG_ID;
						if (i == 0 ){
							downsonglist = list_songid;
						}else{
							downsonglist += "^" + list_songid;
						}
					});
					if (downsonglist != "" ){
						fnDownSong(downsonglist);
					}else{
						alert("�ㅼ슫濡쒕뱶�� �⑤쾾�� 怨〓뱾�� 議댁옱�섏� �딆뒿�덈떎.");
						return;
					}
				}
			}else
				alert("�ㅼ슫濡쒕뱶�� �⑤쾾�� 怨〓뱾�� 議댁옱�섏� �딆뒿�덈떎.");
			return;
		}
	});
}

function fnDownSong(songids){
	if (isConf == "1"){
		alert("�ㅼ슫濡쒕뱶�� 蹂몄씤 �몄쬆 �꾨즺 �� 媛��ν빀�덈떎.");
		fnMemConfirm('2');
		return;
	}
	if (iMemUno == "" ){
		//alert("濡쒓렇�� �� �ㅼ슫濡쒕뱶 媛��ν빀�덈떎.");
		loginPopup();
		return false;
	}

	if (songids == "" || songids == "undefined"){
		alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
		return false;
	}

//	var strPlayUrl = location.protocol +"//www.genie.co.kr/DownLoad/pop_download.asp";
	var strPlayUrl = "/download/popDownload"; //[TODO]
	songids = fnReArrSong(songids);
	strDownSongids = songids;
	//iDownSongType = type;
	var tempSongids = "";
	if (  iMemUno  ==  "302321484" || iMemUno  == "300577439"  ){
		if(objPopDownLoader != null ) {
			if (!objPopDownLoader.closed){
				tempSongids = objPopDownLoader.itemContent.downSongList;

				if (tempSongids  != "" ){
					strDownSongids = tempSongids + strDownSongids;
				}
				strDownSongids = removeDuplicatedSong(strDownSongids);

				if (strDownSongids == tempSongids && tempSongids != ""  ){
					objPopDownLoader.focus();
				}else{
					objPopDownLoader.fnDownSongAdd(strDownSongids);
					objPopDownLoader.focus();
				}
				fnClearIntervalByCommon(InterValDown);
				return ;
			}
		}

		objPopDownLoader = window.open('', 'genieDownLoader', 'width=670, height=650, resizable=no');

		try {
			tempSongids = objPopDownLoader.itemContent.downSongList;

			if (tempSongids  != "" ){
				strDownSongids = tempSongids + strDownSongids;
			}
			strDownSongids = removeDuplicatedSong(strDownSongids);

			if (strDownSongids == tempSongids && tempSongids != ""  ){
				objPopDownLoader.focus();
			}else{
				objPopDownLoader.fnDownSongAdd(strDownSongids);
				objPopDownLoader.focus();
			}
			fnClearIntervalByCommon(InterValDown);
		} catch (e) {
			objPopDownLoader.close();
			objPopDownLoader =window.open('/download/popDownload', 'genieDownLoader', 'width=670, height=650, resizable=no');
			InterValDown = setInterval(fnDownSongAdd, 1700);
		}
	}else{


		if((objPopDownLoader == null)||((typeof objPopDownLoader == "undefined"))){
			objPopDownLoader = window["genieDownLoader"];
		}

		if (strDownSongids != "" && strDownSongids.indexOf("undefined") == -1){
			objPopDownLoader = window.open("", 'genieDownLoader', 'width=670, height=650, resizable=no');

			var _chk_Url = objPopDownLoader.location.href.toLowerCase();
			_chk_Url = _chk_Url.replace("#","");
			if (_chk_Url.indexOf("?") != -1){
				var _chk_arr = _chk_Url.split("?");
				_chk_Url = _chk_arr[0];
			}

			//if (strPlayUrl.toLowerCase().indexOf(_chk_Url) != -1){
			if (_chk_Url.indexOf(strPlayUrl.toLowerCase()) != -1){
				//setTimeout("fnDownSongAdd()", 1000);
				InterValDown = setInterval(fnDownSongAdd, 1700);
			}else{
				objPopDownLoader.location.href = strPlayUrl;
				//setTimeout("fnDownSongAdd()", 1000);
				InterValDown = setInterval(fnDownSongAdd, 1700);
			}

		}else{
			alert("�뚯썝 �뺣낫媛� �놁뒿�덈떎.\n �뺤긽�곸씤 諛⑸쾿�쇰줈 �묎렐 �댁＜�몄슂!");
		}
		return false;
	}
}

function fnDownSongAdd(){
	try	{
		var tempSongids = objPopDownLoader.itemContent.downSongList;

		if (tempSongids  != "" ){
			strDownSongids = tempSongids + strDownSongids;
		}
		strDownSongids = removeDuplicatedSong(strDownSongids);

		if (strDownSongids == tempSongids && tempSongids != ""  ){
			objPopDownLoader.focus();
		}else{
			objPopDownLoader.fnDownSongAdd(strDownSongids);
			objPopDownLoader.focus();
		}
		fnClearIntervalByCommon(InterValDown);
	}catch (e){};
};


//以묐났 �쒓굅
function fnReArrSong(str){
	var arr	= str.split(";");
	var str = "";
	for (var i=0; i<arr.length; i++){
		if (str.indexOf(arr[i])<0){
			str += arr[i]+"^";
		}
	}
	return str;
}
//以묐났 �쒓굅
function removeDuplicatedSong(str){
	var arr	= str.split("^");
	var str = "";
	for (var i=0; i<arr.length; i++){
		if (str.indexOf(arr[i])<0){
			str += arr[i]+"^";
		}
	}
	return str;
}


//####### 吏��� �뚮젅�댁뼱 START #######
var objPopMusicPlayer;
var strMusicSongids = "";
var iMusicSongType = 3;
var strMusicAlbumid = "";
var iMusicAlbumType = 3;

var intervalPlayer;

var strMusicTsmSeq = "";
var iMusicTsmType = 3;
var InterValPlaySelect;

var GENIE_PLAYER_URL = "board/Webplayer";

function fnGetPlayerMode() {
	var playerMode = "";

	try {
		playerMode = window.localStorage.getItem("playerMode");
	} catch(e) {
		playerMode = "";
	}

	return playerMode == null ? "" : playerMode;
}

function fnSetObjPopMusicPlayer() {
	if(objPopMusicPlayer == null || typeof objPopMusicPlayer == "undefined" || objPopMusicPlayer.closed) {
		objPopMusicPlayer = window.open("", 'genieMusicPlayer', 'width=880, height=690, resizable=yes');
	}
}

function fnChkMusicPlayerUrl(url) {
	fnSetObjPopMusicPlayer();

	var _chk_Url = objPopMusicPlayer.location.pathname.toLowerCase();

	if (_chk_Url==""){
		_chk_Url = objPopMusicPlayer.location.href.toLowerCase();
	}

	_chk_Url = _chk_Url.replace("#","");

	if (_chk_Url.indexOf("?") != -1){
		var _chk_arr = _chk_Url.split("?");
		_chk_Url = _chk_arr[0];
	}

	if (url.toLowerCase().indexOf(_chk_Url) != -1){
		return true;
	} else {
		return false;
	}
}

function fnPlayCommon(mode, id, type) {
	var playerMode = fnGetPlayerMode();
	var localStorageKey = "";
	var playerUrl = "";
	var callback;

	if(mode == ""
		|| (mode == "song" && id == "" && type != 3)
		|| (mode != "song" && id == "")
	) {
		alert("�뚯썝 �뺣낫媛� �놁뒿�덈떎.\n �뺤긽�곸씤 諛⑸쾿�쇰줈 �묎렐 �댁＜�몄슂!");
		return;
	}

	if(mode == "mv") {
		mvSongids = id;
		mvAt = type;

		localStorageKey = "mvPlay";
		playerUrl = GENIE_MV_PLAYER_URL;
		callback = fnPlayMvAdd;

	} else if(mode == "album") {
		strMusicAlbumid = id;
		iMusicAlbumType = type;

		localStorageKey = "albumPlay";
		playerUrl = GENIE_PLAYER_URL;
		callback = fnPlayAlbumAdd;

	} else if(mode == "song") {
		strMusicSongids = id;
		iMusicSongType = type;

		localStorageKey = "songPlay";
		playerUrl = GENIE_PLAYER_URL;
		callback = fnPlaySongAdd;
	}

	// if(playerMode != "") {
	// 	window.localStorage.setItem(localStorageKey, id + "|" + type);
	//
	// 	setTimeout(function() {
	// 		if(window.localStorage.getItem(localStorageKey)) {
	// 			window.localStorage.removeItem(localStorageKey);
	// 			//window.localStorage.removeItem("playerMode");
	// 			fnPlayCommon(mode, id, type);
	// 		}
	// 	}, 500);
	//
	// } else {
	// 	if (fnChkMusicPlayerUrl(playerUrl)) {
	// 		callback();
	// 	} else {
	// 		objPopMusicPlayer.location.href = playerUrl;
	// 		intervalPlayer = setInterval(callback, 1700);
	// 	}
	// }

	if (fnChkMusicPlayerUrl(playerUrl)) {
		callback();
	} else {
		objPopMusicPlayer.location.href = playerUrl;
		intervalPlayer = setInterval(callback, 1700);
	}
}

function fnPlaySong(songids, type) {
	fnPlayCommon("song", songids, type);
}

//吏��� �� �뚮젅�댁뼱 異붽� 2014.01.02
function fnPlaySongQuick(){
	fnPlaySong("", 3);
}

function fnPlaySongAdd(){
	try {
		if(objPopMusicPlayer.isFlowplayerLoad) {
			objPopMusicPlayer.fnGetPlayList(strMusicSongids, iMusicSongType);
			if(iMusicSongType != 3) objPopMusicPlayer.focus();
			strMusicSongids = "";
			iMusicSongType = 3;
			fnClearIntervalByCommon(intervalPlayer);
		}
	}catch (e){
		//console.log("error");
	}
};


function fnPlayMyAlbumPopV2(iMaId, iProUnm) {
	iProUnm = iProUnm || iMemUno;
	var songIds = fnGetMyAlbumSongIds(iMaId, iProUnm);

	if(songIds != '') {
		fnPlaySong(songIds, '1');
	} else {
		alert('�뚮젅�대━�ㅽ듃�� �닿릿 怨≪씠 �놁뒿�덈떎.');
	}
}

function fnPlayAlbum(albumid, type){
	fnPlayCommon("album", albumid, type);
}

function fnPlayAlbumAdd(){
	try{
		if(objPopMusicPlayer.isFlowplayerLoad) {
			objPopMusicPlayer.fnGetAlbumList(strMusicAlbumid, iMusicAlbumType);
			if(iMusicAlbumType != 3) objPopMusicPlayer.focus();
			strMusicAlbumid = ""
			iMusicAlbumType = 3;
			fnClearIntervalByCommon(intervalPlayer);
		}
	}catch (e){};
}


var strShareSeq = "";
function fnPlaySongShare(seq){
	strShareSeq = seq;

	if (strShareSeq != ""){
		fnSetObjPopMusicPlayer();
		objPopMusicPlayer.location.href = GENIE_PLAYER_URL + "?SmrsSeq=" + strShareSeq +"&pt=3";
		objPopMusicPlayer.focus();
	}else{
		alert("�뚯썝 �뺣낫媛� �놁뒿�덈떎.\n �뺤긽�곸씤 諛⑸쾿�쇰줈 �묎렐 �댁＜�몄슂!");
	}

}

function fnPlaySongSearch(songids, varSongAdultYn) {
	if (varSongAdultYn == "Y") {
		switch(isMemStatus) {
			case "1":	//蹂몄씤�몄쬆 �덊븿
				alertLayer(
					'泥�냼�� �댁슜�쒗븳 �뚯썝�� �ъ깮�섏떆�ㅻ㈃ 蹂몄씤�몄쬆�� �꾩슂 �⑸땲��. �뺤씤�� �대┃ �섏떆硫� 蹂몄씤�몄쬆 �섏씠吏�濡� �대룞 �⑸땲��.', [
						['�뺤씤', 'red', fnMemConfirmRetry, 'close'],
						['痍⑥냼', 'grey', null, 'close']
					], '');
				break;

			case "2":	//誘몄꽦�꾩옄
				alert('19�� �댁긽 �ъ깮 媛��ν븳 怨� �낅땲��.');
				break;

			case "3":	//蹂몄씤�ъ씤利� �꾩슂
				alertLayer(
					'泥�냼�� �댁슜�쒗븳 �뚯썝�� �ъ깮�섏떆�ㅻ㈃ 蹂몄씤�몄쬆�� �꾩슂 �⑸땲��. �뺤씤�� �대┃ �섏떆硫� 蹂몄씤�몄쬆 �섏씠吏�濡� �대룞 �⑸땲��.', [
						['蹂몄씤�몄쬆�섍린', 'red', fnMemConfirmRetry, 'close'],
						['痍⑥냼', 'grey', null, 'close']
					], '');
				break;

			case "4":	//�깆씤
				fnPlaySong(songids,'3');
				break;

			default:
				alert('泥�냼�� �댁슜�쒗븳 �뚯썝�쇰줈, 濡쒓렇�� �� �댁슜 媛��� �⑸땲��.');
		}
	}else{
		fnPlaySong(songids,'3');
	}
}

function fnClearIntervalByCommon(obj){
	if (typeof obj != "undefined"){
		clearInterval(obj);
	}
}
//####### 吏��� �뚮젅�댁뼱 END  #######



/******************************************
 裕ㅼ쭅鍮꾨뵒�� 愿��� - MV_ID濡� �몄텧�섎뒗 �⑥닔 異붽� 2013.10.15
 ******************************************/
var mvSongids = "";
var mvMvids = "";
var mvAt = 3;

var spl = "";
var spt = "";

var GENIE_MV_PLAYER_URL = "/mvPlayer/popMoviePlayerV2";

//怨〓━�ㅽ듃 裕ㅼ쭅鍮꾨뵒�� �꾩씠肄� �대┃�� 1:N-�덉씠��, 1:1 play - 2013.11.18
function fnPlayMv(songid, type) {
	var retCode, sDataSet;
	var iDataCnt = 0;
	var mvid = '';
	var mvHtml = '';
	var originSongId = 	songid;

	songid = songid.replace(/;/g,'');
	songid = songid.replace(/_Second/g,'');	//媛숈��섏씠吏��� 裕ㅻ퉬紐⑸줉�� 2媛� �덉쓣 寃쎌슦 泥섎━
	songid = songid.replace(/_Third/g,'');	//媛숈��섏씠吏��� 裕ㅻ퉬紐⑸줉�� 3媛� �덉쓣 寃쎌슦 泥섎━
	if($("#mv-list_"+originSongId+"").size() >0){
		$("div .toggle-button-box .lyr-mv").removeClass("select-button");
		return false;
	} else {
		$.ajax({
			type: "POST",
			url: "/detail/jSongMvList",
			dataType: "json",
			async: false,
			data: {"xgnm": songid},
			success: function (responseData) {
				retCode = responseData.Result.RetCode;
				if (retCode == "0") {
					iDataCnt = responseData.PageInfo.TotCount;
					sDataSet = responseData.LISTDATA;

					if (iDataCnt > 0) {

						//裕ㅼ쭅 鍮꾨뵒�ㅺ� 1媛쒖씪 寃쎌슦�먮뒗 諛붾줈 �ъ깮 �쒗궡
						if(iDataCnt == 1){
							fnPlayMvID( + sDataSet[0].mvId  ,'1');
							return false;
						}

						var mainBool = false;
						mainBool = ($("span#list-mv_" + originSongId + "").length > 0);

						mvHtml = mvHtml + '<ul class="' + ( mainBool ? '' : 'list ' ) + 'list-mv" id="list-mv">';
						for (var i = 0; i < iDataCnt; i++) {
							mvHtml = mvHtml + '<li id="mv-list_'+ originSongId +'">';
							mvHtml = mvHtml + '<a href="#" title="'+sDataSet[i].mvName+'" onclick="fnPlayMvID(\'' + sDataSet[i].mvId + '\',\'1\');return false;" class="thumb"><span class="mask"></span><img src="//image.genie.co.kr/' + decodeURIComponent(sDataSet[i].mvImgPath) + '" onerror=\"this.src=\'//image.genie.co.kr/imageg/web/common/blank_mv_320.gif\';\" alt="' + decodeURIComponent(sDataSet[i].mvName) + '" />';
							mvHtml = mvHtml + '		<time class="duration">' + getConvertDuration(sDataSet[i].duration) + '</time>';
							mvHtml = mvHtml + '</a>';
							mvHtml = mvHtml + '<a href="#" class="mv-title ellipsis" title="'+sDataSet[i].mvName+'" onclick="fnPlayMvID(\'' + sDataSet[i].mvId + '\',\'1\');return false;">';
							var etcTag = "";
							if (sDataSet[i].mvTypeCode == '30851') {
							} else if (sDataSet[i].mvTypeCode == '30852') {
								etcTag = "<span class='icon-type'>怨듭뿰</span>";
							} else if (sDataSet[i].mvTypeCode == '30853') {
								etcTag = "<span class='icon-type'>�곗�</span>";
							} else if (sDataSet[i].mvTypeCode == '30854') {
								etcTag = "<span class='icon-type'>�щ���</span>";
							} else if (sDataSet[i].mvTypeCode == '30855') {
								etcTag = "<span class='icon-type'>硫붿씠��</span>";
							} else if (sDataSet[i].mvTypeCode == '30856') {
								etcTag = "<span class='icon-type'>湲고�</span>";
							}
							mvHtml = mvHtml + '' + etcTag + '' + decodeURIComponent(sDataSet[i].mvName) + '</a>';
							mvHtml = mvHtml + '<a href="#" class="mv-artist ellipsis" onclick="fnViewArtist(\'' + sDataSet[i].artistId + '\'); return false;">' + decodeURIComponent(sDataSet[i].artistName) + '</a>';
							mvHtml = mvHtml + '</li>';
						}
						mvHtml = mvHtml + '</ul>';
						$("#list-mv_" + originSongId + "").append(mvHtml);

					} else {
						alert("�뚯썝 �뺣낫媛� �놁뒿�덈떎.\n �뺤긽�곸씤 諛⑸쾿�쇰줈 �묎렐 �댁＜�몄슂!");
					}
				} else {
					alert("�뚯썝 �뺣낫媛� �놁뒿�덈떎.\n �뺤긽�곸씤 諛⑸쾿�쇰줈 �묎렐 �댁＜�몄슂!");
				}
			},
			complete: function () {
				spl = "";
				spt = "";
			}
		});
	}
}
function mvPopClose(){
	$(".lyr-mv").hide();
}

//�멸린,李⑦듃 裕ㅻ퉬�몄텧��.. �꾩떆 2013.11.18
function fnPlayMvTmp(songids, type) {
	fnPlayCommon("mv", songids, type);
}

function fnPlayMvAdd(){
	try{
		if(objPopMusicPlayer.isFlowplayerLoad) {
			objPopMusicPlayer.fnGetPlayListMv(mvSongids, mvAt, '1');
			if(mvAt != 3) objPopMusicPlayer.focus();
			mvSongids = ""
			mvAt = 3;
			fnClearIntervalByCommon(intervalPlayer);
		}
	}catch (e){};
}


//MV_ID濡� �몄텧�섎뒗 �⑥닔 異붽� 2013.10.15
function fnPlayMvID(mvids, at) {
	at = at || '1';

	//fnPlayCommon("mv", mvids, at);
	location.href = "/detail/mediaInfo?xvnm="+mvids;
}

//怨� �곸꽭�섏씠吏� �대룞
function fnViewSongInfo(varSongID) {
	if (varSongID == "") {
		alert("�섎せ�� �묎렐�낅땲��.");
	} else {
		var dForm = $('<form />', {
//			'action':'/Detail/f_Song_Info.asp',
			'action':'/detail/songInfo',
			'method':'get',
			'name':'frmMoveData'
		}).html($('<input />',{
			'value':varSongID,
			'type':'hidden',
			'name':'xgnm'
		}));
		dForm.appendTo('body').trigger('submit');
	}
}

//怨� �곸꽭�섏씠吏� �앹뾽
function fnViewSongInfoPop(varSongID)
{
	if (varSongID == "")
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else if (varSongID == "-1")
	{
		alert("怨� �뺣낫媛� 議댁옱�섏� �딆뒿�덈떎.");
	}
	else
	{
		try
		{
			//20140203 �좎꽦�� �뱁뵆�덉씠�� �깅뒫 媛쒖꽑
			var openerUrl = window.opener.location.href.toLowerCase();
//			if (openerUrl.indexOf('//www.genie.co.kr/musicplayer/f_player.asp')> -1 )
//			if (openerUrl.indexOf('//www.genie.co.kr/musicplayer/f_Musicplayer.asp')> -1 )
			if (openerUrl.indexOf('board/Webplayer')> -1 )
			{
				throw "opener is popup";
			}
			else
			{
				//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
				if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1){
					var dForm = $('<form />', {
						'action':'/detail/songInfo',
						'target' :"genie_main",
						'method':'get',
						'name':'frmMoveData'
					}).html($('<input />',{
						'value':varSongID,
						'type':'hidden',
						'name':'xgnm'
					}));
					dForm.appendTo('body').trigger('submit');
				}else {
					window.opener.fnViewSongInfo(varSongID);
				}
			}
		}
		catch (e) {
			var dForm = $('<form />', {
				'action':'/detail/songInfo',
				'target' :"genie_main",
				'method':'get',
				'name':'frmMoveData'
			}).html($('<input />',{
				'value':varSongID,
				'type':'hidden',
				'name':'xgnm'
			}));
			dForm.appendTo('body').trigger('submit');
			//iframe
			//javaParentHTTPSDefend('/detail/songInfo?xgnm='+varSongID)
		}
	}
}

//�꾪떚�ㅽ듃 �곸꽭�섏씠吏� �대룞
function fnViewArtist(varArtistID)
{
	if (varArtistID == "")
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else if (varArtistID == "14951816" || varArtistID == "14958011")
	{
		alert("�대떦 �꾪떚�ㅽ듃 �뺣낫媛� 議댁옱�섏� �딆뒿�덈떎.");
	}
	else
	{
		var dForm = $('<form />', {
			'action':'/detail/artistInfo',
			'method':'get',
			'name':'frmMoveData'
		}).html($('<input />',{
			'value':varArtistID,
			'type':'hidden',
			'name':'xxnm'
		}));
		dForm.appendTo('body').trigger('submit');
	}
}

//�꾪떚�ㅽ듃 �곸꽭�섏씠吏� �앹뾽
function fnViewArtistPop(varArtistID)
{
	if (varArtistID == "")
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else if (varArtistID == "14951816" || varArtistID == "14958011")
	{
		alert("�대떦 �꾪떚�ㅽ듃 �뺣낫媛� 議댁옱�섏� �딆뒿�덈떎.");
	}
	else
	{
		try
		{
			//20140203 �좎꽦�� �뱁뵆�덉씠�� �깅뒫 媛쒖꽑
			var openerUrl = window.opener.location.href.toLowerCase();

			if (openerUrl.indexOf('board/Webplayer')> -1 )
			{
				throw "opener is popup";
			}
			else
			{
				//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
				if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1){
					var dForm = $('<form />', {
						'action':'/detail/artistInfo',
						'target' :"genie_main",
						'method':'get',
						'name':'frmMoveData'
					}).html($('<input />',{
						'value':varArtistID,
						'type':'hidden',
						'name':'xxnm'
					}));
					dForm.appendTo('body').trigger('submit');
				}else {
					window.opener.fnViewArtist(varArtistID);
				}
			}
		}
		catch (e)
		{
			//iframe
			var dForm = $('<form />', {
				'action':'/detail/artistInfo',
				'target' :"genie_main",
				'method':'get',
				'name':'frmMoveData'
			}).html($('<input />',{
				'value':varArtistID,
				'type':'hidden',
				'name':'xxnm'
			}));
			dForm.appendTo('body').trigger('submit');
			//iframe
			//javaParentHTTPSDefend('/detail/artistInfo?xxnm='+varArtistID)
		}
	}
}

//�⑤쾾 �곸꽭�섏씠吏� �대룞
function fnViewAlbumLayer(varAlbumID)
{
	if (varAlbumID == "")
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else
	{
		var dForm = $('<form />', {
			'action':'/detail/albumInfo',
			'method':'get',
			'name':'frmMoveData'
		}).html($('<input />',{
			'value':varAlbumID,
			'type':'hidden',
			'name':'axnm'
		}));
		dForm.appendTo('body').trigger('submit');
	}
}

//�⑤쾾 �곸꽭�섏씠吏� �앹뾽
function fnViewAlbumPop(varAlbumID)
{
	if (varAlbumID == "")
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else
	{
		try
		{
			//20140203 �좎꽦�� �뱁뵆�덉씠�� �깅뒫 媛쒖꽑
			var openerUrl = window.opener.location.href.toLowerCase();

			if (openerUrl.indexOf('board/Webplayer')> -1 )
			{
				throw "opener is popup";
			}
			else
			{
				//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
				if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1){
					var dForm = $('<form />', {
						'action':'/detail/albumInfo',
						'target' :"genie_main",
						'method':'get',
						'name':'frmMoveData'
					}).html($('<input />',{
						'value':varAlbumID,
						'type':'hidden',
						'name':'axnm'
					}));
					dForm.appendTo('body').trigger('submit');
				}else {
					window.opener.fnViewAlbumLayer(varAlbumID);
				}
			}
		}
		catch (e)
		{
			var dForm = $('<form />', {
				'action':'/detail/albumInfo',
				'target' :"genie_main",
				'method':'get',
				'name':'frmMoveData'
			}).html($('<input />',{
				'value':varAlbumID,
				'type':'hidden',
				'name':'axnm'
			}));
			dForm.appendTo('body').trigger('submit');
			//iframe
			//javaParentHTTPSDefend('/detail/albumInfo?axnm='+varAlbumID)
		}
	}
}


//�멸린寃��됱뼱 寃곌낵 �섏씠吏� �대룞
function fnGoSearchKeyword(varSearchKeyword)
{
	if($.trim(varSearchKeyword).length < 1)
	{
		alert ("寃��됱뼱瑜� �낅젰�댁＜�몄슂.");

	}
	else if (!fnInvalidchar(varSearchKeyword))
	{
		alert ("寃��됱뼱�� �щ컮瑜댁� �딆� 臾몄옄媛� �덉뒿�덈떎.");
	}
	else
	{
		// var _searchQuery = fnGetSQString(varSearchKeyword);
		// var dForm = $('<form />', {
		//	 'action':'/search/searchMain',
		//	 'method':'get',
		//	 'name':'frmMoveData'
		// }).html($('<input />',{
		//	 'value':_searchQuery,
		//	 'type':'hidden',
		//	 'name':'query'
		// })).html($('<input />',{
		//	 'value':'kkk',
		//	 'type':'hidden',
		//	 'name':'mgz_seq'
		// }));
		//
		// dForm.appendTo('body').trigger('submit');

		var _searchQuery = fnGetSQString(varSearchKeyword);
		var form = document.createElement("form");
		form.name = "frmMoveData";
		form.action = "/search/searchMain";
		form.method = "get";

		var input1 = document.createElement("input");
		input1.type = "hidden";
		input1.name = "query";
		input1.value = _searchQuery;

		var input2 = document.createElement("input");
		input2.type = "hidden";
		input2.name = "popular";
		input2.value = "true";

		form.appendChild(input1);
		form.appendChild(input2);

		document.body.appendChild(form);
		form.submit();

	}
	return false;
}


//�꾪떚�ㅽ듃 �� �곸꽭 �대룞
function fnGoArtistTab(varType, varArtistID)
{
	if (varArtistID == "14951816" || varArtistID == "14958011")
	{
		alert("�대떦 �꾪떚�ㅽ듃 �뺣낫媛� 議댁옱�섏� �딆뒿�덈떎.");
	}
	else
	{
		var sTargetURL = "";
		switch (varType)
		{
			case "main":
				sTargetURL = "/detail/artistInfo"
				break;
			case "album":
				sTargetURL = "/detail/artistAlbum"
				break;
			case "song":
				sTargetURL = "/detail/artistSong"
				break;
			case "mv":
				sTargetURL = "/detail/artistMv"
				break;
		}

		var dForm = $('<form />', {
			'action':sTargetURL,
			'method':'get',
			'name':'frmMoveData'
		}).html($('<input />',{
			'value':varArtistID,
			'type':'hidden',
			'name':'xxnm'
		}));
		dForm.appendTo('body').trigger('submit');
	}
}

//留ㅺ굅吏� 移댄뀒怨좊━ �대룞
function fnViewMagazineCategory(ctId) {
	if (ctId == "")
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else
	{
		var dForm = $('<form />', {
			'action':'/magazine',
			'method':'get',
			'name':'frmMoveData'
		}).html($('<input />',{
			'value':ctId,
			'type':'hidden',
			'name':'ctid'
		}));
		dForm.appendTo('body').trigger('submit');
	}
}

//�곸긽 �곸꽭�섏씠吏� �대룞
function fnViewVideo(varMvID)
{
	if (varMvID == "") {
		alert("�섎せ�� �묎렐�낅땲��.");
	} else {
		var dForm = $('<form />', {
			'action':'/detail/mediaInfo',
			'method':'get',
			'name':'frmMoveData'
		}).html($('<input />',{
			'value':varMvID,
			'type':'hidden',
			'name':'xvnm'
		}));
		dForm.appendTo('body').trigger('submit');
	}
}

// �곸긽 �곸꽭�섏씠吏� �앹뾽
function fnViewVideoPop(varMvID) {
	if (varMvID == "") {
		alert("�섎せ�� �묎렐�낅땲��.");
	} else {
		try {
			var openerUrl = window.opener.location.href.toLowerCase();

			if (openerUrl.indexOf('board/Webplayer')> -1 ) {
				throw "opener is popup";
			} else {
				// �몃��곕룞�� 寃쎌슦
				if (openerUrl.indexOf('/api/musicplayer/')> -1) {
					var dForm = $('<form />', {
						'action':'/detail/mediaInfo',
						'method':'get',
						'name':'frmMoveData'
					}).html($('<input />',{
						'value':varMvID,
						'type':'hidden',
						'name':'xvnm'
					}));
					dForm.appendTo('body').trigger('submit');
				} else {
					window.opener.fnViewVideo(varMvID);
				}
			}
		} catch (e) {
			var dForm = $('<form />', {
				'action':'/detail/mediaInfo',
				'method':'get',
				'name':'frmMoveData'
			}).html($('<input />',{
				'value':varMvID,
				'type':'hidden',
				'name':'xvnm'
			}));
			dForm.appendTo('body').trigger('submit');
		}
	}
}

function fnViewVideoTagSearch(varTag) {
	varTag = varTag || '';
	if(varTag == '')	return;

	var dForm = $('<form />', {
		'action':'/genietv/tagSearch',
		'method':'get',
		'name':'frmMoveData'
	}).html($('<input />',{
		'value':varTag,
		'type':'hidden',
		'name':'tag'
	}));
	dForm.appendTo('body').trigger('submit');
}

//留ㅺ굅吏� �곸꽭 �대룞
function fnViewMagazine(ctId, mgzSeq) {
	if (ctId == "" || mgzSeq == "")
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else
	{
		var dForm = $('<form />', {
			'action':'/magazine/subMain',
			'method':'get',
			'name':'frmMoveData'
		}).html($('<input />',{
			'value':ctId,
			'type':'hidden',
			'name':'ctid'
		})).html($('<input />',{
			'value':mgzSeq,
			'type':'hidden',
			'name':'mgz_seq'
		}));
		dForm.appendTo('body').trigger('submit');
	}
}

/*
怨� 由ъ뒪�멸� 議댁옱�섎뒗 �섏씠吏��먯꽌 �섏씠吏� 濡쒕뱶 �� 醫뗭븘�� �щ� UI �낅뜲�댄듃 (�좎꽦��)
varType : SONG_LIKE, ARTIST_LIKE, ALBUM_LIKE ��
varSeqs : song_id �� 16250913;16255710;80033049;20371518;81235421;81240465;80602078;80775144;81203123;
varList : UI �낅뜲�댄듃 �� 由ъ뒪�� 而⑦뀒�대꼫 selector (�� : .newest-list .music-list-wrap', inc_Module_List.asp�먯꽌 sbSongList �� s_DivArea�� 媛숈� 媛�
*/
function fnSetLikeList(varUno, varType, varSeqs, varList)
{
	if (isLogin=="true" && varUno != "")
	{
		$.ajax({
			type: "POST",
			url: "/Includes/Commons/Module/jLikeList",
			dataType: "json",
			data: { "unm": varUno, "ltype": varType, "seqs": varSeqs },
			success: function (responseData) {
				retCode = responseData.Result.RetCode;
				if (retCode == "0") {
					var sDataSet = responseData.DataSet.DATA;
					var iDataCnt = responseData.PageInfo.TotCount;
					var iLikeSeq;

					for (i = 0 ; i < iDataCnt ; i++)
					{
						iLikeSeq = sDataSet[i].CHK_SEQ;
						$(varList).find('.like[likeSongID='+iLikeSeq+']').addClass('checked');
					}
				}
			}
		});
	}
}

/*
 * author : Young
 * �묒꽦 �좎쭨 : 2013-05-09
 * 理쒖쥌 �섏젙 �좎쭨 : 2013-05-09
 * descript : GNB, LNB �レ븿踰�,�レ씠�덈�吏곷퉬�붿삤 而⑦뀗痢� 愿�由�
 */
function FC_GLListRandom(obj,cnt){
	var iListLen = parseInt($(obj).length);
	var randNums = [];

	for (i=0; i<cnt; i++){
		randNums.push(Math.floor(Math.random() * iListLen));
	}

	if (randNums[0] == randNums[1]){ //媛숈�媛믪씪 寃쎌슦 湲곕낯�쇰줈 �명똿
		randNums[0]= 0;
		randNums[1] = (iListLen-1);
	}

	randNums.sort();

	$(obj+':eq('+ randNums[0] +')').attr("style","display:block");
	$(obj+':eq('+ randNums[1] +')').attr("style","display:block");

	if (obj == ".aside_album ul li"){ //LNB �レ븿踰붿씪 寃쎌슦
		$(obj+':eq('+ randNums[0] +')').css("margin-bottom","10px");
	}else if (obj == ".sub_menu_2 li"){ //GNB �レ븿踰붿씪 寃쎌슦
		$(obj+':eq('+ randNums[0] +')').css("margin-bottom","15px");
	}else if (obj == ".sub_menu_4 li"){ //GNB �첤V�� 寃쎌슦
		$(obj+':eq('+ randNums[0] +')').css("margin-bottom","15px");
	}
}

//�좏닾釉� 議고쉶�� 媛��몄삤湲�
function FC_GLYtViewCnt(url){
	$.getJSON(url,function(data){
		if (data){
			var id = data.entry.id.$t.replace("http://gdata.youtube.com/feeds/api/videos/","");;
			var viewCnt = data.entry.yt$statistics.viewCount;
			$("#"+id).find("#viewcnt").html(FC_GLComma(viewCnt));
		}
	});
}

//�レ옄 3�먮━ 肄ㅻ쭏 �쒖떆
function FC_GLComma(number){
	number = '' + number;

	if (number.length > 3) {
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');

		for (i=0 ; i < Math.floor(number.length / 3); i++) {
			if ((mod == 0) && (i == 0)){
				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
			}else{
				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
			}
		}

		return (output);
	}else{
		return number;
	}
}

//�ㅻ퉬寃뚯씠�� �쒖떆
function FC_PageLocation(naviText){
	$(".bread-sc").remove();
	$('#wrap-body').append('<p class="bread-sc">'+naviText+'</p>');
}

/*
===================================================================================
�닿퇋�� 由ъ뒪�몄뿉�� �щ윭怨� �좏깮�� 怨� ID諛섑솚 �⑥닔
*/
//�꾧끝 由ъ뒪��
function fnAllSongID() {
	var strArrSongID = "";

	if ($("#sTop100SongID").val() == "Y")
	{
		strArrSongID = $("#sAllSongID").val();
	}else{
		$(".list-wrap").find("div[songID]").each(function (i) {
			var songDiv = $(this);
			var currentSongId = $(this).attr("songID");
			//異붿쿇怨≪씪 寃쎌슦 �쒖쇅
			if (currentSongId != "" && currentSongId != undefined && currentSongId !="-1" && !songDiv.hasClass("recommend") )
			{
				strArrSongID = strArrSongID + currentSongId + ";";
			}
		});
	}

	return strArrSongID;
}

function fnTop10SongID(op) {

	var strArrSongID = "";
	if(op=="S"){
		strArrSongID = $("#sTop10SongID").val();
	}else{
		strArrSongID = $("#sTop10DSongID").val();
	}
	return strArrSongID;
}

//�대떦 ID, Class �댁뿉 紐⑤뱺 怨� 由ъ뒪��
function fnAllSongID2(_target) {
	var strArrSongID = "";
	$(_target + " .list-wrap div[songID]").each(function (i) {
		var songDiv = $(this);
		var currentSongId = $(this).attr("songID");
		//異붿쿇怨≪씪 寃쎌슦 �쒖쇅
		if (currentSongId != "" && currentSongId != undefined && currentSongId !="-1" && !songDiv.hasClass("recommend") )
		{
			strArrSongID = strArrSongID + currentSongId + ";";
		}
	});

	return strArrSongID;
}

// 留덉씠裕ㅼ쭅 留롮씠 �ㅼ�怨�, 理쒓렐 媛먯긽怨≪뿉�� �ъ슜
function fnAllSongID3(_target) {
	var strArrSongID = "";

	if ($("#sTop100SongID").val() == "Y")
	{
		strArrSongID = $("#sAllSongID").val();
	}else{

		$(_target).find(".music-list-wrap").find(".list-wrap").find("div[songID]").each(function (i) {
			var songDiv = $(this);
			var currentSongId = $(this).attr("songID");
			//異붿쿇怨≪씪 寃쎌슦 �쒖쇅
			if (currentSongId != "" && currentSongId != undefined && currentSongId !="-1" && !songDiv.hasClass("recommend") )
			{
				strArrSongID = strArrSongID + currentSongId + ";";
			}
		});
	}

	return strArrSongID;
}

//�좏깮�� 怨� 由ъ뒪��
function fnSelectArrSongID() {
	var strArrSongID = "";

	$(".list-wrap").find(".select-list").each(function (i) {
		var currentSongId = $(this).attr("songID");

		if (currentSongId == "" || currentSongId == undefined || currentSongId =="-1") {
			currentSongId = $(this).attr("songId");
		}

		if (currentSongId == "" || currentSongId == undefined || currentSongId =="-1") {
			currentSongId = $(this).attr("songid");
		}

		if (currentSongId == "" || currentSongId == undefined || currentSongId =="-1") {
			currentSongId = $(this).attr("music-id");
		}

		if (currentSongId != "" && currentSongId != undefined && currentSongId !="-1") {
			strArrSongID = strArrSongID + currentSongId + ";";
		}
	});
	// 怨� �꾩씠�� 以묐났 �쒓굅 泥섎━
	return sidDistinctCommon(strArrSongID);

}

/**
 * 怨≪쓽 以묐났 �쒓굅 泥섎━
 * @param sidKey 111111;222222;111111;4444444
 * @returns ;111111;222222;4444444
 */
function sidDistinctCommon(sidKey){
	var sidArr = sidKey.split(";");
	var rstArr = [];
	var rstKey = "";
	$.each(sidArr, function(i, el){
		if($.inArray(el, rstArr) === -1){
			rstArr.push(el);
			if(el != '' && el != NaN){
				rstKey = rstKey + ";" + parseInt(el);

			}
		}
	});
	return rstKey;
}

//�좏깮�� MvID 由ъ뒪��
function fnSelectArrMvID( ) {
	var strArrMvID = "";

	$(".list-wrap").find(".select-list").each(function (i) {
		var currentMvId = $(".list-wrap").find(".select-list").eq(i).attr("mvId");
		if (currentMvId != "" && currentMvId != undefined && currentMvId !="-1")
		{
			strArrMvID = strArrMvID + currentMvId + ";";
		}
	});
	return strArrMvID;

}

function fnPlayArrSong(iPlayType) {
	var strSelectArrSongID = fnSelectArrSongID();

	if (strSelectArrSongID == "") {
		alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
	} else {
		fnPlaySong(strSelectArrSongID, iPlayType);
	}
}

function fnPlayTop100Song( iPlayType) {
	var strSelectArrSongID = fnAllSongID();

	if (strSelectArrSongID == "")
	{
		alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
	}else{
		fnPlaySong(strSelectArrSongID, iPlayType);
	}
}

function fnPlayTop100Song2(_target, iPlayType) {
	var strSelectArrSongID = fnAllSongID2(_target);

	if (strSelectArrSongID == "")
	{
		alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
	}else{
		fnPlaySong(strSelectArrSongID, iPlayType);
	}
}

function fnPlayTop100Song3(_target, iPlayType) {
	var strSelectArrSongID = fnAllSongID3(_target);

	if (strSelectArrSongID == "")
	{
		alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
	}else{
		fnPlaySong(strSelectArrSongID, iPlayType);
	}
}


//�좏깮�� MV由ъ뒪�� �ъ깮
function fnPlayArrMV( iPlayType) {
	var strSelectArrSongID = fnSelectArrSongID();

	if (strSelectArrSongID == "")
	{
		alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
	}else{
		fnPlayMvTmp(strSelectArrSongID, iPlayType);
	}
}

//�좏깮�� MV由ъ뒪�� �ъ깮 - MV_ID �ъ깮
function fnPlayArrMVID( iPlayType) {
	var strSelectArrMvID = fnSelectArrMvID();

	if (strSelectArrMvID == "")
	{
		alert("�좏깮�� 裕ㅼ쭅鍮꾨뵒�ㅺ� �놁뒿�덈떎.");
	}else{
		fnPlayMvID(strSelectArrMvID, iPlayType);
	}
}

//�좏깮�� 怨� ID 諛섑솚(由ъ뒪�멸� �щ윭媛쒖씪��-TV�� �뚯븙) - HAN
function fnSelectArrSongIDListName(sDivName) {
	var strArrSongID = "";

	$("."+sDivName).find(".select-list").each(function (i) {
		strArrSongID = strArrSongID + $(this).attr("songID") + ";";
	});
	return strArrSongID;
}

//�좏깮�� 怨� �ｊ린(�좏깮�� 由ъ뒪�� �� �덈뒗 怨〓쭔 �ｊ린) - HAN
function fnPlayArrSongListName(sDivName, iPlayType) {
	var strSelectArrSongID = fnSelectArrSongIDListName(sDivName);

	if (strSelectArrSongID == ""){
		alert("�좏깮�� 怨≪씠 �놁뒿�덈떎.");
	} else {
		fnPlaySong(strSelectArrSongID, iPlayType);
	}
}

//�뱀젙 Class �섎떒�� 紐⑤뱺怨� �ｊ린(TV�� �뚯븙) - HAN
function fnPlayAllSongListName(sDivName,type) {

	var strArrSongID = "";

	$("."+sDivName).find(".list-wrap").find("div[songid]").each(function (i) {
		var currentSongId = $(this).attr("songid");

		if (currentSongId != "" && currentSongId != undefined && currentSongId !="-1")
		{
			strArrSongID = strArrSongID + currentSongId + ";";
		}
	});

	fnPlaySong(strArrSongID,type);
}

//�뱀젙 div �대쫫 �섎떒�� 紐⑤뱺怨� �ｊ린(�듯빀 寃���)
function fnPlayAllSongListDIV(sDivName,type) {

	var strArrSongID = "";

	$("#"+sDivName).find(".list-wrap").find("div[songid]").each(function (i) {
		var currentSongId = $(this).attr("songid");

		if (currentSongId != "" && currentSongId != undefined && currentSongId !="-1")
		{
			strArrSongID = strArrSongID + currentSongId + ";";
		}
	});

	fnPlaySong(strArrSongID,type);
}

//�꾩껜 裕ㅻ퉬 ID
function fnAllMvID() {
	var strArrMvID = "";

	$(".list-wrap").find("div[mvId]").each(function (i) {
		var mvDiv = $(this);
		var currentMvId = $(this).attr("mvId");
		//異붿쿇怨≪씪 寃쎌슦 �쒖쇅
		if (currentMvId != "" && currentMvId != undefined && currentMvId !="-1" && !mvDiv.hasClass("recommend") )
		{
			strArrMvID = strArrMvID + currentMvId + ";";
		}
	});

	return strArrMvID;
}


//裕ㅼ쭅鍮꾨뵒�� �꾩껜蹂닿린(mv_id �덉쓣�뚯� �놁쓣�� 泥섎━)
function fnPlayMvAll(viewtype){
	var arrMvID =  fnAllMvID();

	if (arrMvID == ""){
		fnPlayMvTmp(fnAllSongID(),viewtype);
	} else {
		fnPlayMvID(arrMvID,viewtype);
	}
}








/*
 * author : Peter Hong
 ===================================================================================
*/

/*
 * �묒꽦 �좎쭨 : 2013-05-09
 * 理쒖쥌 �섏젙 �좎쭨 : 2013-05-09
 * descript : 怨듭쑀�섍린 �앹뾽李� �ㅽ뵂
 -----------------------------------------------------------------------------------
 */
var winShareObj = null;
function shareDo(songids) {
	if (iMemUno == "" ){
		//alert("濡쒓렇�� �� �ㅼ슫濡쒕뱶 媛��ν빀�덈떎.");
		loginPopup();
		return false;
	}
	//�섏젙�섏� 留덉꽭��. �ъ뒪�� 諛� 以묐났 泥섎━ �덊빐�� �⑸땲��
	winShareObj = window.open("", "_SharePresent", "top=0,left=0,width=670,height=630, toolbar=no, location=no, status=no, memubar=no, scrollbars=no, resizable=no");

	var dForm = $('<form />', {
		'action':'/share/sharePresent',
		'method':'post',
		'name':'frmSharePresent',
		'target':'_SharePresent'
	}).html($('<input />',{
		'value':songids,
		'type':'hidden',
		'name':'songids'
	}));
	dForm.appendTo('body').trigger('submit');
}



/*
 * �묒꽦 �좎쭨 : 2013-05-09
 * 理쒖쥌 �섏젙 �좎쭨 : 2013-05-09
 * descript : 醫뗭븘�� 諛� 醫뗭븘�붿랬��
 * 			likeType		醫뗭븘�붿쑀��: 怨�="SONG", �⑤쾾="ALBUM", �꾪떚�ㅽ듃="ARTIST", 裕ㅼ쭅鍮꾨뵒��="MV"
 * 			clickedSongID	醫뗭븘�봊D: 蹂듭닔�� 寃쎌슦 ";"濡� �곌껐. ex) "812345678;249372193"
 -----------------------------------------------------------------------------------
 */
var cTempObj;

//醫뗭븘�� or 醫뗭븘�� 痍⑥냼 �뺤씤...留�
function likeCancelCheck(cObj) {
	cTempObj = cObj;
	if ( $(cObj).hasClass("checked") ||  $(cObj).hasClass("active") ) {
		unlike($(cObj).attr("likeType"), $(cObj).attr("likeSongID")+";", "", likeCancelSuccess);
		return false;
	} else {
		like($(cObj).attr("likeType"), $(cObj).attr("likeSongID"), "", likeCancelSuccess);
		return false;
	}

}

//醫뗭븘�� or 醫뗭븘�� 痍⑥냼 �뺤씤 CSS議곗옉 - �닿퇋��
//2013-05-23. '|' 留뚯쑝濡� �ъ슜�섍린濡� ��. - �띿꽦��
function likeCancelSuccess(strMsg) {
	//醫뗭븘��,痍⑥냼�깃났
	if (strMsg.indexOf('0|') != -1) {
		if ( $(cTempObj).hasClass("checked") ||  $(cTempObj).hasClass("active")) {
			if($(cTempObj).hasClass("active"))
				$(cTempObj).removeClass("active");
			else
				$(cTempObj).removeClass("checked");
		} else {
			if($(cTempObj).hasClass("active"))
				$(cTempObj).addClass("active");
			else
				$(cTempObj).addClass("checked");
		}

	}

}

//醫뗭븘�붿랬��
function unlike(likeType, songids, unm, fnSuccess) {
	var retCode = -1;
	var selectArrID = "";
	var likeCnt	= 0;

	if (iMemUno == "" ){
		loginPopup();
		return false;
	}

	if (songids == "") {
		alert("癒쇱� �좏깮�� 二쇱꽭��.");
		return false;
	}

	if (!confirm('醫뗭븘�� 痍⑥냼 �섏떆寃좎뒿�덇퉴?') ) {
		return false;
	}

	if (songids == "") {
		selectArrID = fnSelectArrSongID();
	} else {
		selectArrID = songids;
	}

	$.ajax({
		type: "POST",
		url: "/Includes/Commons/Module/jMusicLikeCancel",
		dataType: "json",
		data: { "unm": iMemUno, "mltp": likeType, "mlsq": selectArrID },
		success: function (responseData) {
			retCode = responseData.Result.RetCode;
			if (retCode == "0") {
				likeCnt = responseData.DATA0.likeResult;
				//留덉씠�⑤쾾�먯꽌留� refresh
				//留덉씠�⑤쾾 Dashboard�먯꽌�� refresh - 19.05.22
				if (_rfr.indexOf('/myMusic/') != -1 || _rfr == '/myMusic') {
					location.href = _rfr; //06.01 Young
				}

				alert('醫뗭븘�� 痍⑥냼 �섏뿀�듬땲��');

				fnSuccess(retCode+"|"+likeCnt);

			} else {
				retCode = "2";
				if (fnSuccess) {
					fnSuccess(retCode+"|"+likeCnt);
				}
			}
		},
		complete: function() {
		},
		error: function(xhr,textStatus,error){
			//�먮윭 諛쒖깮�� �ㅽ뻾
		}

	});
}

//醫뗭븘��
function like(likeType, songids, unm, fnSuccess) {
	var retCode = -1, unm = "";
	var selectArrID = "";
	var likeCnt	= 0;
	var retBadgeMsg = '';

	if (iMemUno == "" ){
		loginPopup();
		return false;
	}

	if (songids == "") {
		selectArrID = fnSelectArrSongID();

	} else {
		selectArrID = songids;

	}

	$.ajax({
		type: "POST",
		url: "/Includes/Commons/Module/jMusicLikeProc",
		dataType: "json",
		data: { "unm": iMemUno, "mltp": likeType, "mlsq": selectArrID },
		success: function (responseData) {
			retCode = responseData.Result.RetCode;
			if (retCode == "0") {
				likeCnt = responseData.DATA0.LikeCount;
				retBadgeMsg = responseData.DATA0.BADGE_MSG;

				//諭껋� 諛쒓툒 �덈궡
				if (retBadgeMsg != ""){
					FG_badgeTost(retBadgeMsg);
				}else{
					alert('醫뗭븘�� �섏뿀�듬땲��.');
				}

				if (fnSuccess) {
					fnSuccess(retCode+"|"+likeCnt);
				}

			} else {
				likeCnt = 0;
				if ( retCode == "E00021" ) {
					retCode = "2";

				} else {
					retCode = "1";

				}

				if (fnSuccess) {
					fnSuccess(retCode+"|"+likeCnt);

				}

			}

		}

	});

}


//以묐났 �쒓굅
function duplicatedSong(str){
	var arr	= str.split(";");
	var str = "";
	for (var i=0; i<arr.length; i++){
		if (str.indexOf(arr[i])<0){
			str += arr[i]+";";
		}
	}
	return str;
}

/*
 * �묒꽦 �좎쭨 : 2013-05-09
 * 理쒖쥌 �섏젙 �좎쭨 : 2013-05-09
 * descript : (�덉씠�� �앹뾽��)�덉븿踰� �앹꽦 諛� �덉븿踰� �앹꽦 �� 由ъ뒪�� 諛붿씤��
 -----------------------------------------------------------------------------------
 */
//(�덉씠�� �앹뾽��)�덉븿踰� 留뚮뱾湲�
//albumName: �덉븿踰붾챸
function fnNewMyAlbum(albumName, unm) {

	if (iMemUno == "" ){
		//alert("濡쒓렇�� �� �ㅼ슫濡쒕뱶 媛��ν빀�덈떎.");
		loginPopup();
		return false;
	}

	$.ajax({
		type: "POST",
		url: "/myMusic/jSetNewAlbum",
		dataType: "json",
		data: { "unm": iMemUno, "albumName": albumName },
		success: function (responseData) {
			var retCode = responseData.Result.RetCode;
			if (retCode == "0") {
				fnMyAlbum(iMemUno);
			} else {
				alert("�ㅽ뙣:" + retCode);
			}
		}
	});

}

//(�덉씠�� �앹뾽��)�⑤쾾由ъ뒪��
function fnMyAlbum(unm) {
	$.ajax({
		type: "POST",
		url: "/myMusic/jGetMyAlbum",
		dataType: "json",
		data: { "unm": unm },
		success: function (responseData) {
			var retCode = responseData.Result.RetCode;
			var totalCnt = Number(responseData.PageInfo.TotCount);
			if (retCode == "0") {
				$(".myAlbumItem").remove();
				var myAlbumID, myAlbumTitle;
				for (var i = 0; i < totalCnt; i++) {
					//myAlbumID = URLDecode(responseData.DataSet.DATA[i].MA_ID);
					//myAlbumTitle = URLDecode(responseData.DataSet.DATA[i].MA_TITLE);
					myAlbumID = responseData.DataSet.DATA[i].MA_ID;
					myAlbumTitle = responseData.DataSet.DATA[i].MA_TITLE;
					$(".myAlbum").append("<li class='myAlbumItem'><a href='#' id='myAlbumAdd' title='" + myAlbumID + "'>" + myAlbumTitle + "</a></li>");
				}
			}
		}
	});
}

function fnGetMyAlbumSongIds(iMaId, iProUnm) {
	iProUnm = iProUnm || iMemUno;
	var songIds = "";

	$.ajax({
		type: "POST",
		url: "/myMusic/jProfileRecommandDetail",
		dataType: "json",
		async: false,
		data: { bgsq: iProUnm, axnm: iMaId },
		success: function (responseData) {
			songIds = responseData;
		}
	});

	return (songIds == null || typeof songIds == 'undefined') ? '' : songIds;
}

function fnPlayMyAlbum(iMaId, iPlayType, iProUnm) {
	iProUnm = iProUnm || iMemUno;
	var songIds = fnGetMyAlbumSongIds(iMaId, iProUnm);

	if(songIds != '') {
		fnPlaySong(songIds, iPlayType);
	} else {
		alert('�뚮젅�대━�ㅽ듃�� �닿릿 怨≪씠 �놁뒿�덈떎.');
	}
}

function fnDownMyAlbum(iMaId) {
	var songIds = fnGetMyAlbumSongIds(iMaId);

	if(songIds != '' && typeof songIds != 'undefined') fnDownSong(songIds);
}

function fnShareMyAlbum(iMaId) {
	var songIds = fnGetMyAlbumSongIds(iMaId);

	if(songIds != '' && typeof songIds != 'undefined') shareDo(songIds);
}

// SNS 怨듭쑀�섍린
function shareSNS(type, url) {
	var title = '';
	var summary = 'genie';
	var settings = 'toolbar=0, status=0, width=600, height=400';

	$.get('/makeShortUrl', { allurl : url })
		.done(function (data) {
			url = data;
			title = $("TITLE").text();

			switch (type) {
				case "facebook":
					var FACEBOOK_URL = 'http://www.facebook.com/sharer.php?s=100';
					var query;
					query += '&p[url]=' + encodeURIComponent(url);

					if (title != '') query += '&p[title]=' + encodeURIComponent(title);
					if (summary != '') query += '&p[summary]=' + encodeURIComponent(summary);

					var new_window = window.open(FACEBOOK_URL + query, 'shareFacebook', settings);
					if (window.focus) { new_window.focus(); }
					break;
				case "twitter":
					var TWITTER_URL = 'http://twitter.com/share';
					var RAND = Math.floor(Math.random() * 10);
					var query = '?nocache=' + RAND;
					query += '&url=' + encodeURIComponent(url);

					if (title != '') query += '&text=' + encodeURIComponent('[' + title + ']');

					var new_window = window.open(TWITTER_URL + query, 'shareTwitter', settings);
					if (window.focus) { new_window.focus(); }
					break;
			}
		});
}
//==================================================================================


//===========================================================================================
//jQuery 1.9�먯꽌 $.browser 誘몄��먮릺�� �ъ젙��
/*
$.browser = {};
$.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
$.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
$.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
$.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
*/
//iframe �앹꽦
function buildIframe(id) {
	if (!id || id=="") id="ifrm";
	$("#" + id).remove();

	var $io = $('<iframe id="' + id + '" name="' + id + '" />');
	var io = $io[0];
	var op8 = /opera/.test(navigator.userAgent.toLowerCase()) && window.opera.version() < 9;
	if (/msie/.test(navigator.userAgent.toLowerCase()) || op8) io.src = 'javascript:false;document.write("");';
	$io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
	$("body").append($io);
}
//===========================================================================================



//===========================================================================================
//Data Valid Check
function fnIsNum(num){
	return (/^[0-9]+$/).test(num) ? true : false;
}

//�꾩씠�� ��臾몄옄 遺덇� 2014.09.15
function fnIsUserid(id) {
	return (/^[a-z]{1}[0-9a-z]+$/).test(id) ? true : false;
}

function fnIsPwd(pw) {
	return (/^[0-9a-zA-Z]+$/).test(pw) ? true : false;
}

function fnIsEmail(em){
	return (/\w+([-+.]+)*@\w+([-.]\w+)*\.[a-zA-Z]{2,4}$/).test(em);
}

function fnIsEmailNew(em){
	return (/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i).test(em);
}

function fnIsMobile(hp){
	var arg = "";
	return eval("(/01[016789]" + arg + "[1-9]{1}[0-9]{2,3}" + arg + "[0-9]{4}$/).test(hp)");
}
//===========================================================================================

//�앹뾽�먯꽌 硫붿씤李� �섏씠吏� �대룞
function fnViewPagePop(url) {
	try {
		var openerUrl = window.opener.location.href.toLowerCase();

		//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
		if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1 || window.opener.window.name != "genie_main"){
			var dForm = $('<form />', {
				'action': url,
				'target': "genie_main"
			});
			dForm.appendTo('body').trigger('submit');
		}else {
			window.opener.location.href=url;
		}
	}
	catch (e){
		/*
		 var dForm = $('<form />', {
			'action': url,
			'target': "genie_main"
		});
		dForm.appendTo('body').trigger('submit');
		*/
		javaParentHTTPSDefend(url)

	}
}

//�좎� �꾨줈�� �섏씠吏� �대룞
function fnViewUser(varUserID)
{
	if (varUserID == "")
	{
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else
	{
		var dForm = $('<form />', {
			'action':'/myMusic',
			'method':'get',
			'name':'frmMoveData'
		}).html($('<input />',{
			'value':varUserID,
			'type':'hidden',
			'name':'bgsq'
		}));
		dForm.appendTo('body').trigger('submit');
	}
}

//�좎� �꾨줈�� �섏씠吏� �대룞
function fnViewUserPop(varUserID)
{
	if (varUserID == ""){
		alert("�섎せ�� �묎렐�낅땲��.");
	}
	else{
		try {
			//20140203 �좎꽦�� �뱁뵆�덉씠�� �깅뒫 媛쒖꽑
			var openerUrl = window.opener.location.href.toLowerCase();
//			if (openerUrl.indexOf('//www.genie.co.kr/musicplayer/f_player.asp')> -1 )
//			if (openerUrl.indexOf('//www.genie.co.kr/musicplayer/f_Musicplayer.asp')> -1 )
			if (openerUrl.indexOf('board/Webplayer')> -1 )
			{
				throw "opener is popup";
			}
			else
			{
				//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
				if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1 || window.opener.window.name != "genie_main"){
					var dForm = $('<form />', {
						'action':'/myMusic',
						'target' :"genie_main",
						'method':'get',
						'name':'frmMoveData'
					}).html($('<input />',{
						'value':varUserID,
						'type':'hidden',
						'name':'bgsq'
					}));
					dForm.appendTo('body').trigger('submit');
				}else {
					window.opener.fnViewUser(varUserID);
				}
			}
		}
		catch (e){
			/*
			 var dForm = $('<form />', {
				'action':'/myMusic',
				'target' :"genie_main",
				'method':'get',
				'name':'frmMoveData'
			}).html($('<input />',{
				'value':varUserID,
				'type':'hidden',
				'name':'bgsq'
			}));
			dForm.appendTo('body').trigger('submit');
			*/
			javaParentHTTPSDefend('/myMusic?bgsq='+varUserID);
		}
	}
}

//�뚯썝 媛��� �대룞
function fnViewMemberJoinPop(op){
	var ActionUrl = (op=="j") ? "/member/signUp" : "/member/find/findPwd";

	try {
		var openerUrl = window.opener.location.href.toLowerCase();

		//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
		if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1 || window.opener.window.name != "genie_main"){
			var dForm = $('<form />', {
				'action':ActionUrl,
				'target' :"genie_main"
			});
			dForm.appendTo('body').trigger('submit');
		}else {
			window.opener.location.href="https://www.genie.co.kr"+ActionUrl;
		}
	}
	catch (e){
		/*
		 var dForm = $('<form />', {
			'action': "https://www.genie.co.kr"+ActionUrl,
			'target' : "genie_main"
		});
		dForm.appendTo('body').trigger('submit');
		*/
		javaParentHTTPSDefend("https://www.genie.co.kr"+ActionUrl);
	}
}

//�곹뭹�섏씠吏� �대룞
function fnBuyProductPop(){
	try {
		var openerUrl = window.opener.location.href.toLowerCase();

		//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
		if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1 || window.opener.window.name != "genie_main"){
			var dForm = $('<form />', {
				'action':'/buy/recommend',
				'target' :"genie_main"
			});

			dForm.appendTo('body').trigger('submit');
		}else {
			window.opener.location.href = "/buy/recommend";
		}
	}
	catch (e){
		/*
		 var dForm = $('<form />', {
			'action':'/buy/recommend',
			'target' :"genie_main"
		});
		dForm.appendTo('body').trigger('submit');
		*/
		javaParentHTTPSDefend("/buy/recommend");
	}
}

//�댁슜�덈궡 - 紐⑤컮�� - PC濡� 蹂�寃� 2014.02.06
function fnViewUseGuidePop(){
	try {
		var openerUrl = window.opener.location.href.toLowerCase();

		//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
		if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1 || window.opener.window.name != "genie_main"){
			var dForm = $('<form />', {
				'action':'/guide/genieWeb',
				'target' :"genie_main"
			});
			dForm.appendTo('body').trigger('submit');
		}else {
			window.opener.location.href="/guide/genieWeb";
		}
	}
	catch (e){
		/*
		 var dForm = $('<form />', {
			'action':'/guide/genieWeb',
			'target' :"genie_main"
		});
		dForm.appendTo('body').trigger('submit');
		*/
		javaParentHTTPSDefend("/guide/genieWeb");
	}
}

// 醫뗭븘��-裕ㅻ퉬,�꾪떚�ㅽ듃 醫뗭븘�� 硫��� 痍⑥냼
function fnMultiUnlike(likeType, unm) {

	var s=0;
	var selectArrID = "";

	if(likeType=="mv") {
		$(".mv-list").find(".checkbox").each(function () {
			if ( $(".mv-list").find(".checkbox").eq(s).is(":checked") ) {
				selectArrID = selectArrID + $(this).attr("likeMVID") + ";";
			}
			s += 1;
		});
	} else {
		$(".list-wrap").find(".checkbox").each(function () {

			if ( $(".list-wrap").find(".checkbox").eq(s).is(":checked") ) {
				selectArrID = selectArrID + $(this).attr("likeArtistID") + ";";
			}
			s += 1;
		});
	}

	unlike(likeType, selectArrID, unm, '');

}

//--------------------------------------------------------------------------------------------------------------------------------
/* �대깽�� �묐え �� �� �뺣낫 �덉씠�� �꾩슦湲�	*/
function fnEventJoin(uno, evtId) {
	if(uno != '' && evtId != '') {
		var param = "unm=" + uno + "&exnm=" + evtId;
		//sendRequest( "/Event/b_Event_Join.asp", param, viewResult, "POST"  );
		sendRequest( "/event/bEventJoin", param, viewResult, "POST"  );
	}
}

var httpRequest = null;

function getXMLHttpRequest() {
	if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1) {
				return null;
			}
		}
	} else if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else {
		return null;
	}
}

function sendRequest(url, params, callback, method) {
	httpRequest = getXMLHttpRequest();
	var httpMethod = method ;
	if (httpMethod != 'GET' && httpMethod != 'POST') {
		httpMethod = 'GET';
	}
	var httpParams = (params == null || params == '') ? null : params;
	var httpUrl = url;
	if (httpMethod == 'GET' && httpParams != null) {
		httpUrl = httpUrl + "?" + httpParams;
	}

	httpRequest.open(httpMethod, httpUrl, true);
	httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = callback;
	httpRequest.send(httpMethod == 'POST' ? httpParams : null);
}

/* �대깽�� �묐え 寃곌낵*/
function viewResult(){
	if(httpRequest.readyState == 4){   //�쒕쾭 �곗씠�� 泥섎━媛� �꾨즺�쒓꼍�� 4
		if(httpRequest.status == 200){ //�뺤긽�곸쑝濡� 泥섎━�섏뿀�꾧꼍�� 200

			var reseultCode = httpRequest.responseText;

			if(reseultCode == "0") {
				fnShowMyInfo(iMemUno);	//	�대깽�� �묐え �꾨즺(�� �뺣낫 �뺤씤) �덉씠�� �꾩슦湲�
			} else if(reseultCode == "1") {
				alert("�대� �묐え�섏떊 �대깽�몄엯�덈떎.");
				return false;
			} else if(reseultCode == "2") {
				alert("�뚯썝�뺣낫媛� �뺥솗�섏� �딆븘 �대깽�� �묐え媛� �뺤긽�곸쑝濡� �대（�댁�吏� �딆븯�듬땲��.");
				return false;
			} else if(reseultCode == "3") {
				alert("�대깽�� �묐え�� �ㅽ뙣�섏��듬땲��. �좎떆�꾩뿉 �쒕룄�� 二쇱꽭��.");
				return false;
			} else {
				return false;
			}

		}
	}
}

/*	�대깽�� 理쒖큹 �묐え�� �대깽�� �묐え�꾨즺 �덉씠�� �꾩슦湲� */
function fnShowMyInfo(uno) {
	if(uno != '' && $('#divMyInfo').length > 0) {
		FG_layerPopup.show($('#divMyInfo'));
	}
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

/* URL Decoding */
function URLDecode(txt)
{
	if (txt==undefined || txt==null || txt=="")
	{
		return txt;
	}
	//txt = txt.replaceAll(txt,"%2C",",");
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
	plaintext = replaceAll(plaintext,"%2C",",")
	return plaintext;
};

function replaceAll(str, searchStr, replaceStr) {
	while (str.indexOf(searchStr) != -1) {
		str = str.replace(searchStr, replaceStr);
	}
	return str;
}

function fnViewTodayMusic(date,seq){
	document.location.href = "/todayChoiceMusic/detailView?select_date=" +date + "&TSM_SEQ=" + seq;
}

function fnViewEvent(seq){
	document.location.href = "/event/detail?exnm=" + seq;
}

function fnWizBellRing(varLid) {
	alert("�뱀궗�댄듃�� 踰�/留� �쒕퉬�ㅺ� 醫낅즺�섏뿀�듬땲��.\n吏��� �덈뱶濡쒖씠�� �깆쓽 踰�/留� 硫붾돱瑜� �댁슜�� 二쇱꽭��.");
	return false;
	//window.open('http://genie.wiz.co.kr/html/intro.asp?cpid=507&ktfmid='+varLid, 'WizBellRing', "width=552, height=338 , resizable=no, toolbar=no, location=no, status=no, memubar=no, scrollbars=no");
}

function fnPopPhoneCert(cert) {
	window.open("/member/info/popMobileCert?cert=" + cert, "popMobileCert", "width=552, height=338");
}

function fnSnsLink(snsFlag, url){
	var curUrl =  (url == '' || url == null || typeof url == 'undefined') ? new String(window.location): url;
	var m = "/api/makeShortUrl"
	var n = "post";
	var o = "lurl=" + escape(curUrl);
	sharFlag = "s";
	$.ajax({
		type: n,
		url: m,
		contentType: "application/x-www-form-urlencoded; charset=euc-kr",
		data: o,
		dataType: "json",
		error: function (a, b) {
			alert("SNS 怨듭쑀 泥섎━ 以� �먮윭媛� 諛쒖깮�섏��듬땲��.");
		},
		success: function (k) {
			var RetCode = k.Result.RetCode;
			if (RetCode == "0" ){
				if (k.DataSet) {
					//console.log("k.DataSet= "+k.DataSet.S_URL)
					var sharUrl = URLDecode(k.DataSet.S_URL);
					var strMsg = document.title;

					var strSiteUrl = "";
					if (snsFlag == "F"){
						strSiteUrl = "http://www.facebook.com/sharer.php?u=http://"+sharUrl+"&t=" + encodeURIComponent(""+strMsg+" ") ;	// 援щ쾭��
						window.open(strSiteUrl);
					}else{
						var RAND = Math.floor(Math.random() * 10);
						strSiteUrl = "http://twitter.com/share?nocache=" + RAND+"&url=http://" + sharUrl+"&text="+encodeURIComponent("[" +strMsg+"]");
						window.open(strSiteUrl);
					}
				}
			}
		}
	});
}

//�듯빀寃��� 寃곌낵�먯꽌 SNS 留곹겕 怨듭쑀 �� 留곹겕 URL�� �꾪떚�ㅽ듃, �⑤쾾 怨� �곸꽭濡� �대룞
function fnSnsLinkBySearch(snsFlag, snsType, snsSeq, snsTitle){
	var curUrl =  "http://www.genie.co.kr/detail/"

	switch (snsType.toLowerCase())
	{
		case "artist":
			curUrl = curUrl + "artistInfo?xxnm="+snsSeq
			break;
		case "album":
			curUrl = curUrl + "albumInfo?axnm="+snsSeq
			break;
		case "song":
			curUrl = curUrl + "songInfo?xgnm="+snsSeq
			break;
	}

	var m = "/api/makeShortUrl"
	var n = "post";
	var o = "lurl=" + escape(curUrl);
	sharFlag = "s";
	$.ajax({
		type: n,
		url: m,
		contentType: "application/x-www-form-urlencoded; charset=euc-kr",
		data: o,
		dataType: "json",
		error: function (a, b) {
			alert("SNS 怨듭쑀 泥섎━ 以� �먮윭媛� 諛쒖깮�섏��듬땲��.");
		},
		success: function (k) {
			var RetCode = k.Result.RetCode;
			if (RetCode == "0" ){
				if (k.DataSet) {
					var sharUrl = URLDecode(k.DataSet.S_URL);
					var strMsg = snsTitle;
					var strSiteUrl = "";
					if (snsFlag == "F"){
						strSiteUrl = "http://www.facebook.com/sharer.php?u="+sharUrl+"&t=" + encodeURIComponent(""+strMsg+" ") ;	// 援щ쾭��
						window.open(strSiteUrl);
					}else{
						var RAND = Math.floor(Math.random() * 10);
						strSiteUrl = "http://twitter.com/share?nocache=" + RAND+"&url=" + sharUrl+"&text="+encodeURIComponent("[" +strMsg+"]");
						window.open(strSiteUrl);
					}
				}
			}
		}
	});
}


//�듯빀寃��� 寃곌낵�먯꽌 SNS 留곹겕 怨듭쑀 �� 留곹겕 URL�� �꾪떚�ㅽ듃, �⑤쾾 怨� �곸꽭濡� �대룞
function fnSnsLinkV2(snsFlag, snsType, snsSeq, snsTitle){
	var shareUrl =  "http://app.genie.co.kr/sns/f_getGenie",
		_lt = "",
		_lp = "";

	switch(snsType.toLowerCase()) {
		case "artist":
			_lt = "07";
			_lp = snsSeq;
			break;

		case "album":
			_lt = "05";
			_lp = snsSeq;
			break;

		case "song":
			_lt = "06";
			_lp = snsSeq;
			break;

		case "today":
			_lt = "24";
			_lp = snsSeq;
			break;
		case "magazine":
			_lt = "26";
			_lp = snsSeq;
			break;
		case "video":
			_lt = "39";
			_lp = snsSeq;
			break;
	}

	if(_lp != "") {
		shareUrl = shareUrl + "?landingtype=" + _lt + "&landingtarget=" + _lp;

		var m = "/api/makeShortUrl"
		var n = "post";
		var o = "lurl=" + escape(shareUrl);
		sharFlag = "s";
		$.ajax({
			type: n,
			url: m,
			contentType: "application/x-www-form-urlencoded; charset=euc-kr",
			data: o,
			dataType: "json",
			error: function (a, b) {
				alert("SNS 怨듭쑀 泥섎━ 以� �먮윭媛� 諛쒖깮�섏��듬땲��.");
			},
			success: function (k) {
				var RetCode = k.Result.RetCode;
				if (RetCode == "0" ){
					if (k.DataSet) {
						var sharUrl = URLDecode(k.DataSet.S_URL);
						var strMsg = snsTitle;
						var strSiteUrl = "";
						if (snsFlag == "F"){
							strSiteUrl = "http://www.facebook.com/sharer.php?u="+sharUrl+"&t=" + encodeURIComponent(""+strMsg+" ") ;	// 援щ쾭��
							window.open(strSiteUrl);
						}else if (snsFlag == "L"){
							fnCopyLink(sharUrl);
						}else{
							var RAND = Math.floor(Math.random() * 10);
							strSiteUrl = "http://twitter.com/share?nocache=" + RAND+"&url=" + sharUrl+"&text="+encodeURIComponent("[" +strMsg+"] "+sharUrl);
							window.open(strSiteUrl);
						}
					}
				}
			}
		});
	}
}



//蹂몄씤�몄쬆
function fnMemConfirm(ucty) {
	/*
	1: �뚯썝媛��� �� 14�몃�留� 遺�紐� �뱀씤
	2: 寃곗젣 �� 蹂몄씤 �몄쬆
	3: �ㅽ듃由щ컢�ㅼ슫 蹂몄씤�몄쬆(裕ㅼ쭅)
	4: 蹂몄씤�몄쬆�� 14�몃�留� 遺�紐� �몄쬆
	5: ID 李얘린�� 蹂몄씤 �몄쬆
	6: PW 李얘린�� 蹂몄씤 �몄쬆
	7: ID �꾩껜蹂닿린�� 蹂몄씤 �몄쬆
	*/
	window.open(vGenieUri+"/member/confirm/memberConfirmInfo?ucty=" + ucty, "popMemConfirm", "width=470, height=544");
}

function fnMemConfirmRetry() {
	fnMemConfirm(3);
}


//諛곕꼫 �대┃�� 濡쒓렇 湲곕줉 �� �섏씠吏� �대룞
function fnBannerLogWriteAndGoUrl(sBan_ID, sBan_ScopeID, sBan_ImgTitle, sBan_ImgPath, goUrl){
//	sBan_ID : 諛곕꼫 ID , sBan_ScopeID : �곸뿭 ID , sBan_ImgTitle : 諛곕꼫 ���댄� , sBan_ImgPath : 諛곕꼫 寃쎈줈, goUrl : 留곹겕 寃쎈줈

	//http, https 紐⑤몢 �대룞 �섍린�뚮Ц�� �쒓굅 (http://www.genie.co.kr > //www.genie.cokr)
	goUrl = goUrl.replace('https:','');
	goUrl = goUrl.replace('http:','');

	//�깃났 �ㅽ뙣�щ��� 愿�怨꾩뾾�� �꾨즺�� �ㅽ뻾
	if (sBan_ScopeID == 'WEB_PLAYER' || sBan_ScopeID == 'MV_PLAYER'){
		//�앹뾽李� �ㅽ뻾��
		try
		{
			//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
			var openerUrl = window.opener.location.href.toLowerCase();
			if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1){
				var dForm = $('<form />', {
					'action':goUrl,
					'target' :"genie_main"
				});
				dForm.appendTo('body').trigger('submit');
			}else {
				window.opener.document.location.href=goUrl;	//�섏씠吏� �대룞
			}
		}
		catch (e)
		{
			//�먮윭�� �덉갹 �꾩�
			var newWin = window.open('about:blank');
			newWin.location.href = goUrl;
		}
	} else {
		location.href=goUrl;	//�섏씠吏� �대룞
	}

	$.ajax({
		url:"/api/banner/log",		//濡쒓렇 URL
		type:"POST",
		dataType:"json",
		data:"banId="+sBan_ID+"&banScopeId="+sBan_ScopeID+"&banImgTitle="+sBan_ImgTitle+"&banImgPath="+sBan_ImgPath,
		success: function(jsonData){
			//�깃났�� �ㅽ뻾
		},
		complete: function() {
		},
		error: function(xhr,textStatus,error){
			//�먮윭 諛쒖깮�� �ㅽ뻾
		}
	});
}

//諛곕꼫 �대┃�� 濡쒓렇 湲곕줉 �� �섏씠吏� �대룞, �덉갹�щ��� �곕씪�� �섏씠吏� �ㅽ뻾 2014.02.03 �섏젙
function fnBannerLogWriteAndGoUrl2(sBan_ID, sBan_ScopeID, sBan_ImgTitle, sBan_ImgPath, goUrl){
	//�깃났 �ㅽ뙣�щ��� 愿�怨꾩뾾�� �꾨즺�� �ㅽ뻾
	if (sBan_ScopeID == 'NEW_WINDOW'){ //�덈줈�� 李쎌쑝濡�
		var newWin = window.open('about:blank');
		newWin.location.href = goUrl;
	}else if (sBan_ScopeID == 'WEB_PLAYER' || sBan_ScopeID == 'MV_PLAYER'){
		try{
			//ystar�� 寃쎌슦 -> �몃��곕룞�� 寃쎌슦濡� 蹂�寃� 2014.04.21
			var openerUrl = window.opener.location.href.toLowerCase();
			if (openerUrl.indexOf('/ystar/?songid=')> -1 || openerUrl.indexOf('/api/musicplayer/')> -1){
				var dForm = $('<form />', {
					'action':goUrl,
					'target' :"genie_main"
				});
				dForm.appendTo('body').trigger('submit');
			}else {
				window.opener.document.location.href=goUrl;	//�섏씠吏� �대룞
			}
		}catch (e){
			if(sBan_ScopeID == 'WEB_PLAYER' || sBan_ScopeID == 'MV_PLAYER'){
				try{
					javaParentHTTPSDefend(goUrl);
				}catch (e){
					var newWin = window.open('about:blank'); //�먮윭�� �덉갹 �꾩�
					newWin.location.href = goUrl;
				}
			}else{

				var newWin = window.open('about:blank'); //�먮윭�� �덉갹 �꾩�
				newWin.location.href = goUrl;
			}
		}
	} else {
		location.href=goUrl;	//�섏씠吏� �대룞
	}

	$.ajax({
		url:"/api/banner/log",		//濡쒓렇 URL
		type:"POST",
		dataType:"json",
		data:"banId="+sBan_ID+"&banScopeId="+sBan_ScopeID+"&banImgTitle="+sBan_ImgTitle+"&banImgPath="+sBan_ImgPath,
		success: function(jsonData){
			//�깃났�� �ㅽ뻾
		},
		complete: function() {
		},
		error: function(xhr,textStatus,error){
			//�먮윭 諛쒖깮�� �ㅽ뻾
		}
	});
}


//�대떦 �쇰줈 �ъ슜 �댁빞 ��.
function javaParentHTTPSDefend(goUrl2)
{
	$("#httpDefend").remove();
	var dForm = $('<form />', {
		'id':"httpDefend",
		'name':"httpDefend",
		'action':goUrl2,
		'target' :"genie_main"
	});
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (navigator.userAgent.toLowerCase().indexOf("msie") != -1) )
	{
		if (location.protocol=="http:")
			goUrl="https://www.genie.co.kr/common/goTargetPage";
		else
			goUrl="http://www.genie.co.kr/common/goTargetPage";

		dForm.html($('<input />',{
			'value':goUrl2,
			'type':'hidden',
			'name':'goUrl'
		}));
		dForm.appendTo('body');
		buildIframe("ifr_POP");
		$("#httpDefend").attr("target","ifr_POP");
		$("#httpDefend").attr("action",goUrl);
		$("#httpDefend").submit();

	}
	else
	{
		dForm.appendTo('body').trigger('submit');
	}
}




/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path	? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

//�꾩씠��/鍮꾨�踰덊샇 �댁젙梨�_2014.09.12_�섎�
//��臾몄옄or�뚮Ц�릓r�レ옄or�덉슜�뱀닔臾몄옄媛��μ뿬遺� 泥댄겕
//��or�뚮Ц��+�レ옄
//��or�뚮Ц��+�뱀닔臾몄옄
//��or�뚮Ц��+�レ옄+�뱀닔臾몄옄
//怨듬갚 遺덇�
function fnIsPwdNumberAndChar(pw) {
	if ((/^[0-9a-zA-Z\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~]+$/).test(pw) == true)
	{
		if (/[a-zA-Z]/.test(pw) && (/[0-9]/.test(pw)|| /[\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~]/.test(pw))){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}
//鍮꾨�踰덊샇 �곗냽�� 寃���
//�꾩뒪�� 肄붾뱶 蹂��섑븯�� 3�먯씠�� 以묐났�� 遺덇� 泥섎━
function fnChkPwContinuity(pw){
	var nowChar = "";
	var nextChar = "";
	var len = pw.length;
	var equalscount = 0;
	var continuePlusCount = 0;
	var continueMinusCount = 0;
	for(var i = 0 ; i < len ; i++){
		if(i+1<len){
			nowChar = pw.charCodeAt(i);
			nextChar = pw.charCodeAt(i+1);
			if(nowChar==nextChar){
				equalscount++;
			}else if(nowChar!=nextChar&&equalscount==2){
				equalscount=0;
			}
			if((nowChar+1)==nextChar){
				continuePlusCount++;
			}else if((nowChar+1)!=nextChar&&continuePlusCount==2){
				continuePlusCount = 0;
			}
			if ((nowChar-1)==nextChar){
				continueMinusCount++;
			}else if((nowChar-1)!=nextChar&&continuePlusCount==2){
				continueMinusCount = 0;
			}
		}
		if(continuePlusCount >= 3 || continueMinusCount >= 3||equalscount >= 3){
			return false;
		}
	}
}
//�꾩씠��/鍮꾨�踰덊샇 �쇱튂 寃���
function fnChkPwSameIDCheck(id,pw){
	var cnt = 0;
	var temp = "";
	var temp_id,temp_pass;

	for(var i = 0; i < id.length; i++){
		temp_id = id.charAt(i);

		for(var j=0;j < pw.length;j++){
			if (cnt >0){
				j = tmp_pass_no + 1;
			}
			if (temp == "r"){
				j=0;
				temp="";
			}
			temp_pass = pw.charAt(j);
			if (temp_id == temp_pass){
				cnt = cnt + 1;
				tmp_pass_no = j;
				break;
			}else if(cnt > 0 && j > 0){
				temp="r";
				cnt = 0;
			}else{
				cnt = 0;
			}
		}
		if (cnt > 3) break;
	}
	if (cnt > 3){
		return false;
	}
}

function fnChkPwd(url) {
	$("#fMyInfoPwdChk").remove();
	window.open("/member/info/popMyInfoPwdChk?forward_url="+url, "popMyInfoPwdChk", "width=388, height=193, resizable=no");
//	$("body").append(
//		"<form id='fMyInfoPwdChk' method='post' target='popMyInfoPwdChk' action='/member/info/popMyInfoPwdChk'>" +
//		"	<input type='hidden' name='forward_url' value='" + url + "' />" +
//		"</form>"
//	);
//	fMyInfoPwdChk.submit();
}

function ResizeWindow(x,y) {
	try
	{
		// tool box and border length
		var deltaHeight, deltaWidth;

		if (window.outerHeight) {
			deltaWidth = window.outerWidth - window.innerWidth;
			deltaHeight = window.outerHeight - window.innerHeight;
		}
		else {
			// if ie..
			if (document.documentElement.clientWidth) {

				// get window fake outer size
				var fakeOuterWidth = document.documentElement.clientWidth;
				var fakeOuterHeight = document.documentElement.clientHeight;

				// resize to innerSize
				window.resizeTo(fakeOuterWidth, fakeOuterHeight);

				// get window fake inner size
				var fakeInnerWidth = document.documentElement.clientWidth;
				var fakeInnerHeight = document.documentElement.clientHeight;

				// get delta
				deltaWidth = fakeOuterWidth - fakeInnerWidth;
				deltaHeight = fakeOuterHeight - fakeInnerHeight;
			}
			else {
				// not support -_-;;; ignore resizing;;;; sorry;;;;
				throw "browser does not support!"
			}
		}
		window.resizeTo(x + deltaWidth, y + deltaHeight);
	}catch(e){}
}
//愿��� �꾪떚�ㅽ듃 �뺣낫
function fnRelationArtistList(songid) {
	var retCode, sDataSet;
	var iDataCnt = 0;
	var artistID = '';
	var relationArtistHtml = '';
	var originSongId = songid;
	songid = songid.replace(/;/g,'');
	songid = songid.replace(/_Second/g,'');	//媛숈��섏씠吏��� �꾪떚�ㅽ듃 �� 紐⑸줉�� 2媛� �덉쓣 寃쎌슦 泥섎━
	songid = songid.replace(/_Third/g,'');	//媛숈��섏씠吏��� �꾪떚�ㅽ듃 �� 紐⑸줉�� 3媛� �덉쓣 寃쎌슦 泥섎━

	//list size check
	if($("#relation-list_"+songid+"").size() >0){
		$("div .toggle-button-box").removeClass("select-button");
		return false;
	} else {
		$.ajax({
			type: "POST",
			url: "/Includes/Commons/Module/jRelationArtistList",
			dataType: "json",
			async: false,
			data: {"xgnm": songid},
			success: function (responseData) {
				retCode = responseData.Result.RetCode;
				if (retCode == "0") {
					iDataCnt = responseData.pageInfo.TotCount;
					sDataSet = responseData.DataSet.DATA;
					if (iDataCnt > 1) {

						for(var c=0; c < iDataCnt; c++){
							relationArtistHtml += "<dt>" + sDataSet[c].key + "</dt>";
							relationArtistHtml += "<dd>" + sDataSet[c].value + "</dd>";
						}

						$("#RelationArtist_" + originSongId + "").html(relationArtistHtml);
					} else {
						alert("愿��� �꾪떚�ㅽ듃 �뺣낫媛� �놁뒿�덈떎.\n �뺤긽�곸씤 諛⑸쾿�쇰줈 �묎렐 �댁＜�몄슂!1");
					}
				} else {
					alert("愿��� �꾪떚�ㅽ듃 �뺣낫媛� �놁뒿�덈떎.\n �뺤긽�곸씤 諛⑸쾿�쇰줈 �묎렐 �댁＜�몄슂!2");
				}
			},
			complete: function () {

			}
		});
	}
}

var objPopMusicHug;

//吏��� 裕ㅼ쭅�덇렇 留곹겕
function fnPlayMusicHug(roomId){
//	var strPlayUrl = location.protocol + "//mh-web.genie.co.kr/main/";

	var strPlayUrl = "https://mh-web.genie.co.kr/main/";

	if(roomId != null && typeof roomId !="undefined") {
//		strPlayUrl = location.protocol + "//mh-web.genie.co.kr/main/" + roomId;
		strPlayUrl = "https://mh-web.genie.co.kr/main/" + roomId;
	}


	if((objPopMusicHug == null)||((typeof objPopMusicHug == "undefined"))){
		objPopMusicHug = window["genieMugicHug"];
	}

	objPopMusicHug = window.open("", 'genieMugicHug', 'width=940, height=665, resizable=yes');
	//20140425 �좎꽦�� - �듯뵆�덉씠�� 踰꾪듉 �ы겢由� �� 由щ줈�� 諛⑹�
	try {
		var _chk_Url = objPopMusicHug.location.href.toLowerCase();

		if (_chk_Url.toLowerCase() != strPlayUrl.toLowerCase())
		{
			objPopMusicHug.location.href = strPlayUrl;
		}
		else
		{
			objPopMusicHug.focus();
		}
	} catch(e) {
		objPopMusicHug.focus();
	}
}

/**
 * 裕ㅼ쭅鍮꾨뵒�� �쒓컙由ы꽩
 */
function getConvertDuration(duration) {
	var retVal = "";

	var hour, temp, minute, second;

	if(duration > 86400) {
		duration = duration/24;
	}

	hour = duration / 3600;
	temp = duration % 3600;
	minute = temp / 60;
	second = temp % 60;

	pad = '00';

	hour = (pad+parseInt(hour)).slice(-pad.length);
	minute = (pad+parseInt(minute)).slice(-pad.length);
	second = (pad+parseInt(second)).slice(-pad.length);

	retVal = (hour != '00' ? hour + ':' : '') + minute + ':' + second;

	return retVal;
}


//Object �뺣젹
function sortObject(arr, prop, asc) {
	arr.sort(function(a, b) {
		if (asc) return (a[prop] > b[prop] ? 1 : (a[prop] < b[prop] ? -1 : 0));
		else return (b[prop] > a[prop] ? 1 : (b[prop] < a[prop]? -1 : 0));
	});

	return arr;
}

//Array Sort
var arraySort = function(arr, prop, asc) {
	var len = arr.length;
	if(len < 2) {
		return arr;
	}
	var pivot = Math.ceil(len/2);
	return arrayMerge(arraySort(arr.slice(0,pivot), prop, asc), arraySort(arr.slice(pivot), prop, asc), prop, asc);
};

var arrayMerge = function(left, right, prop, asc) {
	var result = [];
	while((left.length > 0) && (right.length > 0)) {
		//var l = decodeURIComponent(left[0][prop]),
		//	r = decodeURIComponent(right[0][prop]);
		var l = unescape(left[0][prop]),
			r = unescape(right[0][prop]);

		if(asc) {
			if(l < r) {
				result.push(left.shift());
			}else {
				result.push(right.shift());
			}
		} else {
			if(l > r) {
				result.push(left.shift());
			}else {
				result.push(right.shift());
			}
		}
	}

	result = result.concat(left, right);
	return result;
};

var arrayShuffle = function(arr) {
	var shuffle = [];
	if(arr.length < 2) return arr;

	while(arr.length > 0) {
		var ran = Math.floor(Math.random() * (arr.length - 1));
		shuffle.push(arr.splice(ran, 1)[0]);
	}

	return shuffle;
};

Array.prototype.move = function (old_index, new_index) {
	if (new_index >= this.length) {
		var k = new_index - this.length;
		while ((k--) + 1) {
			this.push(undefined);
		}
	}
	this.splice(new_index, 0, this.splice(old_index, 1)[0]);
	return this; // for testing purposes
};

/**
 * 援щℓ 遺덇� �덈궡 �앹뾽
 */
function blockGeniePackAlert(){
	alert('KT �꾩궛 �쒖뒪�� 媛쒗렪 �묒뾽�쇰줈 �명빐\n5�� 25��(湲�) 23:00 ~ 5�� 26��(��) 08:00 �숈븞 \nKT 遺�媛��쒕퉬�� (吏��덊뙥, 誘몃뵒�댄뙥 �곹뭹) 媛��낆씠 以묐떒 �섏삤�� \n�묓빐 遺��� �쒕┰�덈떎.');
}

/**
 * int value check
 */
var isInt = (function() {
	var re = /^[+-]?\d+$/;

	return function(n) {
		return re.test(n);
	}
}());


/*
 * User Agent濡쒕��� OS, 釉뚮씪�곗� �뺣낫 �띾뱷
 */
function fnGetBrowserInfo() {
	var ua = navigator.userAgent.toLowerCase(),
		info = {
			os: {type: '', name: '', version: '', nickname: ''},
			browser: {name: '', version: ''}
		}

	//OS, version > browser, version
	if(ua.indexOf('windows') > -1) {
		if(ua.indexOf('nt 5.1') > -1 || ua.indexOf('nt 5.2') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': 'XP'};

		} else if(ua.indexOf('nt 6.0') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': 'Vista'};

		} else if(ua.indexOf('nt 6.1') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': '7'};

		} else if(ua.indexOf('nt 6.2') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': '8'};

		} else if(ua.indexOf('nt 6.3') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': '8.1'};

		} else if(ua.indexOf('nt 6.4') > -1 || ua.indexOf('nt 10.0') > -1) {
			info['os'] = {'type': 'desktop', 'name': 'Windows', 'version': '10'};
		} else {
			info['os'] = {'type': 'desktop', 'name': 'Windows'};
		}

		if(ua.indexOf('msie 8') > -1 || ua.indexOf('trident/4.0') > -1) {
			info['browser'] = {'name': 'ie', 'version': '8'};

		} else if(ua.indexOf('msie 9') > -1 || ua.indexOf('trident/5.0') > -1) {
			info['browser'] = {'name': 'ie', 'version': '9'};

		} else if(ua.indexOf('msie 10') > -1 || ua.indexOf('trident/6.0') > -1) {
			info['browser'] = {'name': 'ie', 'version': '10'};

		} else if(ua.indexOf('trident/7.0') > -1) {
			info['browser'] = {'name': 'ie', 'version': '11'};

		} else if(ua.indexOf('edge') > -1) {
			var ver = /(edge)\/([\w\s\.]+)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Edge', 'version': ver};

		} else if(ua.indexOf('chrome') > -1) {
			var ver = /(chrome)\/([\w\s\.]+\w\s)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Chrome', 'version': ver};

		} else if(ua.indexOf('firefox') > -1) {
			var ver = /(firefox)\/([\w\s\.]+\w\s*)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Firefox', 'version': ver};

		} else if(ua.indexOf('safari') > -1) {
			var ver = /(safari)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Safari', 'version': ver};
		}

	} else if(ua.indexOf('macintosh') > -1) {
		var ver = /(mac\sos\sx)\s?([\w\s\.]+\w)*/gi.exec(ua)[2].replace(/\_/g, '.') || '',
			nick = '';

		if(ver.indexOf('10.5') > -1) {
			nick = 'Leopard';

		} else if(ver.indexOf('10.6') > -1) {
			nick = 'Snow Leopard';

		} else if(ver.indexOf('10.7') > -1) {
			nick = 'Lion';

		} else if(ver.indexOf('10.8') > -1) {
			nick = 'Mountain Lion';

		} else if(ver.indexOf('10.9') > -1) {
			nick = 'Mavericks';

		} else if(ver.indexOf('10.10') > -1) {
			nick = 'Yosemite';

		} else if(ver.indexOf('10.11') > -1) {
			nick = 'El Capitan';

		} else if(ver.indexOf('10.12') > -1) {
			nick = 'Sierra';

		} else if(ver.indexOf('10.13') > -1) {
			nick = 'High Sierra';
		}

		info['os'] = {'type': 'desktop', 'name': 'Mac', 'version': ver, 'nickname': nick};

		if(ua.indexOf('whale') > -1) {
			var ver = /(whale)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Whale', 'version': ver};
		} else if(ua.indexOf('chrome') > -1) {
			var ver = /(chrome)\/([\w\s\.]+\w\s)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Chrome', 'version': ver};
		} else if(ua.indexOf('firefox') > -1) {
			var ver = /(firefox)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Firefox', 'version': ver};
		} else if(ua.indexOf('safari') > -1) {
			var ver = /(safari)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Safari', 'version': ver};
		}

	} else if(ua.indexOf('iphone') > -1) {
		var ver = /(iphone\sos)\s?([\w\s\.]+\w)*/gi.exec(ua)[2].replace(/\slike\smac\sos\sx/g, '').replace(/\_/g, '.');
		info['os'] = {'type': 'mobile', 'name': 'iOS', 'version': ver};

	} else if(ua.indexOf('ipad') > -1) {
		var ver = /(cpu\sos)\s?([\w\s\.]+\w)*/gi.exec(ua)[2].replace(/\slike\smac\sos\sx/g, '').replace(/\_/g, '.');
		info['os'] = {'type': 'mobile', 'name': 'iOS', 'version': ver};

	} else if(ua.indexOf('android') > -1) {
		var ver = /(android\s)\s?([\w\s\.]+\w)*/gi.exec(ua)[2];
		info['os'] = {'type': 'mobile', 'name': 'Android', 'version': ver};

	} else if(ua.indexOf('linux') > -1) {
		var ver = /(linux\s)\s?([\w\s\.]+\w)*/gi.exec(ua)[2];
		info['os'] = {'type': 'desktop', 'name': 'Linux', 'version': ''};

		if(ua.indexOf('firefox') > -1) {
			var ver = /(firefox)\/([\w\s\.]+\w)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Firefox', 'version': ver};

		} else if(ua.indexOf('chrome') > -1) {
			var ver = /(chrome)\/([\w\s\.]+\w\s)/g.exec(ua)[2].replace(/\s/g, '');
			info['browser'] = {'name': 'Chrome', 'version': ver};
		}
	}


	return info;
}



function getOpener(obj) {
	var _opener = null;

	if(typeof obj == "undefined" || obj == null) {
		if(typeof opener != "undefined") {
			if(opener != null) {
				_opener = opener;
			}
		}
	} else {
		if(typeof obj.opener != "undefined") {
			if(obj.opener != null) {
				_opener = obj.opener;
			}
		}
	}

	return _opener;
}

function fnPrntByConfirmPopop() {
	PopupCenter('/member/confirm/memberPrntByConfirm?ucty=10','popMemConfirm', 470, 462);
}

function PopupCenter(url, title, w, h) {
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	var top = ((height / 2) - (h / 2)) + dualScreenTop;
	var newWindow = window.open(url, title, 'width=' + w + ', height=' + h + ', top=' + top + ', left=' + left + ", fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no");

	if (window.focus) {
		newWindow.focus();
	}
}

function goTagsSearch(tagCode, tagName, logYn){
	if(logYn == 'Y'){
		// �쒓렇 寃��� 濡쒓렇
		insertTagSearchLog(tagCode);
	}

	if(tagCode.indexOf(",") != -1){
		var code;
		var name;
		code = tagCode.split(",");
		name = tagName.split(",");
		tags = code[0] + "||" + name[0] + "," + code[1] + "||" + name[1];
	}else{
		tags = tagCode + "||" + tagName;
	}

	location.href="/playlist/tags?tags="+encodeURIComponent(tags);
	return;
}

/**
 * �쒓렇 寃��� �� 濡쒓렇 �볤린
 * @param tags
 */
function insertTagSearchLog(tags){

	var strParams = {"tags" : tags};
	$.ajax({
		type:"POST",
		url:"/playlist/insertTagSearchLog",
		async: true,
		cache: false,
		data:strParams,
		success : function(data){
			var result = eval(data);
			if(result.retCode == 0 ){
				// alert(" 濡쒓렇 �볤린 �깃났!");
				// return false;

			}
		}
	});

}

function fnGetMvTypeTag(mvType, cls) {
	var rtnTxt = '';

	if(cls == null || typeof cls == 'undefined') {
		cls = 'icon icon-box';
	}

	switch(mvType) {
		case '30851'	:	rtnTxt=''; break;
		case '30852'	:	rtnTxt='怨듭뿰'; break;
		case '30853'	:	rtnTxt='�곗�'; break;
		case '30854'	:	rtnTxt='�щ���'; break;
		case '30855'	:	rtnTxt='硫붿씠��'; break;
		case '30856'	:	rtnTxt='湲고�'; break;
		case '31219'	:	rtnTxt='諛⑹넚'; break;
		case '31220'	:	rtnTxt='�ㅽ럹��'; break;
		case '31221'	:	rtnTxt='吏��덉뒪��'; break;
	}

	return rtnTxt != '' ? '<span class="' + cls + '">' + rtnTxt + '</span>' : '';
}

function fnCopyLink(link) {
	if(window.clipboardData) {
		window.clipboardData.setData("Text", link);
		alert("留곹겕媛� �대┰蹂대뱶�� 蹂듭궗�섏뿀�듬땲��.\nCTRL+V�섏떆硫� 留곹겕媛� �낅젰�⑸땲��");
	} else {
		window.prompt("CTRL+C瑜� �뚮윭 �꾨옒 留곹겕瑜� 蹂듭궗�섏꽭��", link);
	}
}


function trustedIE(){
	var trusted = 0;

	if(isIE.toLowerCase() == 'true') {
		try {
			window.status = "test";

			if (window.status == "test") {
				trusted = 2;
			}
		} catch (e) {
			trusted = 1;
		}
	}

	return trusted;
}

function fnPrintPage(id){

	var initBody = document.body.innerHTML;

	window.onbeforeprint = function(){
		document.body.innerHTML = document.getElementById(id).outerHTML;
	}
	window.onafterprint = function(){
		document.body.innerHTML = initBody;
	}
	window.print();
}

function ResizeWindow(x,y) {
	try
	{
		// tool box and border length
		var deltaHeight, deltaWidth;

		if (window.outerHeight) {
			deltaWidth = window.outerWidth - window.innerWidth;
			deltaHeight = window.outerHeight - window.innerHeight;
		}
		else {
			// if ie..
			if (document.documentElement.clientWidth) {

				// get window fake outer size
				var fakeOuterWidth = document.documentElement.clientWidth;
				var fakeOuterHeight = document.documentElement.clientHeight;

				// resize to innerSize
				window.resizeTo(fakeOuterWidth, fakeOuterHeight);

				// get window fake inner size
				var fakeInnerWidth = document.documentElement.clientWidth;
				var fakeInnerHeight = document.documentElement.clientHeight;

				// get delta
				deltaWidth = fakeOuterWidth - fakeInnerWidth;
				deltaHeight = fakeOuterHeight - fakeInnerHeight;
			}
			else {
				// not support -_-;;; ignore resizing;;;; sorry;;;;
				throw "browser does not support!"
			}
		}
		window.resizeTo(x + deltaWidth, y + deltaHeight);
	}catch(e){}
}

function dateDiff(tp, _date1, _date2) {
	var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
	var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);

	var diff = diffDate_2.getTime() - diffDate_1.getTime();
	var adder = 1;

	if(tp == 's' || tp == 'm' || tp == 'h' || tp == 'd') {
		adder *= 1000;
	}

	if(tp == 'm' || tp == 'h' || tp == 'd') {
		adder *= 60;
	}

	if(tp == 'h' || tp == 'd') {
		adder *= 60;
	}

	if(tp == 'd') {
		adder *= 24;
	}

	diff = Math.ceil(diff / adder);

	return diff;
}

function ie11VerCheck() {
	var userAgent = navigator.userAgent.toLowerCase();
	if(userAgent.indexOf('msie') != -1) {
		return false;
	}
	return true;
}