<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="kjj" value="${pageContext.request.contextPath }" />
<%@ page session="true" %>
<!DOCTYPE html>

<html lang="en">
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
    window.name = "Cushion_main";
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
<script src="${kjj}/resources/commons/jscript/genie.custom.js1"></script>


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

<link rel="stylesheet" href="${kjj}/resources/commons/style/tv.css" />

<link rel="stylesheet" href="${kjj}/resources/commons/style/main.css" />
<link rel="stylesheet" href="${kjj}/resources/commons/style/jquery.bxslider.css" />
<script src="${kjj}/resources/commons/jscript/jquery.bxslider.js"></script>
<script src="${kjj}/resources/commons/jscript/playlist_common.js"></script>

</head>


<style>

</style>
<body id="PopBody" class="pop-win">


<script type="text/javascript">
    var _rfr = "http://localhost:8080/dong/";
    window.name = "popLoginSecure";
</script>

<style>
	body{background:#fafafa;}
</style>


<body class="pop-win">
<div class="pop-wrap pop-secure" id="login-def">
	<h1>Cushion 로그인</h1>
	<div class="login-form">
		<fieldset>
			<legend>로그인</legend>


		<!-- 	<form name="f_login_layer" id="f_login_layer" action="login0" method="post"> -->
				<input type="hidden" name="gnb_mh" id="gnb_mh" value="" />
				<div class="ipt-wrap">
					<label for="gnb_uxd" class="hide">아이디</label>
					<input type="text" id="id" name="id" class="ipt-basic no-border placeholder"  placeholder="아이디" style="ime-mode:disabled;" title="아이디를 입력하세요" />
				</div>
				<div class="ipt-wrap">
					<label for="gnb_uxx" class="hide">비밀번호</label>
					<input type="password" id="pw" name="pw" class="ipt-basic placeholder" placeholder="비밀번호" title="비밀번호를 입력하세요"/>
				</div>
					<input type="submit" class="btn-submit" id="loginbutton" onclick="loginbutton()" value="로그인" />	
				<div id="signinMessage" class="message type_error" style="display: none;">잘못된 아이디 또는 비밀번호를 입력하셨습니다.</div>
				<div id="dormantMessage" class="message type_error" style="display: none;">휴면계정인 아이디입니다.</div>

			<div class="chk-wrap"><input type="checkbox" id="main_uxglk"><label for="main_uxglk">로그인 상태 유지</label></div>
			<div class="lyr-caution" id="chk_long_layer">
				개인정보 보호를 위해<br /><strong>개인 PC에서만 사용해 주세요.</strong>
				<a href="" class="btn-help"onclick="fnGoHelpPage(); return false;">도움말 보기 &gt;</a>
				<button type="button" class="close" onclick="$('#chk_long_layer').hide();return false;">닫기</button>
			</div>
		</fieldset>
		<div class="btns clearfix">
			<span class="find-account">
				<a href="#" >아이디 찾기</a>
				<a href="#" >비밀번호 찾기</a>
			</span>
			<a href="${kjj}/board/Joinview" class="text-bold" style="float: right" onclick="closePopupAndLoadLink('${kjj}/board/Joinview'); return false;">회원가입</a>
		</div>
	</div>
	<ul class="list-login">
<li><a href="#" class="btn-kakao" onclick="openPopup('https://kauth.kakao.com/oauth/authorize?client_id=bb0b3857071f6812cd2383f2d98d37e9&redirect_uri=http://localhost:8080/dong/&response_type=code', 'kakaoLoginPopup', 600, 400)">카카오 로그인</a></li>
<li><a href="#" class="btn-naver" onclick="openPopup('https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=fKDlEbi3HnF8AtPDqPJc&state=hLiDdL2uhPtsftcU&redirect_uri=http://localhost:8080/dong/', 'kakaoLoginPopup', 600, 400)">네이버 로그인</a></li>
							
		
	</ul>
</div>


<script type="text/javascript">
    function closePopupAndLoadLink(url) {
        window.close(); 
        window.opener.location.href = url; 
    }
</script>

    <script>
        // 링크를 팝업으로 열기 위한 함수
        function openPopup(url, name, width, height) {
            var left = (screen.width - width) / 2;
            var top = (screen.height - height) / 2;
            var options = 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
            window.open(url, name, options);
        }
    </script>
    
<script>
function loginbutton() {
    var id = document.getElementById("id").value;
    var pw = document.getElementById("pw").value;

    console.log(id);
    console.log(pw);

    $.ajax({
        type: "POST",
        url: "login",
        data: {
            id: id,
            pw: pw
        },
        success: function(response) {
            if (response.loginCheck === 0) {
                $("#signinMessage").show(); 
                $("#dormantMessage").hide(); 
            } else if (response.loginCheck === 2) {
                $("#signinMessage").hide(); 
                $("#dormantMessage").show(); 
            } else if (response.loginCheck === 1) {
            	
                // 부모 창 새로고침
                if (window.opener) {
                    window.opener.location.reload();
                }
                // 현재 팝업 닫기
                window.close();
            }
        },
        error: function() {
            alert("오류가 발생했습니다.");
        }
    });
}
</script>
    



</body>
</html>


