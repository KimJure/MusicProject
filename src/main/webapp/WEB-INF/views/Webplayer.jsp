<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="kjj" value="${pageContext.request.contextPath }" />
<%@ page session="true" %> 
<!DOCTYPE html>
<html lang="ko">
<!--[if lte IE 6]><html dir="ltr" class="no-js ie6" lang="ko"><![endif]-->
<!--[if lte IE 7]><html dir="ltr" class="no-js ie7" lang="ko"><![endif]-->
<!--[if IE 8]><html dir="ltr" class="no-js ie8" lang="ko"><![endif]-->
<!--[if IE 9]><html dir="ltr" class="no-js ie9" lang="ko"><![endif]-->
<!--[if (gte IE 10)|!(IE)]><!--><html dir="ltr" class="no-js" lang="ko"><!--<![endif]-->
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
	<META HTTP-EQUIV="Expires" CONTENT="-1">
	<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">

	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=yes, target-densitydpi=medium-dpi" />

	<link rel="icon" href="${kjj}/resources/img/Logo/images.png">

	<title>Cushion:지금만큼은 편하게,쿠션</title>

<script src="${kjj}/resources/commons/jscript/jquery-1.9.1.min.js"></script>
<script src="${kjj}/resources/commons/jscript/modernizr.custom.53905.js"></script>
<script src="${kjj}/resources/commons/jscript/front.common.js"></script>
<script src="${kjj}/resources/commons/jscript/front.music.list.js"></script>
<script src="${kjj}/resources/commons/jscript/jquery.mCustomScrollbar.js"></script>
<script src="${kjj}/resources/commons/jscript/common.js"></script>
<script src="${kjj}/resources/commons/jscript/search.js"></script>
<script src="${kjj}/resources/commons/jscript/genie.custom.js"></script>
<script src="${kjj}/resources/commons/jscript/underscore.js"></script>
<script src="${kjj}/resources/commons/jscript/genie.custom1.js"></script>


<!--[if lte IE 8]>
<script src="/resources/commons/jscript/front.ie.js?v=202302211400"></script>
<script src="/resources/commons/jscript/PIE_IE678.js?v=202302211400"></script>
<![endif]-->

<link rel="stylesheet" href="${kjj}/resources/commons/style/basic.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/parent.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/list.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/no_js.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/popup.css" />

<link rel="stylesheet" href="${kjj}/resources/commons/style/tv.css" />

<link rel="stylesheet" href="${kjj}/resources/commons/style/main.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/jquery.bxslider.css" />
<script src="${kjj}/resources/commons/jscript/jquery.bxslider.js"></script>
<script src="${kjj}/resources/commons/jscript/playlist_common.js"></script>



	<script src="${kjj}/resources/commons/jscript/front.player.js"></script>
	<script src="${kjj}/resources/commons/jscript/shortcut.js"></script>
	<script src="${kjj}/resources/commons/jscript/jquery.cookie.js"></script>

	<script src="${kjj}/resources/commons/flowplayer/flowplayer.hlsjs.min.js"></script>
	<script src="${kjj}/resources/commons/flowplayer/flowplayer.js"></script>
	<script src="${kjj}/resources/commons/flowplayer/flowplayer.audio.js"></script>
	<script src="${kjj}/resources/commons/flowplayer/flowplayer.html5.audio.js"></script>

	<script src="${kjj}/resources/commons/jscript/genie.speech.js"></script>

	<script src="${kjj}/resources/commons/jscript/music_player_flow.js"></script>
	<script src="${kjj}/resources/commons/jscript/music_player_share_flow.js"></script>

	<script src="${kjj}/resources/commons/jscript/jquery-ui.min.js"></script>
	<script src="${kjj}/resources/commons/jscript/jquery.multisortable.js"></script>


<link rel="stylesheet" href="${kjj}/resources/commons/style/flowplayer.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/player.css" />
<script src="${kjj}/resources/commons/jscript/jquery.mousewheel.min.js"></script> 
<!-- <script src="${kjj}/resources/commons/jscript/genie.store.js"></script>  -->
<script src="${kjj}/resources/commons/jscript/fingerprint2.js"></script>
<script src="${kjj}/resources/commons/jscript/bluebird.js"></script>

<script type="text/javascript">
	
	var vGenieUri = "//www.genie.co.kr"; 
	var vGenieDomain = "www.genie.co.kr"; 
	var vGenieSsl = "//www.genie.co.kr";
	var vMemberSsl = "//member.genie.co.kr";
	var iMemUno = "326698840";	
	var isLogin = StringUtils.stringToBoolean("true".toLowerCase());
	var isAdult =  StringUtils.stringToBoolean("false".toLowerCase());
	var isConf = "1"; 
	var isProm = "N"; 
	var iProm_NUM =  0;
	var isGenie4000Flag = StringUtils.stringToBoolean("false".toLowerCase()); 
	var strPRHttp = "https";

	if(window.location.protocol !="https:"){
		strPRHttp = "http";
	}else{
		strPRHttp = "https";
	}
	var g_MemSnsType = "";
	var isMemStatus = "1";

	var isIE = 'false';
</script>




	<script>
		var _rfr = "/player/fPlayer";

		

		var lteIE8 = false;

		window.name = "genieMusicPlayer";
	</script>




</head>

<body class="bd-player">
<div id="music-player" class="music-player">
	<div class="gnb-player">
		<div class="mode-wrap">
			<h1><a href="#" class="logo" onclick="fnViewPagePop('/'); return false;">genie</a></h1>
		</div>
		
			
				<div class="menu">
					<a href="#" class="btn-profile" title="내정보" onclick="fnViewUserPop('326698840'); return false;">
						<span class="profile-img">
							<img src="//image.genie.co.kr/imageg/web/common/blank.gif/dims/resize/Q_80,0" alt="님" onerror="this.src='//image.genie.co.kr/imageg/web/common/default_profile.png';" />
						</span>
						<span class="profile-info">
								
									
										<strong>sad***
</strong>
									
									
								
							 님
						</span>
					</a>
					<a href="#" class="btn-wide" title="새창 열림" onclick="fnPlayerFAQ(); return false;">FAQ</a>
					<a href="#" class="btn-wide" title="새창 열림" onclick="fnViewUseGuidePop(); return false;">이용안내</a>
					<div class="toggle-button-box">
						<button type="button" class="btn btn-setting">설정</button>
						<div class="list">
							<div class="field etc">
								<a href="#" title="새창 열림" onclick="fnPlayerFAQ(); return false;">FAQ</a>
								<a href="#" title="새창 열림" onclick="fnViewUseGuidePop(); return false;">이용안내</a>
							</div>
							<div class="field-visible">
								<div class="field">
									<h2>재생목록 추가방식</h2>
									<input type="radio" id="rdo_add_type_1" name="rdo_add_type" checked="checked" value="" onclick="fnSetAddType('3');" /><label for="rdo_add_type_1">목록 마지막에 추가</label><br />
									<input type="radio" id="rdo_add_type_2" name="rdo_add_type" value="" onclick="fnSetAddType('2');" /><label for="rdo_add_type_2">현재곡에 이어서 재생</label>
								</div>
								<div class="field" id="controlVoiceSet" style="display:none;">
									<h2>크롬 브라우저 음성명령</h2>
									<input type="radio" id="rdo_chrome_1" name="rdo_chrome" value="" onclick="fnSpeechToggle('Y');" /><label for="rdo_chrome_1">on</label>
									<input type="radio" id="rdo_chrome_2" name="rdo_chrome" checked="checked" value="" onclick="fnSpeechToggle('N');" /><label for="rdo_chrome_2">off</label>
								</div>
								<div class="field">
									<h2>실시간 가사</h2>
									<input type="radio" id="rdo_lyrics_1" name="rdo_lyrics" checked="checked" value="" onclick="fnSetlyrics('Y');" /><label for="rdo_lyrics_1">on</label>
									<input type="radio" id="rdo_lyrics_2" name="rdo_lyrics" value="" onclick="fnSetlyrics('N');" /><label for="rdo_lyrics_2">off</label>
								</div>
							</div>
							<div class="field etc">
								<a href="#" onclick="logoutpop('popmusic'); return false;">로그아웃</a>
							</div>
						</div>
					</div>
					<a href="#" class="btn-wide" onclick="logoutpop('popmusic'); return false;">로그아웃</a>
				</div>
			
			
		
	</div>
	<div class="player play-ready">
		<!-- BG -->
		<div class="bg">
			<div class="cover_bg">
				<img src alt />
			</div>
			<svg class="cover_svg" height="110%" xmlns="http://www.w3.org/2000/svg">
				<defs>
					<filter id="album_bg01">
						<feGaussianBlur stdDeviation="35" in="SourceGraphic"/>
					</filter>
				</defs>
				<image class="bg_svg_img" xlink:href xmlns:xlink="http://www.w3.org/1999/xlink" width="110%" height="110%" preserveAspectRatio="xMidYMid slice" filter="url(&quot;#album_bg01&quot;)"/>
			</svg>
			<span class="mask"></span>
		</div>
		<!--// BG -->

		<div class="contents">
			<div class="info">
				<div class="track-info">
					<strong class="song ellipsis" id="SongTitleArea">재생 목록이 없습니다</strong>
					<span class="artist ellipsis" id="ArtistNameArea">듣고 싶은 곡을 선택해 보세요!</span>
				</div>
				<div class="btns clarfix">
					<div class="toggle-button-box select-quality">
						<button type="button" class="btn btn-radius" id="dpBitrate">AAC+</button>
						<ul class="list">
							<li><button type="button" class="item" onclick="fnSetStreamBit('96','AAC');">AAC+</button></li>
							<li><button type="button" class="item" onclick="fnSetStreamBit('128','AAC');">AAC 128K</button></li>
							<li><button type="button" class="item" onclick="fnSetStreamBit('320','AAC');">AAC 320K</button></li>
							<li><button type="button" class="item" onclick="fnSetStreamBit('192','MP3');">MP3 192k</button></li>
							<li><button type="button" class="item" onclick="fnSetStreamBit('320','MP3');">MP3 320k</button></li>
						</ul>
					</div>
					<span id="ppsUse" class="btn-radius blt-pps" style="display: none;">PPS차감</span>
					<button type="button" class="btn-like" onclick="fnPlayerLikeAct(); return false;" style="display:none;">좋아요</button>
					<div class="toggle-button-box has-add-album more" style="display:none;">
						<button type="button" class="btn btn-more">더보기</button>
						<ul class="list" id="btnPlayerInfo">
						</ul>
					</div>
				</div>
				<div class="lyrics-mode">
					<div class="cover-wrap">
						<div id="AlbumImgArea" class="cover">
							<img src="//image.genie.co.kr/imageg/web/common/blank.png" onerror="this.src='//image.genie.co.kr/imageg/web/common/blank.png';" alt="" />
						</div>
						<button id="btnSMImgList" type="button" class="btn-viewer" style="display:none;">SM 스테이션 이미지 보기</button>
					</div>
					<!-- LYRICS COVER MODE -->
					<div class="lyrics lyrics-main"></div>
					<!--// LYRICS COVER MODE -->
					<!-- LYRICS LYRICS MODE -->
					<div class="lyrics lyrics-all"></div>
					<!--// LYRICS LYRICS MODE -->
				</div>
			</div>

			<!-- PLAYER -->
			<div id="fp-audio" class="flowplayer no-toggle"></div>
			<!--// PLAYER -->

			<div class="payment">
				
					
						
							
							
								<!-- 상품 미보유 시 -->
								<p class="txt ellipsis">전곡 스트리밍 가능한 이용권이 없습니다.</p>
							
						
					
					
				
				<a href="#" class="btn-payment" title="새창 열림" onclick="fnViewProduct(); return false;">이용권 구매</a>
			</div>
		</div>
	</div>

	<div class="music-list" tabindex="0">
		<div id="content" class="contents">
			
				
				
					<div class="clearfix">
						<button type="button" data-set="tab-playlist" class="btn-tab btn-playlist active">재생목록 <span id="SongTitleTotal" class="text-blue">(0)</span></button>
						<button type="button" data-set="tab-my" class="btn-tab btn-my-music">마이뮤직</button>
					</div>
				
			

			<div class="tab tab-playlist active">
				<div class="btns">
					<button type="button" class="btn-radius" onclick="fnDelPlayListDupl(); return false;">중복곡 삭제</button>
					<div class="toggle-button-box sync">
						<button type="button" class="btn btn-radius">재생목록 동기화</button>
						<ul class="list">
							<li><button type="button" class="item" onclick="fnSyncAct('up', 's'); return false;">현재 목록 올리기</button></li>
							<li><button type="button" class="item" onclick="fnSyncAct('down', 's'); return false;">동기화 목록 내려받기</button></li>
							<li><a href="#" class="item" title="새창 열림" onclick="fnGoSyncList(); return false;">동기화 목록 보기</a></li>
						</ul>
					</div>
					<div class="toggle-button-box sort" id="btnSort">
						<button type="button" class="btn btn-radius">추가순</button>
						<ul class="list">
							<li><button type="button" class="item" onclick="fnPlaylistSort('REG_DT',true); return false;">추가순</button></li>
							<li><button type="button" class="item" onclick="fnPlaylistSort('RELEASE',true); return false;">발매일순</button></li>
							<li><button type="button" class="item" onclick="fnPlaylistSort('SONG',true); return false;">곡명순</button></li>
							<li><button type="button" class="item" onclick="fnPlaylistSort('SONG',false); return false;">곡명 역순</button></li>
							<li><button type="button" class="item" onclick="fnPlaylistSort('ARTIST',true); return false;">아티스트명순</button></li>
							<li><button type="button" class="item" onclick="fnPlaylistSort('ARTIST',false); return false;">아티스트명 역순</button></li>
							<li><button type="button" class="item" onclick="fnPlaylistSort('ALBUM',true); return false;">앨범명순</button></li>
							<li><button type="button" class="item" onclick="fnPlaylistSort('ALBUM',false); return false;">앨범명 역순</button></li>
							<li><button type="button" class="item" onclick="fnPlaylistSort('RANDOM',false); return false;">셔플</button></li>
						</ul>
					</div>
				</div>
				<div id="music-tab" class="music-wrap">
					<div class="music-list-wrap">
						<!-- LIST -->
						<div class="list-wrap scroll-wrap">
							<ul>

							</ul>
							<p class="no-data" style="display:none;">재생목록에 추가된 곡이 없습니다.<br />듣고 싶은 곡을 선택해보세요!</p>
						</div>
						<!--// LIST -->

						<!-- TOOLBAR -->
						<div class="toolbar">
							<input type="checkbox" class="all-check" title="전체 선택" id="all-check" />
							<span class="btn-sort clearfix">
								<button type="button" class="btn up" title="순서이동 드래그가능">선택된 곡 위로 이동</button>
								<button type="button" class="btn down" title="순서이동 드래그가능">선택된 곡 아래로 이동</button>
							</span>
							<button type="button" class="btn btn-album" id="btnMyAlbumPlayist" onclick="fnAddMyAlbumForm('#btnMyAlbumPlayist', musicList._getCheckKey(), 0, -187, 184); return false;">
								<span class="hide">플레이리스트에 </span>담기
							</button>
							<a href="#" class="btn btn-down" title="새창 열림" onclick="fnPlayerMusicDown(musicList._getCheckKey()); return false;">다운</a>
							<button type="button" class="btn btn-del" onclick="fnDelPlaylist(); return false;">삭제</button>
							<div class="check-length"><span class="text-blue"><em id="selectCNT">0</em>곡</span> / <span id="SongTatalArea">0</span>곡</div>
						</div>
						<!--// TOOLBAR -->
					</div>
				</div>
			</div>

			<div class="tab tab-my">
				<div class="btns">
					<a href="#" class="active" onclick="fnShowMyAlbum(); return false;">플레이리스트<span id="myAlbumTotal" class="text-blue">(0)</span></a>
					<a href="#" onclick="fnShowMyStmList(); return false;">최근 감상곡</a>
					<a href="#" onclick="fnShowMyLikeList(); return false;">좋아요</a>
					<a href="#" onclick="fnShowMySongList(); return false;">곡 구매내역</a>
				</div>
				<div id="tabMyListWrap" class="music-wrap">

				</div>
			</div>

			<div class="tab tab-share">

			</div>
		</div>
	</div>
</div>

<!-- IMAGE VIEWER -->
<div id="img-viewer" class="img-viewer">
	<div class="slider-wrap">
		<ul class="bxslider"></ul>
	</div>
	<span class="btn-prev"></span>
	<span class="btn-next"></span>
	<button type="button" class="btn-close close">닫기</button>
</div>
<!--// IMAGE VIEWER -->


<!--  중복 로그인 -->
<div class="layer-popup" style="width:300px;" id="login-another">
	<div class="inner sync">
		<strong class="txt">동시 스트리밍</strong>
		<p class="info-msg">다른 기기에서 동일 아이디로 스트리밍 중입니다.<br />현재 기기에서 계속 재생하시겠습니까?</p>
	</div>
	<div class="confirm-btn">
		<a href="#" class="conf-btn btn-blue radius" onclick="fnGoAnotherIP(); return false;">재생</a>
		<a href="#" class="conf-btn radius" onclick="fnStopAnotherIP();return false;">취소(재생 안함)</a>
	</div>
</div>


<!-- 종량제 사용량 안내 -->
<div class="layer-popup" style="width:414px;display:none;" id="DpMrPopUp">
	<div class="pc-regist inner">
		<h4 id="DpMrTitle">현재까지 사용량(금액) 안내</h4>
		<ul class="note">
			<li>사용량 : <span class="blue" id="DpMrCNT">100회</span></li>
			<li>현재까지 이용금액 : <span class="blue" id="DpMrAMT">1,100원</span></li>
		</ul>
		<p class="desc" id="DpMrDesc">
			보다 자세한 사항은 [내 정보]에서 확인 가능합니다.<br />
			확인을 누르시면 곡이 재생됩니다.
		</p>
	</div>
	<div class="confirm-btn">
		<a class="conf-btn radius btn-blue" href="#" onclick="fnDpMrLayerConfirm(); FG_layerPopup.hide('#DpMrPopUp'); return false;">확인</a>
	</div>
	<div class="close">
		<a href="#" onclick="fnDpMrLayerConfirm(); FG_layerPopup.hide('#DpMrPopUp'); return false;" class="layer-close">닫기</a>
	</div>
</div>


<!-- 재생목록 동기화 - 현재 목록 올리기 -->
<div class="layer-popup" style="width:300px;" id="sync-up">
	<div class="inner sync">
		<strong class="txt">재생 목록을 올리시겠습니까?</strong>
		<p class="info-msg">기존 동기화 목록은 삭제되고<br /> 현재 재생목록으로 덮어쓰게 됩니다.</p>
	</div>
	<div class="confirm-btn">
		<a href="#" class="conf-btn btn-blue radius" onclick="fnSyncSave();">확인</a>
		<a href="#" class="conf-btn radius" onclick="fnSyncAct('up','h');return false;">취소</a>
	</div>
	<div class="close"><a href="#" class="layer-close">닫기</a></div>
</div>


<!-- 재생목록 동기화 - 동기화 목록 내려받기 -->
<div class="layer-popup" style="width:300px;" id="sync-down">
	<div class="inner sync">
		<strong class="txt">재생 목록을 내려 받으시겠습니까?</strong>
		<p class="info-msg">App 동기화 목록에 로컬 음원파일은<br />재생목록에 노출되지 않을 수있습니다.</p>
	</div>
	<div class="confirm-btn">
		<a href="#" class="conf-btn btn-blue radius" onclick="fnGetSyncList(); return false;">확인</a>
		<a href="#" class="conf-btn radius" onclick="fnSyncAct('down','h');return false;">취소</a>
	</div>
	<div class="close"><a href="#" class="layer-close">닫기</a></div>
</div>


<div class="layer-popup" style="width:350px;display:none;" id="flashIE8">
	<div class="inner sync"><!-- 여기에 개별 클래스 추가 -->
		<p class="txt">
			인터넷 익스플로어8 사용 중 재생이 원활하지 않을<br>
			경우 고객센터 도움말을 참고해 주세요.
		</p>
		<p class="info-msg"><input type="checkbox" id="flashIE8_chk"/> 더 이상 보지 않기</p>
	</div>
	<div class="confirm-btn">
		<a href="#" class="conf-btn radius" onclick="fnHideIssueLayer('flashIE8'); return false;">닫기</a>
		<a href="#" class="conf-btn btn-blue radius" onclick="fnGoIssueFAQ('flashIE8'); return false;">도움말 보기</a>
	</div>
</div>


<div class="layer-popup" style="width:350px;display:none;" id="trustedIE">
	<div class="inner sync"><!-- 여기에 개별 클래스 추가 -->
		<p class="txt">
			정상적인 서비스 이용을 위해서<br>
			신뢰할 수 있는 사이트 등록이 필요합니다.
		</p>
	</div>
	<div class="confirm-btn">
		<a href="#" class="conf-btn btn-blue radius" onclick="fnGoIssueFAQ('trustedIE'); return false;">도움말 확인하기</a>
	</div>
</div>


<div class="layer-popup" style="width:350px;display:none;" id="updateEdge">
	<div class="inner sync"><!-- 여기에 개별 클래스 추가 -->
		<p class="txt">
			정상적인 서비스 이용을 위해서<br>
			최신 버전 Window Update 필요합니다.
		</p>
	</div>
	<div class="confirm-btn">
		<a href="#" class="conf-btn btn-blue radius" onclick="fnGoIssueFAQ('updateEdge'); return false;">도움말 확인하기</a>
	</div>
</div>

<div class="layer-popup" style="width:300px;display:none;" id="notSupportBrowser">
	<div class="inner sync"><!-- 여기에 개별 클래스 추가 -->
		<p class="txt" style="margin-bottom: 0;">
			사용하고 계시는 브라우저에서는 지원이 불가하므로 최신 버전의 Edge, Chrome, Firefox 브라우저 사용을 권장합니다.</p>
	</div>
	<div class="confirm-btn">
		<a href="#" class="conf-btn btn-blue radius" onclick="FG_layerPopup.hide('#notSupportBrowser');window.close(); return false;">닫기</a>
	</div>
</div>

<!-- IE 11 미만 브라우저 재생 호출시 팝업 (종료 이후) -->
<div id="ie-expire-end" class="layer-popup" style="width:320px;">
	<div class="inner not_support" >
		<h4 class="large">안내</h4>
		<p>Internet Explorer  11 미만 브라우저에 대한<br>해당 서비스 지원이 종료되었습니다.<br>원활한 감상을 위해 최신 버전의<br>Edge, Chorme, Firefox 브라우저 혹은<br>지니 PC 플레이어를 이용해 주세요.</p>
	</div>
	<div class="confirm-btn">
		<a class="conf-btn btn-blue radius" href="#" onclick="fnGoPds();">다운로드</a>
		<a class="conf-btn radius layer-close" href="#" onclick="fnClose();">닫기</a>
	</div>
	<div class="close">
		<a href="#" class="layer-close">닫기</a>
	</div>
</div>

<div class="layer-popup" style="width:350px;display:none;" id="notSupportMedia">
	<div class="inner sync"><!-- 여기에 개별 클래스 추가 -->
		<p class="txt" style="margin-bottom: 0;word-break: keep-all">
			운영체제에 대한 지원 종료로 미디어<br>기능 팩 업데이트가 불가함에 따라<br>원활한 감상을 위하여 Chrome, Firefox<br>브라우저를 이용 부탁드립니다.</p>
	</div>
	<div class="confirm-btn">
		<a href="#" class="conf-btn btn-blue radius" onclick="FG_layerPopup.hide('#notSupporMedia');window.close(); return false;">닫기</a>
	</div>
</div>







<script src="/resources/commons/jscript/fingerprint2.js?v=202302211400"></script>
<script src="/resources/commons/jscript/bluebird.js?v=202302211400"></script>
<script type="text/javascript">
	var canvas, browser;
	var cancelId, cancelFunction;
	var hasConsole = typeof console !== "undefined";

 	var getFingerprint = Fingerprint2.getPromise();
	getFingerprint.then(function(item) {
	    try {
                item.map(function(obj) {
                if('canvas' == obj.key && obj.value != 'undefined') {
                    canvas = String(obj.value);
                    canvas = canvas.substr(canvas.length-50, 50);
                } else if('hasLiedBrowser' == obj.key && obj.value != 'undefined') {
                    browser = String(obj.value);
                }
            }).join('');
	    } catch (error) {
	        canvas = '';
	        browser = '';
        }
	});

	function loginBrowserLog(canvas, browser) {
	    $.ajax({
            type:"POST",
            url:"/member/insertLoginBrowserLog",
            async: true,
            cache: false,
            data: {"canvas" : canvas , "browser" : browser},
            success : function(data){
                var strResult =  data.retCode;
                if(strResult == 0 ){
                    return false;
                }
            }
        });
    }
</script>







<form id="f_login" name="f_login" method="post">
	<input type="hidden" name="login_suxd" id="login_suxd" />
	<input type="hidden" name="login_suxn" id="login_suxn" />
	<input type="hidden" name="login_suxt" id="login_suxt" />
	<input type="hidden" name="chk" id="chk" />
	<input type="hidden" name="login_http" id="login_http" />

	<input type="hidden" name="uxd" id="uxd" />
	<input type="hidden" name="uxx" id="uxx" />
	<input type="hidden" name="ucc" id="ucc" />
	<input type="hidden" name="uxglk" id="uxglk" />

	<input type="hidden" name="f_JoinType" id="f_JoinType">

	<input type="hidden" name="mh" id="mh" />

	<input type="hidden" name="lk_rfr" id="lk_rfr" />
</form>

<form id="f_login_page" name="f_login_page" method="post">
	<input type="hidden" name="cd" id="cd" />
	<input type="hidden" name="msg" id="msg" />
	<input type="hidden" name="chgmsg" id="chgmsg" />
	<input type="hidden" name="forward" id="forward" />
	<input type="hidden" name="sLoenSt" id="sLoenSt" />

	<input type="hidden" name="page_rfr" id="page_rfr" />
	<input type="hidden" name="page_uxd" id="page_uxd" value="" />

	<input type="hidden" name="page_mh" id="page_mh" />

	<input type="hidden" name="page_suxd" id="page_suxd" />
	<input type="hidden" name="page_suxn" id="page_suxn" />
	<input type="hidden" name="page_suxt" id="page_suxt" />
</form>
<script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
<script src="/resources/commons/jscript/basecode.js?v=202302211400"></script>
<script type="text/javascript">
Kakao.init('3d95e91552f8708aaf3ef3194a7b0544');
function loginWithKakao(){
	Kakao.Auth.login({
		success: function(authObj) {
			Kakao.API.request({
				url: '/v2/user/me',
				success: function(res) {
					var K_Id = '';

					if(res.id != ''){
						K_Id = base64Encode(res.id.toString());
						$("#login_suxd").val(K_Id);
						$("#login_suxn").val(K_Id);
					}
//					$("#login_suxd").val(res.id);
//					$("#login_suxn").val(res.id);
					$("#login_suxt").val('O');
					login();
				},
				fail: function(error) {
					alert(error.error_description);
				}
			});
		},
		fail: function(err) {
			alert(err.error_description);
		}
	});
}

</script>
<script type="text/javascript">
	/*genie ID*/
	function login() {
		//아이디/비밀번호 뉴정책_2014.09.12_수란
		if (/[\s]/.test($("#uxd").val()) || /[\s]/.test($("#uxx").val())){
			alert("아이디/비밀번호에 공백이 포함되어 있습니다.\n다시 한번 확인해 주세요.");
		}else{
			// not use in java flatform
			$("#login_http").val(strPRHttp);
			buildIframe("ifr_login");
			$("#f_login").attr("action","//www.genie.co.kr/auth/signIn");  //상용시 https 로 수정
			$("#f_login").attr("target","ifr_login");
			$("#f_login").submit();
		}
	}

	function fnLoginProc(cd, msg, chgmsg, forward, sLoenSt, mh, login_suxd, login_suxn, login_suxt) {
		var myUrl = location.href.toLowerCase();

		if(mh == null && typeof mh == "undefined") mh = "";

		if(myUrl.indexOf('member/poplogin') > -1 && cd != "I00000" && cd != "E00001" && cd != "I00001" && cd != "I00006" && cd != "I00002" && cd != "I00002T") {
			$("#cd").val(cd);
			$("#msg").val(msg.replace(/\n/gi, "<br/>"));
			$("#chgmsg").val(chgmsg);
			$("#forward").val(forward);
			$("#sLoenSt").val(sLoenSt);
			$("#page_rfr").val(_rfr);
			$("#page_uxd").val($("#uxd").val());
			$("#page_mh").val(mh);

			$("#page_suxd").val($('#login_suxd').val());
			$("#page_suxn").val($('#login_suxn').val());
			$("#page_suxt").val($('#login_suxt').val());

			loginBrowserLog(canvas, browser);

			$("#f_login_page").attr("target","_self");
			$("#f_login_page").attr("action", vGenieUri + "/member/popLoginSuccess");
			$("#f_login_page").submit();
			return;
		}

		$("#f_login_page").attr("target","genie_main");

		switch(cd) {
			case "A00001":
				loginBrowserLog(canvas, browser);

				if(myUrl.indexOf('member/flogin') > -1) {  //현재 페이지가 로그인 페이지이면
					_rfr = "http://www.genie.co.kr";
				}

				if(forward != "") {
					var unm = FG_cookie.get('GENIE_UXM');

					if(unm == '' || unm == null) {
						unm = FG_cookie.get('GENIE%5FUXM');
					}

					if(forward.toLowerCase().indexOf("/buy/promotionconfirm") > -1 && FG_cookie.get("GENIE_EVT_1373") == unm) {
						$("#f_login_page").attr("action", _rfr);
					} else {
						if(forward.indexOf("promotion.genie.co.kr") > -1 || forward.indexOf("campaign.genie.co.kr") > -1) _rfr = _rfr.replace(/(^\w+:|^)/, '');
						$("#f_login_page").attr("action", forward + (forward.indexOf("?") > -1 ? "&" : "?") + "rfr=" + escape(_rfr));
					}

				} else if(chgmsg == "1") {
					if (FG_cookie.get('my_pwd_change') != 'ON') { // 비밀번호 나중에 변경하기 쿠키 체크
						$("#f_login_page").attr("action", "/member/info/myInfoPwdChangeMsg?rfr=" + escape(_rfr));
					} else {
						$("#f_login_page").attr("action", _rfr);
					}
				} else if(myUrl.indexOf('member/resistercallback') > -1) {
					$("#f_login_page").attr("action", "https://www.genie.co.kr");
				} else {
					$("#f_login_page").attr("action", _rfr);
				}

				$("#f_login_page").submit();
				break;

			case "E00001":  //ID/PW 오류
			case "I00006":  //ID/PW 오류
				if($("#login_suxt").val() == "F") {
					FB.logout(function (response) {
							location.reload();
					});
				} else if(myUrl.indexOf("/member/flogin") > -1) {
					$("#signinMessage").html(msg).show();
				} else {
					$("#signinMessage").html(msg).show();
				}
				break;

			case "I00003":  //14세 대기
				fnPrntByConfirmPopop();
				break;
			case "I00004":	  //SNS 비회원
				$("#f_login").attr("target","genie_main");
				$("#f_login").attr("action", "//member.genie.co.kr/account/create/agree?svc=W&suxt="+login_suxt+"&suxn="+login_suxn);
				$("#f_login").submit();
				break;

			case "I00005":  //비밀번호 10회 미만 오류 -> 로그인 페이지 이동
			case "I00007":
				$("#page_uxd").val($("#uxd").val());
				$("#page_rfr").val(_rfr);
				$("#f_login_page").attr("target","genie_main");
				$("#f_login_page").attr("action", "//www.genie.co.kr/member/fLogin");
				$("#f_login_page").submit();
				break;

			case "I00010":  //비밀번호 10회 이상 오류 -> 비밀번호 찾기 이동
				// alert(msg);
				FG_layerPopup.show($('#popup'));

				
				
				
				break;

			case "E00038":
				$("#f_login_page").attr("action", forward);
				$("#f_login_page").submit();
				break;

			case "I00002T":  // 회원 임시 탈퇴 상태(탈퇴일 30일 이후 복구 가능
				if(typeof(opener) != 'undefined')	setTimeout(function() { window.close(); }, 250);
				$("#f_login_page").attr("action", forward);
				$("#f_login_page").submit();
				break;

			case "I00123P":
				alert(msg);
				break;

			default:
				$("#signinMessage").html(msg).show();
		}
	}


	function logout() {
		/* location.href = "/auth/signOut?rfr=" + escape(_rfr); */
		location.href = "/auth/signOut?rfr=" + escape(_rfr);
	}

	function logoutpop(obj) {
		location.href = "/auth/signOut?act="+obj+"&rfr=" + escape(_rfr);
	}

	function loginFB(_type) {
		var redirectUri = "https://www.genie.co.kr/auth/facebook/accessProc";

		var FacebookWin = window.open("https://graph.facebook.com/oauth/authorize?client_id=458810570822272&redirect_uri="+redirectUri+"&type=user_agent&display=popup&scope=email",'sign_in','width=500,height=300,left=' + ((screen.width/2) - 420) + ',top=' + ((screen.height/2) - 250) + ',location=0,toolbar=0,menubar=0,scrollbars=1,resizable=1');
		if (FacebookWin  == null){
			alert("팝업창이 차단되었습니다.\n\n팝업차단을 해제하셔야 페이스북 연동을 하실 수 있습니다.");
			$('#fbCheck').prop('checked', false);
			return false;
		}else{
			FacebookWin.focus();
			return false;
		}
	}

 	function fnFBSettingEnd(atoken,uid,fe){
		FBOAuthToken = atoken;
		FBId = uid;
		$('#fbCheck').prop('checked', true);
		itemContent.fbCheck = "Y";
		$.ajax({url: ""	});
		var m = "/sns/bLoginFBCk"
		var n = "post";
		var o = "ac=" + FBOAuthToken + "&uid=" + uid + "&fe="+ fe;
		$.ajax({
			type: n,
			url: m,
			contentType: "application/x-www-form-urlencoded; charset=euc-kr",
			data: o,
			success: function (k) {
			}
		});
	}





	function getFBLoginInfo(_type) {
		FB.api('/me', function(user) {
			$("#snsId").val(user.email);
			$("#snsNo").val(user.id);
			$("#snsType").val("F");

			if(_type == 1) {
				login();
			} else if(_type == 2 || _type == 3) {
				setFBLoginInfo();
			}
		});
	}

	function setFBLoginInfo() {
		buildIframe("ifr_login_sns");
		$("#f_login").attr("action","/sns/bLoginFBssl");	//상용시 https 로 수정
		$("#f_login").attr("target","ifr_login_sns");
		$("#f_login").submit();
	}

	function fnFBLoginResult() {
		location.reload();
	}

	function connectLoginFB(_type) {
		FB.login(function(response) {
			if (response.authResponse) {
				getFBLoginInfo(_type);
			} else {
				//console.log("cancelled");
			}
		}, {scope: 'email'});
	}

	function logoutFB() {
		//FB.logout(function(response) {
			location.href = "/sns/bLogoutSNS?suxt=F";
		//});
	}

	/*Twitter*/
	function loginTW(_type) {
		if(window.location.protocol !="https:"){
			var call_http= "http";
		}else{
			var call_http= "https";
		}

		var twitterWin = window.open('//www.genie.co.kr/auth/twitter/loginTwitter?call_http='+call_http+'&cert_type=' + _type,'sign_in','width=800,height=500,left=' + ((screen.width/2) - 420) + ',top=' + ((screen.height/2) - 250) + ',location=0,toolbar=0,menubar=0,scrollbars=1,resizable=1');

		if (twitterWin  == null){
			alert("팝업창이 차단되었습니다.\n\n팝업차단을 해제하셔야 트위터 로그인을 하실 수 있습니다.");
			return false;
		}else{
			twitterWin.focus();
		}
	}

	function fnTwitterLoginResult(login_suxd, login_suxn) {
		$("#login_suxd").val(login_suxd);
		$("#login_suxn").val(login_suxn);
		$("#login_suxt").val("T");
		login();
	}

	function logoutTW() {
		location.href = "/sns/bLogoutSNS?suxt=T";
	}

	function appleLogin() {
		var ranNum = Math.floor(Math.random() * 10);
		setCookie('appleState', ranNum , 1);
		window.open('https://mw.genie.co.kr/login/appleLogin?vmd=W', '', 'width=800,height=500,left=' + ((screen.width/2) - 420) + ',top=' + ((screen.height/2) - 250) + ',location=0,toolbar=0,menubar=0,scrollbars=1,resizable=1');
	}

	function setCookie( name, value, expiredays ) {
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
	}
</script>


<script>
//localtorage 관리
var genieStore = new GENIE_STORE();	//localstrage(미지원시 쿠키) 사용 처리

//재생목록 리스트 UI 관리
var musicList = new MUSIC_LIST();
musicList.hook = $('.tab-playlist .music-list-wrap');
musicList.listType = 'play_list';	//재생목록 유형 : play_list(뮤직 플레이어)
musicList.keyName = 'music-id';		//재생목록의 song_id를 저장하는 Attribute
musicList.option = {
	scroll:false,
	multiple:true
};
musicList._load();

//재생목록 편집(정렬) 관리
var listSort = new LIST_SORT();
listSort.checksSelect = '.tab-playlist .select-check';	//체크박스의 class
listSort.listsSelect = '.tab-playlist li.list';			//재생목록 각각 리스트의 class
listSort.listsWrap = '.tab-playlist .list-wrap>ul';		//재생목록의 class
listSort.listType = 'play_list';						//재생목록 유형 : play_list(뮤직 플레이어)
listSort.cookieName = 'genie-player-list',				//재생목록 cookie명
listSort.localstorageName = 'geniePlayerList',			//재생목록 localstorage명
listSort.keyName = 'music-id';							//재생목록의 song_id를 저장하는 Attribute
listSort.hook = $('.tab-playlist .btn-sort button');	//정렬 기능 버튼
listSort.callback = function(sq) {
	if(sq == null || typeof sq == 'undefined') sq = true;

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

	if(sq) {
		iPlaySeq = $("#music-tab .this-play").index() + 1;
		fnSetPlayerCookie();
	}
};
listSort._load();


//재생목록 multiselect drag 편집
var multiSelectIndexs = [];

$(listSort.listsWrap).multisortable({
	items:'li.list',
	selectedClass: 'select-list',
	checkClass: 'select-check',
	axis: 'y',
	delay:150,
	mousedown: function(e) {
		multiSelectIndexs = [];

		$(listSort.listsWrap).find('li.list.select-list').each(function() {
			multiSelectIndexs.push($(listSort.listsWrap).find('li.list').index($(this)));
		});
	},
	stop: function(e) {
		if(multiSelectIndexs.length > 0) {
			var toLi = $(listSort.listsWrap).find('li.list.select-list:eq(0)'),
				toIndex = $(listSort.listsWrap).find('li.list').index(toLi),
				temp = [];

			for(var i = 0; i < multiSelectIndexs.length; i++) {
				temp.push(listSort.arrayLists.splice(multiSelectIndexs[i] - i, 1));
			}

			for(var i = 0; i < temp.length; i++) {
				listSort.arrayLists.splice(toIndex + i, 0, temp[i][0]);
			}

			fnPlaylistReload(true, true, true);
		}
	}
});

var musicList_Share;	//공유재생목록 관리용

//플레이어 팝업창 전체 로딩 표시용
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


//플레이어 로딩 표시용
FG_loading.loadingAppendTo = '.player';
Object.extend(FG_loading.loadingBoxStyle, {
	height: 'auto',
	bottom: 0
});

Object.extend(FG_loading.loadingImageStyle, {
	position:'absolute'
});

var iMemUno = "326698840";
var iMemToken = "32669884068778.86";	//'크롬 부모창 종료 시 쿠키 삭제 현상 예외 처리 - 20140213 신성하
var isAdult = "false".toLowerCase();
var isMemStatus = "1";
var isLogin = "true".toLowerCase();
var isConf = "1";

//플레이어 설정(MusicPlayerCookie 쿠키에 저장)
var strStreamBit = "128";	//음질
var strFileType = "AAC";		//음질파일타입
var strVisualType = "Y";	//파형 사용 여부
var strLyricType = "Y";	//실시간 가사 사용 여부
var iRandomType = 0;		//0:순차, 1:랜덤
var iRepeatType = 0;		//0:반복없음, 1:전곡, 2:1곡
var	iRemoveVolume = 1;	//0:음소거, 1:정상
var	iVolumeLevel = 0.5;		//볼륨크기(0~1)
var	strSpeechAgree = 'N';
var	strAddType = '3';		//2: 현재곡 이어서 재생, 3:목록 마지막 추가
var iPlaySeq = 1;				//현재 재생 중인 곡의 재생목록 상의 순번

var iSmrsSeq = 0;              //음악나누기 공유 SEQ

var httpMuteMp3 = "https://web-hls.genie.co.kr/web/_definst_/check/mp3:mute.mp3/playlist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHZuIjoiIiwiYml0cmF0ZSI6IiIsImNhdCI6IjEiLCJjaWQiOiIiLCJkdXJhdGlvbiI6LTEsImV4cCI6MTY5MzQwNDU5MSwicGF0aCI6Ii93ZWIvX2RlZmluc3RfL2NoZWNrL21wMzptdXRlLm1wMyIsInBsYXlzdGFydCI6MCwic2lkIjoiIiwic3R5cGUiOiJmcyIsInN2YyI6IldCIiwidW5tIjoiIn0.ve9jBIAPvVhxwJFdopPKCoFkwe37qSuk5MT2ncaCJQs";      //HTML5 플레이어 세팅시 사용
var httpMuteM4a = "https://web-hls.genie.co.kr/web/_definst_/check/mute.m4a/playlist.m3u8?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHZuIjoiIiwiYml0cmF0ZSI6IiIsImNhdCI6IjEiLCJjaWQiOiIiLCJkdXJhdGlvbiI6LTEsImV4cCI6MTY5MzQwNDU5MSwicGF0aCI6Ii93ZWIvX2RlZmluc3RfL2NoZWNrL211dGUubTRhIiwicGxheXN0YXJ0IjowLCJzaWQiOiIiLCJzdHlwZSI6ImZzIiwic3ZjIjoiV0IiLCJ1bm0iOiIifQ.okXT1InxUXKdLXiIM2IgTMhBq8hBq9AZX01F1w3nrnw";      //HTML5 플레이어 세팅시 사용
var muteMp3Path = "/check/mute.mp3";      //RTMP 플레이어 세팅시 사용
var rtmpMuteMp3 = "rtmp://web-rtmp.genie.co.kr/rtmp/_definst_/mp3:check/mute.mp3?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHZuIjoiIiwiYml0cmF0ZSI6IiIsImNhdCI6IjEiLCJjaWQiOiIiLCJkdXJhdGlvbiI6LTEsImV4cCI6MTY5MzQwNDU5MSwicGF0aCI6Ii9ydG1wL19kZWZpbnN0Xy9tcDM6Y2hlY2svbXV0ZS5tcDMiLCJwbGF5c3RhcnQiOjAsInNpZCI6IiIsInN0eXBlIjoiZnMiLCJzdmMiOiJXQiIsInVubSI6IiJ9._W7opkwptNyPwpukRG08f7nG5qHSrsZ22HhEumHrbL4";      //RTMP 플레이어 세팅시 사용

var iNowPlayMode = 1;                   //재생 중 타입 | 1:일반, 2:공유재생
var strOnload = "N";                    //플레이어 팝업창 로딩 중인지 체크(N이면 로딩 완료)
var iPlayType = 1;    //1:일반재생, 2:앨범재생, 3:종량제공유 [곡공유,마이앨범공유는 재생목록에 추가]
var iAddType = 3;      //1: 바로듣기, 2:현재곡 이어서 재생, 3:목록추가

//cookie => localstrage 이전 처리
var isLSStreamList = false, //localstorage에 재생목록 데이터가 있었는지 구분(없었으면 쿠키를 읽어와서 localstorage로 옮기는 작업 수행됨)
	lsStreamList = null,    //localstorage에서 가져온 재생목록 데이터(JSON)
	strStreamList = '',     //쿠키에서 가져온 재생목록 데이터(SONG_ID 연결 문자열)
	lsSvcVer = 2.1,         //업데이트될 localstorage 재생목록 버전
	lsNowVer = 0.0,         //현재 서비스에서 사용 중인 localstorage 재생목록 버전(localstorage에서 읽어옴)
	isLSMsgShow = false;    //localstorage 미지원 안내 플레이어 사용 후 1회면 보여주기 위한 구분값

var strStreamList0, strStreamList1;

var LoadInterval, AutoPlayInterval;

if(genieStore.isLocalstorage) {
	strStreamList = genieStore.get('geniePlayerList');
    var transOk = FG_cookie.get('genie-player-transok');    //쿠키에서 localstorage로 전환되었는지 구분값(쿠키로 관리)

	if(!(/[0-9]/gi).test(strStreamList)) strStreamList = '';

	if(strStreamList == null || strStreamList == '' || typeof strStreamList == "undefined") {
        if(transOk == ''){ //쿠키에서 localstorage로 옮긴적 없는 경우
            strStreamList0 = FG_cookie.get('genie-player-list[0]');
            strStreamList1 = FG_cookie.get('genie-player-list[1]');

            strStreamList = (strStreamList0 == null || strStreamList0 == '' || typeof strStreamList0 == "undefined" ? "" : strStreamList0) +
                    		(strStreamList1 == null || strStreamList1 == '' || typeof strStreamList1 == "undefined" ? "" : strStreamList1);

            FG_cookie.set('genie-player-transok','Y', 1000);
        }
	} else {
		lsStreamList = JSON.parse(strStreamList);
		lsNowVer = genieStore.get('geniePlayVer');

		if(lsNowVer == null || lsNowVer == '' || typeof lsNowVer == "undefined") {
			lsNowVer = lsSvcVer;
		} else {
			lsNowVer = parseFloat(lsNowVer);
		}
		isLSStreamList = true;
	}

	genieStore.set("playerMode", "song");

} else {
	strStreamList0 = FG_cookie.get('genie-player-list[0]');
	strStreamList1 = FG_cookie.get('genie-player-list[1]');

	strStreamList = (strStreamList0 == null || strStreamList0 == '' || typeof strStreamList0 == "undefined" ? "" : strStreamList0) +
					(strStreamList1 == null || strStreamList1 == '' || typeof strStreamList1 == "undefined" ? "" : strStreamList1);

	FG_cookie.del('genie-player-transok');
}

//팝업창 리사이즈
resizeWindow(880, 900, 756);

//플레이어 컨트롤 세팅
var MusicPlayer = new MUSIC_PLAYER();

//화면 refresh하는 단축키 차단
shortcut.add("F5",function(event) {
	event.keyCode = 0;
    event.cancelBubble = true;
    event.returnValue = false;
	return false;
});
shortcut.add("Ctrl+R",function(event) {
	event.keyCode = 0;
    event.cancelBubble = true;
    event.returnValue = false;
	return false;
});

//단축키 매핑
$(document).keyup(function(e){
	if(!$('.my-album').is(':visible') && $(document.activeElement).parents('.list-wrap').size() == 0){
		var code = (e.keyCode ? e.keyCode : e.which);

		switch (code) {
			case 27:	//ESC
				if(confirm("genie player를 종료하시겠습니까")){
					window.self.close();
				}
				break;

			case 32:	//SPACE
				fnPlayOff();
				break;

			case 33:	//Page Up
				fnPalyStopAction(3,0);
				break;

			case 34:	//Page Down
				fnPalyStopAction(2,0);
				break;

			case 37:	//LEFT
				var seekSec = audioApi.video.time-5;
				audioApi.seek(seekSec < 0 ? 0 : seekSec);
				break;

			case 38:	//UP
				fnVolumeControl("up");
				break;

			case 39:	//RIGHT
				audioApi.seek(audioApi.video.time+5);
				break;

			case 40:	//DOWN
				fnVolumeControl("dn");
				break;

			case 48:	//0
				$('.btn-setting').trigger('click');
				break;

			case 49:	//1
				break;

			case 50:	//2
				location.href = '/mvPlayer/popMoviePlayerV2';
				break;

			case 55:	//7
				fnViewUserPop('326698840');
				break;

			case 56:	//8
				fnPlayerFAQ();
				break;

			case 57:	//9
				fnViewUseGuidePop();
				break;

			case 74:	//J
				$('.btn-playlist').trigger('click');
				break;

			case 75:	//K
				$('.btn-my-music').trigger('click');
				break;

			case 76:	//L
				if(isLogin == "false") {
					loginPopup();
				}
				break;

			case 77:	//M
				fnVolumeOff();
				break;

			case 88:	//X
				$('.fp-random').trigger('click');
				break;

			case 90:	//Z
				$('.fp-repeat').trigger('click');
				break;

			case 190:	//.
				$('.fp-lyrics').trigger('click');
				break;
		}
	}
});

//20140226 신성하 - 로그인 시 재생 중 곡 처음부터 다시 듣기
function fnCheckAutoPlay() {
	var sPlayerStatus = FG_cookie.get('genie-player-status');

	if ((sPlayerStatus != "") && (sPlayerStatus != "undefined") && (sPlayerStatus != "null")) {
		var bIsPlay, iLastPlayedIndex;
		bIsPlay = sPlayerStatus.split(':')[0];
		iLastPlayedIndex = sPlayerStatus.split(':')[1];

		if (bIsPlay.toLowerCase() == "true") {
            fnPlay(parseInt(iLastPlayedIndex));
		}

		fnDelPlayerStatus();
	}

	fnClearInterval(AutoPlayInterval);
}

window.addEventListener('beforeunload', function (e) {
	if(genieStore.isLocalstorage) genieStore.del("playerMode", "");
});


function fnPlayerFAQ() {
	var dForm = $('<form />', {
		'action':'/support/service/helpList',
		'target' :"genie_main",
		'method':'get',
		'name':'frmMoveData'
	}).html($('<input />',{
		'value':'7',
		'type':'hidden',
		'name':'ct'
	}));
	dForm.appendTo('body').trigger('submit');
}

function fnShowIssueLayer(id) {
	var chk = FG_cookie.get(id);

	if(typeof chk == 'undefined' || chk == '' || chk == null || chk != '1') {
		FG_layerPopup.show('#' + id);
	}
}

function fnHideIssueLayer(id) {
	if($('#' + id + '_chk').is(':checked')) {
		FG_cookie.set(id, '1', 10000);
	}

	FG_layerPopup.hide('#' + id);
}

function fnGoIssueFAQ(id) {
	var url = '';

	switch(id) {
		case 'flashIE8':	url = '/support/service/helpView?ct=7&fi=15&pg=2'; break;
		case 'trustedIE':	url = '/support/service/helpView?ct=7&fi=17&pg=2'; break;
		case 'updateEdge':	url = '/support/service/helpView?ct=7&fi=16&pg=2'; break;
	}

	if(url != '') {
		try {
			var _opener = getOpener();
			_opener.location.href = url;
		} catch(e) {
			window.open(url, 'genie_main');
		}

		if(id == 'flashIE8') {
			fnHideIssueLayer(id);
		} else {
			window.close();
		}

	}
}


function fnGoSyncList() {
	var dForm = $('<form />', {
		'action':'/myMusic/syncPlaylist',
		'target' :"genie_main",
		'method':'get',
		'name':'frmMoveData'
	});
	dForm.appendTo('body').trigger('submit');
}


//음성 명령 처리
var playerSpeech = null;

function fnSpeechToggle(val) {
	strSpeechAgree = val;

	if(strSpeechAgree == "Y") {
		playerSpeech.on();
		$('#rdo_chrome_1').prop('checked', true);
	} else {
		playerSpeech.off();
		$('#rdo_chrome_2').prop('checked', true);
	}

	fnSetPlayerCookie();
}

function fnIsSpeechAvail() {
	// return flowplayer.support.browser.chrome && location.protocol == 'https:';
	return false;
}

function fnGoPds() {
	var url = "https://www.genie.co.kr/support/service/pds";

	if(opener !== undefined) {
		opener.parent.location = url;
		window.close();
	} else {
		window.location.href = url;
	}
}

function fnClose() {
	window.close();
}

$(document).ready(function(){

	if (!ie11VerCheck()) {
		FG_layerPopup.show('#ie-expire-end');
	}

	$('.lyrics-mode').on("contextmenu dragstart selectstart",function(e){
		return false;
	});


	/*
	 * 플레이어 설정 세팅
	 */
	try {
		setStmAbusingCnt('200');
	} catch (e) {
		log.error("music_player_flow.js old version loaded");
	}

	//flowplayer 로딩
	flowplayerLoad();

	//재생목록 추가방식
	if(strAddType == "2") {
		$('#rdo_add_type_2').prop('checked', true);
	} else {
		$('#rdo_add_type_1').prop('checked', true);
	}

	//실시간 가사 지원
	if(strLyricType == "Y") {
		$('#rdo_lyrics_1').prop('checked', true);
	} else {
		$('#rdo_lyrics_2').prop('checked', true);
	}

	if(fnIsSpeechAvail()) {
		//크롬이면 보이스 컨트롤 추가
		$('#controlVoiceSet').show();

		//크롬이면 flac 음질 추가
		$('.select-quality ul.list').append(
			'<li>' +
			'	<button type="button" class="item" onclick="fnSetStreamBit(\'1000\',\'flac\');">flac</button>' +
			'</li>'
		);
	} else {
		$('#controlVoiceSet').hide();
	}

	fnSetStreamBit();

	//tab
	$('.btn-tab').on('click', function() {
		var obj = '.' + $(this).attr('data-set');

		if (obj == ".tab-my") {
			if (iMemUno == "") {
				alert("로그인 하셔야 이용 하실 수 있습니다!");
				return;
			}

			fnShowMyAlbum();
		}

		$('.tab, .btn-tab').removeClass('active');
		$(obj).add($(this)).addClass('active');
	});

	//sort
	if(genieStore.isLocalstorage) {
		$('.sort').on('click', '.item', function(e) {
			$(this).closest('.toggle-button-box').find('.btn').text($(this).text()).trigger('click');
		});
	} else {
		//쿠키에서는 정렬 기능 제공하지 않음
		$('#btnSort').hide();
	}

	if(iPlayType == 2) {
		fnGetAlbumList(strStreamList, iAddType);
	} else {
		if(iPlayType == 3) {
			fnGetSnsList(iSmrsSeq);
		}

		if(genieStore.isLocalstorage) {
			if(isLSStreamList) {
				//기존 사용 중인 localstorage 재생목록이 있을 경우
				fnGetDefaultPlayListArr(lsStreamList);
			} else {
				//기존 사용 중인 localstorage 재생목록이 없을 경우
				fnGetDefaultPlayList(strStreamList);
			}
		} else {
			//쿠키 재생목록일 경우
			fnGetDefaultPlayListCookie(strStreamList);
		}
	}

	LoadInterval = setInterval(fnCloseLoad, 500);//로드 레이어 제어

	//20140226 신성하 - 로그인 시 재생 중 곡 처음부터 다시 듣기
	AutoPlayInterval = setInterval(fnCheckAutoPlay, 1200);//로드 레이어 제어

	if(fnIsSpeechAvail()) {
		playerSpeech = new GENIE_SPEECH(['지니야', '진희야', '종료', '재생', '이전곡', '다음곡'], function(voice) {
			switch (voice) {
				case '정지':
					$('#cover_pola').istop();
					flowplayer(0).pause();
					$("#PlayBtnArea").removeClass("pause").addClass("play");
					break;

				case '재생':
					if ($('#MusicListArea div.list').hasClass('this-play')) {
						$('#cover_pola').istart();
						$("#PlayBtnArea").removeClass("play").addClass("pause");
						flowplayer(0).resume();
					} else {
						$('#cover_pola').istop();// imageviewer rolling stop
						$("#PlayBtnArea").removeClass("play").addClass("pause");

						if (iNowPlayMode == 1) {
							fnPlay(iPlaySeq);
						} else {
							fnPlayShare(iPlaySeqShare);
						}
					}
					break;

				case '이전곡':
					fnPalyStopAction(3, 0);
					break;

				case '다음곡':
					fnPalyStopAction(2, 0);
					break;
			}
		});

		if(playerSpeech.avail) {
			fnSpeechToggle(strSpeechAgree);
		} else {
			strSpeechAgree == "N";
		}
	}

	//TO-DO : 아래 소스 제거시 문제가 발생하지 않아 일단 주석 처리(적용시 오히려 디자인이 깨지고 있음)
	//firefox error
	// if(vendor == 'Moz') {
	// 	$('.cover_svg').attr('class','cover_svg moz');
	// }
});
</script>







<div class="radius my-album" id="my-album" songId="">
    <input type="hidden" name="songId" value="" />

    <h3 class="lyr-title">플레이리스트 담기</h3>
    <div class="ipt-wrap">
        <input type="input" id="newMyAlbumName" class="ipt placeholder" maxlength="30" value="" placeholder="새 플레이리스트"
               title="새 플레이리스트명 입력" onKeyPress="updateInputCount(this,30);" onKeyDown="updateInputCount(this,30);"
               onKeyUp="updateInputCount(this,30);" onChange="updateInputCount(this,30);"/>
        <button type="button" class="def-btn radius" id="newMyAlbum" onclick="return false;">확인</button>
    </div>

    <div class="list-basic">
        <ul class="my-scroll">
           
        </ul>
    </div>
</div>

<script src="/resources/commons/jscript/date_prototype.js?v=202302211400"></script>
<script type="text/javascript">

    $(document).ready(function () {

        $("#newMyAlbum").click(function () {
            fnSetNewMyAlbum($("#newMyAlbumName").val());
        });

        $("#my-album .list-basic .my-scroll").find(".item").children("#myAlbumAdd").each(function () {
            var $this = $(this);

            //alert($(this).index());
            $(this).bind({
                click: function () {
                    fnMyAlbumAdd($("#my-album").attr("songId"), $(this).attr("title"))
                    //fnSetMyAlbum($(this).attr("title"), $("#my-album").attr("songId"));
                    return false;

                }
            });
        });

    });


    function fnSearchCharNum(strValue, sChar) {

        var var_value = strValue;

        //alert ( var_value.indexOf( sChar));
        if (var_value.indexOf(sChar) == -1) {

            return 1;

        } else {

            var re = new RegExp(sChar, "ig");
            var resultArray = var_value.match(re);
            return resultArray.length + 1;
        }

    }

    function fnMakeMxlopths(iNum) {

        var vRtnString = "";
        for (var i = 0; i < iNum; i++) {
            if (vRtnString != "") {
                vRtnString = vRtnString + ";";
            }

            vRtnString = vRtnString + "W";
        }
        return vRtnString;

    }


    function fnMyAlbumAdd(songID, myAlbumID) {


        var vSongID = removeSongDuplicatedSong(songID);
        var vInputNum = fnSearchCharNum(vSongID, ';');
        var vMxlopths = fnMakeMxlopths(vInputNum);
        var vMxflags = vMxlopths.replace(/W/g, "1");

        if (iMemUno == "") {
            loginPopup();
            return false;
        }

        $.ajax({
            type: "POST",
            url: "/myMusic/jMyAlbumSongAdd",
            dataType: "json",
            data: {"mxnm": myAlbumID, "xgnms": vSongID, "mxlopths": vMxlopths, "mxflgs": vMxflags, "unm": iMemUno},

            success: function (responseData) {
                var retCode = responseData.Result.RetCode;
                var retMSG = responseData.Result.RetMsg;
                var retNoDataCnt = "0";
                var retOverlapCnt = "0";
                var retMaxChk = "false";

                if (retCode == 0) {
                    alert('플레이리스트에 노래가 추가되었습니다!');
                    fnMyAlbumClose();
                } else {
                    if (retCode == "M00002") {
                        retMSG = retMSG.replace("<br/>", "\n");
                        alert(retMSG);
                    } else {

                        retNoDataCnt = responseData.DATA0.NoDataCnt;
                        retOverlapCnt = responseData.DATA0.OverlapCnt;
                        retMaxChk = responseData.DATA0.MaxChk;

                        if (retNoDataCnt != "0") {
                            alert('올바른 플레이리스트 아이디가 아닙니다!');
                            return false;
                        }
                        if (retOverlapCnt != "0") {
                            alert('이미 플레이리스트에 등록된 노래입니다!');
                            $('div .toggle-button-box').removeClass('select-button');
                            return false;
                        }
                        if (retMaxChk == "True") {
                            alert('플레이리스트는 최대 1000곡 까지 가능합니다.\n다른 플레이리스트를 선택 하거나 새 플레이리스트 만들기를 해주세요.');
                            $('div .toggle-button-box').removeClass('select-button');
                            return false;
                        } else {
                            alert('플레이리스트에 노래 등록을 실패하였습니다.[' + retCode + ']');
                            return false;
                        }
                    }


                }
            }

        });


    }


    function fnMyAlbumClose() {
        $('#newMyAlbumName').val('');
        $('div .toggle-button-box').removeClass('select-button');
        $("#my-album").hide();
        FG_addMyAlbum._target = null;
        $('#my-album .list-basic .my-scroll').mCustomScrollbar('destroy');

    }

    //글자수 체크
    function updateInputCount(obj, maxLength) {
        var textLength = $(obj).val().length;

        if (textLength > maxLength) {
            alert('입력한 글자 수를 초과하였습니다.\n내용을 수정해 주세요.');
            $(obj).val($(obj).val().substring(0, maxLength));
        }
    }


    function fnSetNewMyAlbum(albumName) {

        var var_albumnm;
        var_albumnm = albumName;
        var_albumnm = $.trim(var_albumnm);

        if (iMemUno == "") {
            //alert("로그인 후 다운로드 가능합니다.");
            loginPopup();
            return false;
        }

        if (var_albumnm.length == 0) {
            var_albumnm = (new Date()).formatDate("yyyy-MM-dd hh:mm:ss");
            albumName = var_albumnm;
        }

        if (var_albumnm.length > 30) {
            alert('입력한 글자 수를 초과하였습니다.\n내용을 수정해 주세요.');
            $('#newMyAlbumName').focus();
            return;
        }

        if (fnCheckAlbumName(var_albumnm)) {
            alert("사용 불가능한 특수문자가 포함되었습니다.\n(사용 가능한 특수문자 32자 :\! \" \# \$ \% \& \' \( \) \* \+ \, \- \. \/ \: \; \< \= \> \? \@ \[ \\ \] \^ \_ \` \{ \| \} \~)");
            $('#newMyAlbumName').focus();
            return;
        }

        var x, o, e;

        $.ajax({
            type: "POST",   //Get방식으로 진행시 값전달 암됨//
            url: "/myMusic/jSetNewAlbum",
            dataType: "json",
            data: {"unm": iMemUno, "albumName": albumName},
            success: function (responseData) {

                var retCode = responseData.Result.RetCode;
                if (retCode == 0) {
                    fnGetMyAlbum();
                } else {
                    alert(responseData.Result.RetMsg);
                }
            }
            //,error: function(x, o, e){                alert('dd1'); alert(x.status + " : "+ o +" : "+e);}
        });
    }


    function fnGetMyAlbumObj(obj) {
        alert("a");
        if (iMemUno == "") {
            //alert("로그인 후 다운로드 가능합니다.");
            loginPopup();
            return false;
        } else {
            alert("a");
            $.ajax({
                type: "POST",
                url: "/myMusic/jGetMyAlbum", //Get방식으로 진행시 값전달 암됨//
                dataType: "json",
                async: false,
                data: {"unm": iMemUno},
                success: function (responseData) {
                    var retCode = responseData.Result.RetCode;
                    var totalCnt = responseData.Result.TotCount;
                    if (retCode == 0) {
                        $(".item").remove();
                        var myAlbumID, myAlbumTitle;
                        for (var i = 0; i < totalCnt; i++) {
                            myAlbumID = responseData.DATA[i].maId;
                            myAlbumTitle = decodeURIComponent(responseData.DATA[i].maTitle);
                            $("#my-album .list-basic .my-scroll").append("<li><a href='#' class='item' id='myAlbumAdd'  title='" + myAlbumID + "'><span class='title-album ellipsis'> "+ myAlbumTitle + "</span>"+'('+totalCnt+'곡)'+"</a></li>");
                            //$(".myAlbum").append("<li class='myAlbumItem'><a href='#' id='myAlbumAdd' title='" + myAlbumID + "'>" + myAlbumTitle + "</a></li>");
                        }

                        var pBtn = $(obj);
                        var offset1 = pBtn.offset();
                        var pLeft = offset1.left + 0;
                        var pTop = offset1.top + 27;

                        $("#my-album").attr("style", "display:block;");
                        $("#my-album").offset({top: pTop, left: pLeft});
                        //$('#my-album .my-scroll').attr("style","overflow:scroll;");
                        $('#my-album .list-basic .my-scroll').mCustomScrollbar({
                            scrollButtons: {
                                enable: true
                            }, theme: "dark-thin"
                        });


                        fnAddAlbumEvent();
                    } else {
                        //alert('Error'+ retCode );

                        var pBtn = $(obj);
                        var offset1 = pBtn.offset();
                        var pLeft = offset1.left + 0;
                        var pTop = offset1.top + 27;

                        $("#my-album").attr("style", "display:block;");
                        $("#my-album").offset({top: pTop, left: pLeft});
                        //$('#my-album .my-scroll').attr("style","overflow:scroll;");
                        $('#my-album .list-basic .my-scroll').mCustomScrollbar({
                            scrollButtons: {
                                enable: true
                            }, theme: "dark-thin"
                        });


                    }
                } /*,
                 error: function(x, o, e){ alert(x.status + " : "+ o +" : "+e);}    */

            });

        }


    }


    function fnGetMyAlbum() {
        if (iMemUno == "") {
            loginPopup();
            return false;

        } else {
            $.ajax({
                type: "POST",
                url: "/myMusic/jGetMyAlbum", //Get방식으로 진행시 값전달 암됨//
                dataType: "json",
                async: false,
                data: {"unm": iMemUno},
                success: function (responseData) {
                    var retCode = responseData.Result.RetCode;
                    var totalCnt = responseData.PageInfo.TotCount;

                    if (retCode == 0) {
	                    var myAlbumID, myAlbumTitle, myAlbumTagTitle, myAlbumTotal;
	                    var songIds = $('#my-album').attr('songId');

	                    if(songIds == '' || typeof songIds == 'undefined') {
							songIds = $("#my-album input[name='songId']").val();
                        }

	                    $("#my-album .item").remove();

                        for (var i = 0; i < totalCnt; i++) {
                            myAlbumID = responseData.DataSet.DATA[i].MA_ID;
                            myAlbumTitle = decodeURIComponent(responseData.DataSet.DATA[i].MA_TITLE);
                            myAlbumTagTitle = decodeURIComponent(responseData.DataSet.DATA[i].MA_TAGTITLE);
	                        myAlbumTotal = responseData.DataSet.DATA[i].MA_TOT_CNT;

                            $("#my-album .list-basic .my-scroll")
	                            .append(
	                                '<li>' +
		                            '   <a href="#" class="item" title="' + myAlbumTitle + '" onclick="fnMyAlbumAdd(\'' + songIds + '\', \'' + myAlbumID + '\'); return false;">' +
		                            '       <span class="title-album ellipsis"> '+ myAlbumTitle + '</span> (' + myAlbumTotal + ')곡' +
		                            '   </a>' +
		                            '</li>'
	                            );
                        }
                    } else {
                    }
                }
            });

        }
    }


    function removeSongDuplicatedSong(str) {


        var arr = str.split(";");
        var str = "";
        for (var i = 0; i < arr.length; i++) {
            if (str.indexOf(arr[i]) < 0) {

                if (str != "") {
                    str += ";";
                }

                str += arr[i];
            }
        }
        return str;
    }


    function fnTitleShort(sTitle) {

        var vTitle = sTitle;

        if (vTitle.length > 25) {

            vTitle = vTitle.substring(1, 24) + '...';

        }

        return vTitle;

    }

    function fnChkChar(iString) {

        var re = /[~!@\#$%^&*\()\-=+_'\"]/gi; //특수문자

        if (re.test(iString)) {

            return true;
        } else {
            return false;
        }


    }

    function fnAddAlbumEvent() {

        $(".myAlbum").find(".item").children("a").each(function () {
            var $this = $(this);

            $(this).bind({
                click: function () {

                    fnMyAlbumAdd($("#my-album").attr("songId"), $(this).attr("id").replace("myalbum_", ""))
                    //alert($(this).attr("title") + "/" + $("#my-album").attr("songId") + "\n플레이리스트에 저장하는 함수의 저장 JSON에 넘길 예정\n저장하는 프로그램 완성되면 이 메시지는 제거됩니다.");
                    return false;

                }
            });
        });


    }


    function fnShowMyAlbumForm(obj, list_wrap_name, list_name, songId_name, iTop, iLeft) {
        if (iMemUno == "") {
            fnMyAlbumClose();
            //alert("로그인 후 다운로드 가능합니다.");
            loginPopup();
            return false;
        } else {


            //곡 리스트에서 해당 SongID 추출 부분 //
            selectArrSongID = "";
            var s = 0;

            $("." + list_wrap_name).find("." + list_name).each(function () {
                if (selectArrSongID != "") {
                    selectArrSongID = selectArrSongID + ";";
                }
                selectArrSongID = selectArrSongID + $("." + list_wrap_name).find("." + list_name).eq(s).attr(songId_name);
                s += 1;
            });


            if (s == 0) {
                alert('최소한 1개이상 곡을 선택하세요.');
                return false;
            }

            fnGetMyAlbum();

            $("#my-album").attr(songId_name, selectArrSongID.replace(/ /gi, ''));

            var pBtn = $(obj);
            var offset1 = pBtn.offset();
            var pLeft = offset1.left + iTop;
            var pTop = offset1.top + iLeft;


            $("#my-album").attr("style", "display:block;");
            $("#my-album").offset({top: pTop, left: pLeft});
            $('#my-album .list-basic .my-scroll').mCustomScrollbar({
                scrollButtons: {
                    enable: true
                }, theme: "dark-thin"
            });


            return false;

        }
    }


    function fnShowMyAlbumCommon(obj, SongIds, iTop, iLeft) {

        //alert('onclick_function!');

        if (iMemUno == "") {
            fnMyAlbumClose();
            //alert("로그인 후 다운로드 가능합니다.");
            loginPopup();
            return false;
        } else {


            if (SongIds == "") {
                alert('최소한 1개이상 곡을 선택하세요.');
                return false;
            }

            fnGetMyAlbum();

            //$("#my-album").attr( songId_name , SongIds.replace(/ /gi, ''));

            var pBtn = $(obj);
            var offset1 = pBtn.offset();
            var pLeft = offset1.left + iTop;
            var pTop = offset1.top + iLeft;

            $("#my-album").attr("style", "display:block;");
            $("#my-album").offset({top: pTop, left: pLeft});
            $('#my-album .list-basic .my-scroll').mCustomScrollbar({
                scrollButtons: {
                    enable: true
                }, theme: "dark-thin"
            });

            return false;

        }

    }

	$.fn.hasAttr = function(name) {
		return this.attr(name) !== undefined;
	};

	function fnAddMyAlbumForm(obj, arrSongID, iTop, iLeft, iHeight) {
		if (iMemUno == "") {
			fnMyAlbumClose();
			loginPopup();
			return false;
		} else {

			if (arrSongID == "") {
				alert('선택된 곡이 없습니다.');
				return false;
			}

			var albumLayerObj = $("#my-album");
			if(albumLayerObj.css('display') == 'block') {
				albumLayerObj.hide();
				return false;
			} else {

				$(document).mouseup(function (e) {
					var container = albumLayerObj;
					var clickobj = e.target;
					if(!container.is(e.target) && container.has(e.target).length === 0 && !$(clickobj).hasAttr('songid')){
						container.hide();
						return false;
					}
				});
			}

			$('#newMyAlbumName').val('');
			albumLayerObj.hide();
			FG_addMyAlbum._target = null;
			$('.list-basic .my-scroll', albumLayerObj).mCustomScrollbar('destroy');

			albumLayerObj.attr("songId", arrSongID);
			$("input[name='songId']", albumLayerObj).val(arrSongID);

			fnGetMyAlbum();

			var pBtn = $(obj);
			var offset1 = pBtn.offset();
			var pLeft = offset1.left + iTop;
			var pTop = offset1.top + iLeft;

			albumLayerObj.show();
			albumLayerObj.offset({top: pTop, left: pLeft});

			if(typeof iHeight != "undefined" && iHeight != null && iHeight != "") {
				albumLayerObj.css({"height": iHeight});
			}

			$('.list-basic .my-scroll', albumLayerObj).mCustomScrollbar({
				scrollButtons: {
					enable: true
				}, theme: "dark-thin"
			});

			return false;
		}
	}


    function fnCheckAlbumName(str) {
        var ptn = new RegExp();
        ptn = /[^A-Za-z0-9가-힣ㄱ-ㅎㅏ-ㅣ\s\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~]/gi;
        return ptn.test(str);
    }

</script>





<!-- LOGGER SCRIPT FOR SETTING ENVIRONMENT V.27 :  / FILL THE VALUE TO SET. -->
<!-- COPYRIGHT (C) 2002-2013 BIZSPRING INC. LOGGER(TM) ALL RIGHTS RESERVED. -->
<script type="text/javascript">
function _trk_getAge(age){var thisAge = parseInt(age);var returnAge;if (thisAge > 0 && thisAge < 10){ returnAge = "A";}else if(thisAge > 9 && thisAge < 20){returnAge = "B";}else if(thisAge > 19 && thisAge < 30){returnAge = "C";}else if(thisAge > 29 && thisAge < 40){returnAge = "D";}else if(thisAge > 39 && thisAge < 50){returnAge = "E";}else if(thisAge > 49 && thisAge < 60){returnAge = "F";}else{returnAge = "G";}return returnAge;}
function _trk_getGnd(gnd){var returnGnd = parseInt(gnd);if(returnGnd == 1){returnGnd = "M";}else if(returnGnd == 2){returnGnd = "F";}else{returnGnd = "U";}return returnGnd;}

/* FOR BIZ., COM. AND ENT. SERVICE. */
_TRK_CP = "/player/fPlayer"; /* Contents Path */
_TRK_PI = ""; /* Page Identity */
_TRK_PN = ""; /* Product Name */
_TRK_MF = ""; /* Manufacture Name */
_TRK_OA = ""; /* Order Amount(s) with ';' Separated */
_TRK_OP = ""; /* Order Product(s) with ';' Separated */
_TRK_OE = ""; /* Order EA with ';' Separated */
_TRK_CC = ""; /* Campaign Code */
_TRK_RK = "326698840"; /* Reserved Key */
_TRK_SX = _trk_getGnd("0"); /* Members Gender - M,F,U */
_TRK_AG = _trk_getAge(""); /* Member Age - A,B,C,D,E,F,G */
_TRK_IK = ""; /* Inner Search Keyword */
_TRK_U  = "55937";
</script>
<!-- END OF ENVIRONMENT SCRIPT -->
<!-- LOGGER TRACKING SCRIPT V.40 FOR logger.co.kr / 41825 : COMBINE TYPE / DO NOT ALTER THIS SCRIPT. -->
<!-- COPYRIGHT (C) 2002-2014 BIZSPRING INC. LOGGER(TM) ALL RIGHTS RESERVED. -->
<script type="text/javascript">var _TRK_LID="41825";var _L_TD="ssl.logger.co.kr";var _TRK_CDMN=".genie.co.kr";</script>
<script type="text/javascript">var _CDN_DOMAIN = location.protocol == "https:" ? "https://fs.bizspring.net" : "http://fs.bizspring.net";document.write(unescape("%3Cscript src='" + _CDN_DOMAIN +"/fs4/bstrk.1.js' type='text/javascript'%3E%3C/script%3E"));</script>
<noscript><img alt="Logger Script" width="1" height="1" src="http://ssl.logger.co.kr/tracker.tsp?u=41825&amp;js=N" /></noscript>
<!-- END OF LOGGER TRACKING SCRIPT -->

</body>
</html>
