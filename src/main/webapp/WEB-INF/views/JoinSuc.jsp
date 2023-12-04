<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="kjj" value="${pageContext.request.contextPath }" />
<%@ page session="true" %> 
<!DOCTYPE html>
<html lang="ko">
<head>
	<!-- bgsw-sec-t1931 -->
	<meta charset="UTF-8" />
	<title>회원가입</title>
	<meta http-equiv="Cache-Control" content="no-cache" />
	<meta http-equiv="Pragma" content="no-cache" />
	<meta http-equiv="Expires" content="0" />

		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		
<link rel="icon" href="${kjj}/resources/img/Logo/images.png">

<link rel="stylesheet" href="${kjj}/resources/commons/loginstyle/jscrollpane.css" media="all">
<link rel="stylesheet" href="${kjj}/resources/commons/loginstyle/jquery-ui.css" media="all">	
<link rel="stylesheet" href="${kjj}/resources/commons/loginstyle/wbugs.css">
<link rel="stylesheet" href="${kjj}/resources/commons/loginstyle/fonts.css" type="text/css">

</head>


    <c:forEach items="${JoinSuc}" var="member">
         <c:set var="nickname" value="${member.nickname}" scope="request" />
         <c:set var="email" value="${member.email}" scope="request" />
         <c:set var="domain" value="${member.domain}" scope="request" />
         
</c:forEach>

<body class="">
	<div id="wrap" class="wrapMembers">


		

<article class="mnMembers pgJoinComplete">
<header class="pgHeader">
	<a href="${kjj}" class="logo">Cushion</a>
    <h1>회원가입 완료</h1>
</header>

<form>
    <p class="message">
        <em class="id">
            <span class="icon email">별명</span>
        ${nickname} (${email}@${domain})  님</em>

        <strong>회원가입이 완료되었습니다!</strong>
        <span> 쿠션:: 언제 어디서나 자유롭게 음악을 감상하세요.

        </span>
    </p>

    <aside class="banners">
        <!-- banner size: 458 x 130 -->
        <!-- 사업팀 상단 배너 -->
			<a href="https://music.bugs.co.kr/pay/recommend" target="_blank" class="banner"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc1BOOS%2FbtssLGGfWdQ%2FdrwQmzfDx25V8nLABHK35k%2Fimg.png" alt="쿠션에만 있는 다양한 이용권 혜택 평생 할인부터 제휴 할인까지! - 할인 받으러 가기" /></a>

			<!-- 벅스 서비스 가이드 하단 배너 -->
			<a href="https://music.bugs.co.kr/serviceGuide/home" target="_blank" class="banner"><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Ftyq2W%2FbtssN3U52oy%2F7KQ1VBGCPR8nkruUh4K3eK%2Fimg.png" alt="모든 플랫폼에 최적화된 벅스와 함께 즐거운 음악 생활 - 이용 꿀팁 보러 가기" /></a>
		</aside>

		<div class="btns">
					<a href="${kjj}" class="btn btnJoin">확인</a>
		</div>
	</form>
</article>


<footer id="footer">
	<div class="copyright">
		© NHN Bugs Corp. All rights reserved.
	</div>
</footer>

	</div>
	<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
	<script type="text/javascript">
    try {
    if (!wcs_add) var wcs_add={};
    wcs_add["wa"] = "s_595467f7a42";
    if (!_nasa) var _nasa={};
    wcs.inflow("bugs.co.kr");
    wcs_do(_nasa);
    } catch (e) {}
  </script></body>

</html>
