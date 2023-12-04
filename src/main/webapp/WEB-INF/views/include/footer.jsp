<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<%@ page session="true" %>
<!DOCTYPE html>

<html lang="en">
<div id="wrap-foot" class="footer">
	<div class="ft-head clearfix">
		<div class="notice">
			<h3><a href="//www.genie.co.kr/support/service/notice">공지사항</a></h3>
			<div class="scrollable" id="footer-notice">
				<span><a href='/Customer/f_notice_view.asp?ni=1075'>KT멤버십 시스템 긴급 점검 안내</a></span><span><a href='/Customer/f_notice_view.asp?ni=1074'>워터밤 2023 초대 이벤트 당첨자 발표</a></span><span><a href='/Customer/f_notice_view.asp?ni=1073'>제목 : 밀리의 서재 시스템 업데이트 작업 안내 [8.10(목) 밤 02:00 ~ 06:00]</a></span>

			</div>
			<span class="btns cfx" id="footer-notice-navi"></span>

			<script type="text/javascript">
				var footerRolling = new ROLLING();
				footerRolling.option = {
					arrow:true,
					number:false,
					arrowParent:$('#footer-notice-navi'),
					displayNum:1
				};
				footerRolling.hook = $('#footer-notice');
				footerRolling._load();
			</script>
		</div>
		<ul class="menu">
			<li><a href="#">이벤트</a></li>
			<li><a href="#">고객센터</a></li>
			<li><a href="#">이용안내</a></li>
			<li><a href="#" class="text-bold">서비스 전체보기 &gt;</a></li>
		</ul>
	</div>
	<div id="footinfos" class="ft-info" tabindex="-1">
		<div class="clearfix">
			<ul class="link-wrap">
				<li><a href="#" target="_blank">회사소개</a></li>
				<li><a href="#">이용약관</a></li>
				<li><a href="#" class="text-bold">개인정보처리방침</a></li>
				<li><a href="#">청소년보호정책</a></li>
				<li><a href="#">위치기반 서비스 이용약관</a></li>
				<li><a href="#">이메일주소무단수집거부</a></li>
				<li><a href="#">서비스 이용문의</a></li>
				<li><a href="#">제휴 문의</a></li>
			</ul>
			<dl class="sns">
				<dt class="text-bold">쿠션SNS</dt>
				<dd><a href="https://www.youtube.com" class="btn-youtube" target="_blank" title="새창 열림">youtube</a></dd>
				<dd><a href="http://www.naver.com" class="btn-blog" target="_blank" title="새창 열림">naver blog</a></dd>
				<dd><a href="https://www.facebook.com" class="btn-fb" target="_blank" title="새창 열림">facebook</a></dd>
			</dl>
		</div>
		<div class="info-company">
			<h3 class="logo-company">(주)쿠션뮤직</h3>
			<dl>
				<dt>대표이사</dt>
				<dd>김정준</dd>
				<dt class="hide">주소</dt>
				<dd>인천광역시 부평구 부흥로</dd>
				<dt>사업자등록번호</dt>
				<dd>123-45-56789</dd>
				<dt>통신판매일신고</dt>
				<dd>2023-인천부평-01302</dd>
			</dl>
			<dl>
				<dt>개인정보보호책임자</dt>
				<dd>김정준 본부장</dd>
				<dt>서비스문의:</dt>
				<dd>1577-1577 / sada2knuy@nvaer.com</dd>
				<dt>호스팅제공자:</dt>
				<dd>(주)쿠션뮤직</dd>
				<dt class="hide">카피라이트</dt>
				<dd>COPYRIGHTⓒGENIE MUSIC CORP ALL RIGHTS RESERVED.</dd>
			</dl>
		</div>
