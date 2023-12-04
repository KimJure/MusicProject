<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="kjj" value="${pageContext.request.contextPath }" />
<%@ page session="true" %> 
<!DOCTYPE html>
<html lang="ko">

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>


<%@ include file="include/header.jsp" %>

<c:set var="user" value="${sessionScope.user}" />

<%-- user 값 사용 --%>
<c:if test="${not empty user}">
</c:if>

<body>
<div id="wrap-0">
	<div id="wrap-body" class="">
	<div class="hd-top">
		<div id="body-content">
			<div class="top-title-line">
				<h2><img src="https://image.genie.co.kr/imageg/web/payment/h2_product_r1.png" alt="이용권 구매" /></h2>
			</div>

			<div class="payment">
				
<div class="user-info payment_edit_info">
	<dl>
		<dt>사용중인 이용권</dt>
		<!-- 이용권 있을 경우 -->
		
			      <c:choose>
              <c:when test="${not empty user}">
              
		<dd>
			<em>${user.passname}</em>
			<p>이용권을 구매하고 다양한 혜택을 누리세요!</p>
			
			<p class="payment_edit"><a href="https://www.genie.co.kr/member/product/myProductCancel">이용권 해지/설정</a></p>
		</dd>
	               
              </c:when>
              <c:otherwise>
	              	
		<dd>
			<em>Chshion만에 다양한 혜택</em>
			<p>로그인 후 이용권을 구매하고 다양한 혜택을 누리세요!</p>
			
			<p class="payment_edit"><a href="#" onclick="loginPopup(); return false;">로그인</a></p>
		</dd>
              </c:otherwise>
          </c:choose>
	</dl>
</div>

				<!-- 공통 : 탭 메뉴 -->
				




<ul class="tab">
	<li class="tab-1 on"><a href="/buy/recommend">쿠션 BEST</a></li>
	<li class="n2 tab-2 "><a href="/buy/discount">3개월 할인 특가</a></li>
	<li class="tab-3 "><a href="/buy/geniePack">KT 통신사 혜택</a></li>
	<li class="tab-8 "><a href="/buy/partner">제휴혜택</a></li>
	<li class="tab-5 "><a href="/buy/thirtyDays">30일권</a></li>
	<li class="tab-6 "><a href="/buy/year">스페셜 이용권</a></li>
	
</ul>

				<h3><img src="${kjj}/resources/img/Logo/title_product_best_5.2.png" alt="쿠션 BEST이용권 복잡한 이용권 이제 그만! 내 이용 패턴에 따라 내가 선택하는 쿠션! 고객님에게 꼭 맞는 요금을 최저가로 즐겨보세요." /></h3>

				<!-- 모바일 전용 -->
				<div class="products list-dc">
					<div class="divide">
						<h4 class="hot"><span class="icon hot">HOT</span>스마트 음악감상<br /><em class="sm_txt"></em></h4>
						<dl class="mp3">
							<dt>한달 이용권</dt>
							<dd><del class="mp_del"></del><strong class="price">8,000</strong>원<a href="${kjj}/board/PayView?passnum=2" title="" class="popupLink">구매하기</a></dd>
							<dt>4개월간 50%</dt>
							<dd><del class="mp_del">8,000원</del><strong class="price">4,000</strong>원<a href="${kjj}/board/PayView?passnum=3" title="모바일 전용 스마트 음악감상 4개월간 47% 구매하기"  class="popupLink">구매하기</a></dd>
							<dt>12개월 내내</dt>
							<dd><del class="mp_del">8,000원</del><strong class="price">6,000</strong>원<a href="${kjj}/board/PayView?passnum=4" title="모바일 전용 스마트 음악감상 12개월 내내 구매하기"  class="popupLink">구매하기</a></dd>
						</dl>
					</div>
				</div>
				
				<!--// 모바일 전용 -->

				<!-- 3개월 할인 -->
				<div class="products list-dc">
					<div class="divide">
						<h4>3개월 할인!</h4>
						<dl class="best_area">
							<dt><div>음악감상</div></dt>
							<dd><span class="pr"><del class="best_del">8,000원</del><strong class="price">3,500</strong>원</span><a href="${kjj}/board/PayView?passnum=5" title="3개월 할인 음악감상 구매하기" class="popupLink">구매하기</a></dd>
						</dl>
					</div>
				</div>
				<!--// 3개월 할인 -->
			
				

				

			<!-- 스페셜이용권 배너 -->
			
			<div class="new_product_info">
				<dl>
					<dt><img src="https://image.genie.co.kr/imageg/web/payment/new_h4_guide_r1.gif" alt="이용권 사용안내" /> <a href="#" class="btn-payment" >이용권 기능안내</a></dt>
					<dd>
						<ul>
							<li>할인 기간 동안만 해당 가격으로 적용되며, 이 후 정상가로 결제됩니다. 해당 이벤트는 사전 예고 없이 종료 될 수 있습니다.</li>
							<li>최종 결제 금액은 부가가치세(10%)가 합쳐진 금액입니다.</li>
							<li>권리사의 사정에 따라 일부 음원은 재생이나 다운로드가 제한될 수 있습니다.</li>
							<li>쿠션 상품은 구매와 동시에 선과금 되며 사용이력에 따라 일부 환불이 불가할 수 있습니다.</li>
							<li>구매하신 이용권의 결제내역 조회, 변경, 해지는 [이용권 내역]에서 할 수 있습니다.</li>
							<li>사용하지 않은 이용권은 결제 후 7일 이내 환불 받을 수 있습니다. (통신사 부가서비스 제외)</li>
							<li>이용권 환불 신청은 쿠션 고객센터(1577-5337)로 전화하거나 <br>[쿠션 앱 &gt; 더보기 &gt; 고객센터 &gt; 1:1 문의하기], [쿠션 웹사이트 &gt; 하단 고객센터 &gt; 상단 <a href="http://www.genie.co.kr/Customer/f_contact.asp">문의하기</a>]에서 할 수 있습니다.</li>
							<li>사용 중인 이용권을 환불할 경우 이용 일수 및 이용 건수 등을 차감 후 환불됩니다.</li>
							<li>부가서비스의 환불 및 해지는 통신사 정책이 적용되며 이용중인 통신사 고객센터 및 홈페이지에 문의 바랍니다.</li>
							<li>DRM 기술이 적용된 이용권은 쿠션뮤직 APP에서만 무제한으로 이용하실 수 있으며, 이용권의 기간이 종료될 경우 사용하실 수 없습니다.</li>
							<li>MP3 다운로드 이용권의 경우, 이용 기간  내  다운로드 하지 않으면 잔여곡은 소멸됩니다. (이월 불가)</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
</div>
</div>
</div>
</div>
</body>

<script>
var popupLinks = document.querySelectorAll('.popupLink');

popupLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // 기본 링크 동작을 중지합니다.

    // 첫 번째 스크립트로부터 세션에 저장된 유저 정보 가져오기
    var user = "${user}";

    // 유저 정보가 없는 경우
    if (user === "") {
    	alert("로그인 후 이용하실 수 있습니다.");
      // 로그인 화면(LoginView)을 팝업으로 열기
      loginPopup();
    } else {
      // 유저 정보가 있는 경우 링크를 팝업으로 열기
      var url = this.getAttribute('href');
      var popupWindow = window.open(url, 'PayView', 'width=600,height=400');
      if (popupWindow) {
        popupWindow.focus();
      }
    }
  });
});

function loginPopup() {
    PopupCenter("${kjj}/board/Loginview", "popLoginSecure", 470, 382);
}

window.addEventListener("message", function (event) {
    if (event.data === "${kjj}/") {
        window.location.href = "${kjj}/"; // 원하는 경로로 이동
    }
});

</script>



<%@ include file="include/footer.jsp" %>

<style>
#wrap-body .hd-top {width:940px;margin:0 auto;padding:6px 0 4px}
</style>
    
</html>