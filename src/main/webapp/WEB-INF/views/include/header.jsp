<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="kjj" value="${pageContext.request.contextPath }" />
<%@ page session="true" %> 
<!DOCTYPE html>
<html lang="ko">
<head>
	
<c:set var="user" value="${sessionScope.user}" />

<%-- user 값 사용 --%>
<c:if test="${not empty user}">
</c:if>



<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--[if lte IE 6]><html dir="ltr" class="no-js ie6"><![endif]-->
<!--[if lte IE 7]><html dir="ltr" class="no-js ie7"><![endif]-->
<!--[if IE 8]><html dir="ltr" class="no-js ie8"><![endif]-->
<!--[if IE 9]><html dir="ltr" class="no-js ie9"><![endif]-->
<!--[if (gte IE 10)|!(IE)]><!--><html dir="ltr" class="no-js"><!--<![endif]-->
<title>Cushion:지금만큼은 편하게,쿠션</title>
<meta charset="utf-8" />
<meta name="naver-site-verification" content="d17289f97c7f294985a9b0eb3649a45ac5ceeee2"/>
<meta name="google-site-verification" content="-l7MNwwsDcn29Pnu00OagSrpDUPbjqLYoY08rhXLde8" />

<meta name="description" content="가격은 가볍게, 추천은 확실하게! 최저가로 즐기는 프리미어 사운드! 국내 최초 실시간 TOP 200 차트" />
<meta name="viewport" content="width=1200" />
<meta property="og:url" content=""/>
<meta property="og:type" content="website">
<meta property="og:image" content="http://image.genie.co.kr"/>

<meta property="og:image:secure_url" content="https://image.genie.co.kr" />
<meta property="og:title" content="Cushion:지금만큼은 편하게,쿠션"/>
<meta property="og:description" content="AI기반 감성 음악 추천"/>
<meta property="fb:app_id" content="458810570822272" />

<script type ="text/javascript">
    window.name = "genie_main";
</script>


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

<link rel="icon" href="${kjj}/resources/img/Logo/images.png">
<link rel="stylesheet" href="${kjj}/resources/commons/style/basic.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/parent.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/list.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/no_js.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/popup.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/payment.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/bxter.css" />

<link rel="stylesheet" href="${kjj}/resources/commons/style/tv.css" />

<link rel="stylesheet" href="${kjj}/resources/commons/style/main.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/jquery.bxslider.css" />
<script src="${kjj}/resources/commons/jscript/jquery.bxslider.js"></script>
<script src="${kjj}/resources/commons/jscript/playlist_common.js"></script>

<script type="text/javascript">
$("document").ready(function() {
    document.title = "Cushion:지금만큼은 편하게,쿠션";
});
</script>


</head>


<body class="">


<!-- inc/gnb.asp -->
<div id="wrap-head" class="" style="z-index: 90;">
	<div class="hd-top clearfix">
		<div class="payment-wrap">
			<a href="${kjj}/board/ticketPurchase" class="btn-purchase text-bold">이용권 구매</a>
			
		</div>
		<div class="payment-wrap player-wrap">
			<a href="#" class="web_player" onclick="fnPlaySongQuick(); return false;">웹플레이어</a>
			<a href="${kjj}/board/Pageerror">PC플레이어</a>
			<a href="${kjj}/board/Pageerror">쿠션앱</a>
		</div>
	</div>

<div class="search-wrap">
		<h1 class="logo"><a href="${kjj}">Cushion 홈으로 가기</a></h1>
		<form class="hd-search clearfix" id="frmGNB" name="frmGNB" action="/search/searchMain" method="get" onsubmit="return fnGoSearch(this);">
			<input type="hidden" id="hdQuery" name="query"/>
			<input id="hdSearchType" type="hidden" value=""/>
			<input id="hdSearchID" type="hidden" value=""/>
			<fieldset>
				<legend>검색</legend>
				<label for="sc-fd" class="hide">검색어</label>
				<input type="text" autofocus="true" class="hide" />
				<input type="search" id="sc-fd" class="ipt-search placeholder" maxlength="200" autocomplete="off" onclick="showAutoComplete('popular');" placeholder="누그러진 햇살 아래 몰입의 즐거움 🎧"/>
				
				
				
				 <div class="auto_complete" style="display: none;">
            <div class="search-result popular active"></div>
            <div class="search-recommend">
            <div class="list-search popular active">
            <h3 class="tab"><button type="button" onclick="showAutoComplete('popular');" >인기검색어 </button></h3>
            <div class="list"><ol><li data-title="악동뮤지션"><a href="#" onclick="fnGoSearchKeyword('악동뮤지션');return false;">악동뮤지션</a>
            <span class="rank">
            <span class="rank-none">-<span class="hide">유지</span>
            </span>
            </span>
            </li>
            <li data-title="다이나믹듀오"><a href="#" onclick="fnGoSearchKeyword('다이나믹듀오');return false;">다이나믹듀오</a>
            <span class="rank"><span class="rank-none">-<span class="hide">유지</span>
            </span>
            </span>
            </li>
            <li data-title="i love you">
            <a href="#" onclick="fnGoSearchKeyword('i love you');return false;">i love you</a>
            <span class="rank">
            <span class="rank-up">1<span class="hide">상승</span>
            </span>
            </span>
            </li>
            <li data-title="악뮤">
            <a href="#" onclick="fnGoSearchKeyword('악뮤');return false;">악뮤</a>
            <span class="rank"><span class="rank-down">1<span class="hide">하강</span>
            </span>
            </span>
            </li>
            <li data-title="스우파">
            <a href="#" onclick="fnGoSearchKeyword('스우파');return false;">스우파</a>
            <span class="rank"><span class="rank-none">-<span class="hide">유지</span></span></span></li>
            <li data-title="잔나비"><a href="#" onclick="fnGoSearchKeyword('잔나비');return false;">잔나비</a>
            <span class="rank"><span class="rank-none">-<span class="hide">유지</span></span></span></li>
            <li data-title="잘 지내자, 우리"><a href="#" onclick="fnGoSearchKeyword('잘 지내자, 우리');return false;">잘 지내자, 우리</a>
            <span class="rank"><span class="rank-none">-<span class="hide">유지</span></span></span></li>
            <li data-title="아이유"><a href="#" onclick="fnGoSearchKeyword('아이유');return false;">아이유</a>
            <span class="rank"><span class="rank-up">1<span class="hide">상승</span></span></span></li>
            <li data-title="다이나믹 듀오 (feat. 넉살)"><a href="#" onclick="fnGoSearchKeyword('다이나믹 듀오 (feat. 넉살)');return false;">다이나믹 듀오 (feat. 넉살)</a>
            <span class="rank"><span class="rank-new">new<span class="hide">new</span></span></span></li>
            <li data-title="최유리"><a href="#" onclick="fnGoSearchKeyword('최유리');return false;">최유리</a>
            <span class="rank"><span class="rank-none">-<span class="hide">유지</span></span></span></li></ol>
            <div class="btns clearfix"> <button type="button" class="close" onclick="hideAutoComplete();">닫기</button>
            </div></div></div>
            <div class="list-search recent"><h3 class="tab">
				<button type="button" onclick="showAutoComplete('recent');">최근검색어</button>
				</h3>
				<div class="list"><p class="no-data">최근 검색어가 없습니다.</p>
				<div class="btns clearfix"><button type="button" class="btn-delete">최근검색어 전체삭제</button>
				 <button type="button" class="close" onclick="hideAutoComplete();">닫기</button>
				 </div></div></div></div></div>
				
				
				
				
				<input type="submit" class="btn-submit" value="검색" />
			</fieldset>
		</form>
	</div>
	
<script>
//검색어 마우스 이벤트 리스너를 추가
    var activeTab = 'popular'; 
    
    function showAutoComplete(tab) {
        var popularTab = document.querySelector(".list-search.popular");
        var recentTab = document.querySelector(".list-search.recent");
        var autoComplete = document.querySelector(".auto_complete");
        
        if (tab !== activeTab) {
            activeTab = tab;
            
            if (tab === 'popular') {
                popularTab.classList.add('active');
                recentTab.classList.remove('active');
            } else if (tab === 'recent') {
                popularTab.classList.remove('active');
                recentTab.classList.add('active');
            }
            
        }
        
        autoComplete.style.display = "block";
        
        document.addEventListener("click", function(event) {
            if (!autoComplete.contains(event.target) && event.target !== document.getElementById("sc-fd")) {
                hideAutoComplete();
            }
        });
    }
    
    function hideAutoComplete() {
        var autoComplete = document.querySelector(".auto_complete");
        autoComplete.style.display = "none";
    }
</script>

<script>
//메뉴 아이템에 마우스 이벤트 리스너를 추가하여 서브 메뉴를 보여주는 동작을 구현
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#gnb .menu > li");

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener("mouseenter", function () {
            const subMenu = this.querySelector(".sub_menu");
            if (subMenu) {
                subMenu.style.display = "block";
            }
        });

        menuItem.addEventListener("mouseleave", function () {
            const subMenu = this.querySelector(".sub_menu");
            if (subMenu) {
                subMenu.style.display = "none";
            }
        });
    });
});
</script>

	<div class="gnb" id="gnb">
		<ul class="menu clearfix">
			<li>
				<a href="${kjj}/board/Toplist" class="gnb-menu">쿠션차트</a>
				<div class="sub_menu">
					<ul class="bd">
						<li><a href="${kjj}/board/Toplist">TOP100</a></li>
						<li><a href="/chart/genre">장르별 차트</a></li>
					</ul>
				</div>
			</li>
			<li>
				<a href="/newest/song" class="gnb-menu">최신음악</a>
				<div class="sub_menu">
					<ul class="bd">
						<li><a href="/newest/song">최신 곡</a></li>
						<li><a href="/newest/album">최신 앨범</a></li>
<!-- 						<li><a href="/newest/musicVideo">뮤직비디오</a></li> -->
					</ul>
				</div>
			</li>
			<li>
				<a href="/genre/M0100" class="gnb-menu">장르음악</a>
				<div class="sub_menu">
					<ul class="bd">
						<li><a href="/genre/M0100">가요</a></li>
						<li><a href="/genre/M0300">OST</a></li>
					</ul>
				</div>
			</li>

		</ul>
		<div class="gnb-my">
		

			<c:if test="${empty user}">
				<div class="toggle-button-box login-box">
					<button type="button" class="btn">로그인/회원가입</button>
					<div class="list">
						<div class="login-form">
							<a href="#" class="btn-login" title="새창 열림" onclick="loginPopup(); return false;"><span class="txt"><span class="hide">Cushion</span>Cushion 로그인</span></a>
							<div class="btns clearfix">
								<span class="find-account">
									<a href="//member.genie.co.kr/account/find/confirm-id?svc=W">아이디 찾기</a>
									<a href="//member.genie.co.kr/account/find/confirm-pw?svc=W">비밀번호 찾기</a>
								</span>
								<a href="${kjj}/board/Joinview" class="text-bold" style="float: right">회원가입</a>
							</div>
						</div>
						<ul class="list-login">
							<li><a href="#" class="btn-kakao" onclick="openPopup('https://kauth.kakao.com/oauth/authorize?client_id=bb0b3857071f6812cd2383f2d98d37e9&redirect_uri=http://localhost:8080/dong/board/KakaoCallBack&response_type=code', 'kakaoLoginPopup', 600, 400)">카카오 로그인</a></li>
							<li><a href="#" class="btn-apple" onclick="openPopup('https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=fKDlEbi3HnF8AtPDqPJc&state=hLiDdL2uhPtsftcU&redirect_uri=http://localhost:8080/dong/board/CallBack', 'kakaoLoginPopup', 600, 400)">네이버 로그인</a></li>
							
						</ul>
						<button type="button" class="btn-close close">닫기</button>
					</div>
				</div>
				</c:if>
				
				<c:if test="${not empty user}">
				
							<div class="toggle-button-box">
					<button type="button" class="btn" onclick="getMyProductInfo(this);">

										
								${user.nickname}
										
					</button>
					<div class="list">

						<div id="gpoint" style="display: none">
							<dl class="cash-info text-bold clearfix">
								<dt>g포인트 <a href="/buy/gPoint" class="btn-charge">더보기 &gt;</a></dt>
								<dd class="text-blue gpoint_hide">0 포인트</dd>
							</dl>
						</div>

						<h3 class="title-info" id="usingProduct">
							<a href="/member/product/myProductList" class="text-bold">이용중인 상품 남은기간</a>
							<span class="total">-일</span>
						</h3>

						<c:if test="${user.ticketpe == 0}">
						<div id="noUsingProduct">
						
							<p class="no-data">사용중인 이용권이 없습니다.</p>
							<ul class="info">
								<li><a href="/buy/recommend"><span class="icon-type">추천</span> 6개월 초특가 할인!</a></li>
								<li><a href="/buy/recommend"><span class="icon-type">추천</span> 데이터 소모 없이 무제한 음악감상!</a></li>
							</ul>
						</div>
						</c:if>
						<div id="usingProductDetail" style="display: none;">
							<ul class="info">

							</ul>
						</div>

						

						<div class="more-btns">
							
								
									<a href="#" onclick="fnChkPwd('/member/info/myInfoMod'); return false;">내정보</a>
								
								
							
							<a href="/buy/recommend">이용권 구매</a>
							<a href="/buy/registCoupon">상품권 등록</a>
							<a href="${kjj}/board/logOut" class="btn-logout text-bold" >로그아웃</a>
							
						</div>
						
						<c:if test="${empty user.naver_id}">
						
						<ul class="list-login">
							<li><a href="#" class="btn-kakao" onclick="openPopup('https://kauth.kakao.com/oauth/authorize?client_id=bb0b3857071f6812cd2383f2d98d37e9&redirect_uri=http://localhost:8080/dong/board/KakaoCallBack&response_type=code', 'kakaoLoginPopup', 600, 400)">카카오 로그인</a></li>
							<li><a href="#" class="btn-apple" onclick="openPopup('https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=fKDlEbi3HnF8AtPDqPJc&state=hLiDdL2uhPtsftcU&redirect_uri=http://localhost:8080/dong/board/CallBack', 'kakaoLoginPopup', 600, 400)">네이버 연동하기</a></li>
							
						</ul>
						
						</c:if>
						
					</div>
				</div>
				
				<div class="toggle-button-box">
					<button type="button" class="btn" onclick="getMyMusicInfo(this);">마이뮤직</button>
					<div class="list">
						<h3 class="title-info" id="myAlbum"><a href="/myMusic/myMusicPlayList" class="text-bold">플레이리스트</a></h3>
						<span class="loading"><img src="//image.genie.co.kr/imageg/web/common/loading.gif" alt="로딩중"></span>

						<div id="noMyAlbum">
							<p class="no-data">
							아직 플레이리스트가 없어요.
							<span class="guide">곡 리스트의 음악 담기를 통해, 나만의 플레이리스트를 만들어 보세요.</span>
							</p>
						</div>
						<div id="myAlbumDetail">
							<ul class="info col-2">

							</ul>
						</div>
						<h3 class="title-info" id="recentMusic"><a href="/myMusic/myPlaylist?category=R
" class="text-bold">최근 감상 곡</a></h3>
						<span class="loading"><img src="//image.genie.co.kr/imageg/web/common/loading.gif" alt="로딩중"></span>

						<div id="noRecentMusic">
							<p class="no-data">최근 감상한 곡이 없습니다.</p>
						</div>
						<div id="recentMusicDetail">
							<ul class="info col-2 info-listen">

							</ul>
						</div>

						<div class="more-btns">
							<a href="/myMusic/purchaseListMP3">MP3보관함</a>
							<a href="/myMusic/likeSong?mltp=song">나의 좋아요</a>
							<a href="/myMusic/syncPlaylist">동기화 재생목록</a>
						</div>
					</div>
				</div>
			
		<a href="/myMusic" class="btn-profile"><img src="${user.profile}" alt="sada2knuy님" onerror="this.src='//image.genie.co.kr/imageg/web/common/default_profile.png';"></a>
		</c:if>
		
		</div>
	</div>
</div>


    <script>
        // 링크를 팝업으로 열기 위한 함수
        function openPopup(url, name, width, height) {
            var left = (screen.width - width) / 2;
            var top = (screen.height - height) / 2;
            var options = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
            window.open(url, name, options);
       
        }        
		
		        
        function loginPopup() {
            PopupCenter("${kjj}/board/Loginview", "popLoginSecure", 470, 382);
        }
        

    </script>
    
    
    
    