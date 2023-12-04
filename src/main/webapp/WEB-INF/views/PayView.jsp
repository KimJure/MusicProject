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

   <c:forEach items="${PayView}" var="pass">
         <c:set var="passname" value="${pass.passname}" scope="request" />
         <c:set var="passexplan" value="${pass.passexplan}" scope="request" />
         <c:set var="passpay" value="${pass.passpay}" scope="request" />
         <c:set var="passprice" value="${pass.passprice}" scope="request" />
         <c:set var="passdate" value="${pass.passdate}" scope="request" />
         <c:set var="passnum" value="${pass.passnum}" scope="request" />
         
</c:forEach>

  <title>이용권 구매</title>

  <meta http-equiv="Cache-Control" content="no-cache"/>
  <meta http-equiv="Pragma" content="no-cache"/>
  <meta http-equiv="Expires" content="0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta charset="UTF-8">

	
	<link rel="stylesheet" href="${kjj}/resources/commons/style/billing_pc.css" />
  
  <link rel="shortcut icon" href="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsgOk1%2FbtssB2cKMsj%2FHFhf49nLS10EHVVVkIGKjK%2Fimg.png" type="image/x-icon" />
  <link rel="icon" href="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsgOk1%2FbtssB2cKMsj%2FHFhf49nLS10EHVVVkIGKjK%2Fimg.png" type="image/x-icon"/>

  <!--[if lt IE 9]>
  <script type="text/javascript" src="https://pay.bugs.co.kr/js/jquery-1.4.2.min.js?version=2023-09-07 11:07:48"></script>
  <![endif]-->
  <!--[if gte IE 9]><!-->
  <script type="text/javascript" src="https://pay.bugs.co.kr/js/jquery-3.3.1.js?version=2023-09-07 11:07:48"></script>
  <!--<![endif]-->

  <script type="text/javascript" src="https://pay.bugs.co.kr/js/frontCommons.js?version=2023-09-07 11:07:48"></script>
  <script type="text/javascript" src="https://pay.bugs.co.kr/js/commons.js?version=2023-09-07 11:07:48"></script>
  <script type="text/javascript" src="https://pay.bugs.co.kr/js/downloader/downloader.js?version=2023-09-07 11:07:48"></script>

</head>
<body>

<aside class="layer title layerCheckBeforePurchase" id="alertOfflineCoupon" style="display:none;">
  <header class="layer-title">
    <h1>안내</h1>
  </header>
</aside>



<script>
  var windowResizing = false;
  var windowResizeCheck = function() {
	if (!windowResizing) {
	  popupResizeTo();
	  paymentInfoPosition();
	}
  }

	var paymentInfoPosition = function() {
		var sTop = $(document).scrollTop();
		var wHeight = $(window).height();

		if (sTop < 90) {
			$('.paymentInfo').removeClass('scrollTop scrollBtm');
		} else {
			$('.paymentInfo').addClass('scrollTop');
		}
	}

  var popupResizeTo = function () {
	var wFrame = window.outerHeight - window.innerHeight + 5;
	var wHeight = $('.pgPayment').innerHeight() + wFrame;

	try {
	  //해상도 768보다 크면 세로가 760, 작으면 650
	  var screenHeight = window.screen.height;
	  if(screenHeight > 768) {
		wHeight = 760;
	  } else {
		wHeight = 650;
	  }
	} catch (e) {}

	window.resizeTo(1000, wHeight);
	windowResizing = true;
  }

	$( document ).ready(function() {
	popupResizeTo();
	  paymentInfoPosition();
	setTimeout(windowResizeCheck, 2000);
	});

	$(window).scroll(function() {
		paymentInfoPosition();
	});

</script>




<!-- 전환페이지 설정 -->

<article id="container" class="mnPayment pgPayment">
	<section class="productName">
		<div class="innerContent">
	  <p><strong>Cushion ${passname} ${passexplan}</strong></p>
		</div>

	</section>

	<section class="sectionDivider paymentMethod">
		<header class="sectionHeader">
			<h1 class="sectionTitle">결제방법</h1>
		</header>

		<div class="selectMethod">
		<div class="smPayco">
			<input type="radio" id="kakaopay" name="payment" class="radio"/>
			<label for="kakaopay"><span class="logoPayco">KAKAOPAY</span>간편결제</label>
<div class="KakaoDesc">
	<ul>
		<li>최초 1회 결제정보 입력하면, 이후 결제비밀번호 입력만으로 편리하게 결제할 수 있습니다.</li>
		<li>휴대폰과 카드 명의자가 동일해야 결제 가능하며, 결제금액 제한은 없습니다.</li>
		<li>지원카드: 모든 국내 신용/체크카드</li>
	</ul>
</div>

			<div class="paycoServiceGuide">
			  <a href="https://www.kakaopay.com/" target="_blank">KakaoPay 서비스 안내</a>
			</div>

		</div>

  </section>



	<section class="paymentInfo">
    <ul class="productPriceInfo">
      <li>
        <strong class="title">제공기간</strong>
        <span>매월 자동결제</span>
      </li>
      <li>
        <strong class="title" >정상가</strong>
        <span><script>document.write((${passprice}).toLocaleString())</script>원</span>
        
      </li>
      <li id="productDiscountSummary"></li>
      <li id="cashDiscount"></li>
      <li class="result">
        <strong class="title">결제예정금액 <span>(VAT 별도)</span></strong>
        <span><strong id="payPrice"><script>document.write((${passpay}).toLocaleString())</script>원</strong></span>
      </li>
    </ul>

	<div class="btns">
	  <button class="btnAccent--l" id="btnBuy" onclick="requestPay()">구매하기</button>
	</div>

	</section>


	<section class="sectionDivider caution">
		<header class="sectionHeader">
			<h1 class="sectionTitle">이용안내</h1>
		</header>

<ul id="ulProductCaution">
		<li><em>위 상품 결제 시에는 현대카드 M포인트 할인, 신한카드 마이신한포인트, 국민카드 포인트리, 삼성카드 포인트를 사용하실 수 없습니다.</em></li>
		<li>모든 이용권 금액은 부가세 10% 별도입니다.</li>
		<li>모바일 무제한 듣기 이용권은 Cushion 모바일앱(애플 앱스토어 및 구글 플레이스토어에서 다운로드)을 지원하는 스마트폰 및 태블릿에서 사용하실 수 있습니다.</li>
		<li>FLAC 음원 재생은 16bit으로 제공되며, 모바일 iOS / Android 앱과 PC Cushion 플레이어에서 바로 감상할 수 있습니다.</li>
		<li>모바일 3G/LTE 네트워크 환경에서 FLAC 음원 청취 시 과도한 데이터 요금이 부과될 수 있습니다.</li>
		<li>음원 권리사의 요청으로 특정 음원의 경우 음악 듣기 서비스 이용이 제한될 수 있습니다.</li>
		<li>자동결제 해지예약은 PC로 Cushion>내 정보>이용권 관리에서, 모바일로 Cushion>이용권 구매>MY 탭에서 가능합니다.</li>
		<li>각 할인 혜택은 사전 예고 없이 종료될 수 있습니다.</li>
</ul>
	</section>
</article>
  
       <!-- 결제 API -->
       
      <!-- jQuery -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
    <!-- iamport.payment.js -->
    <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"></script>
    <script>
    
    </script>
    <script>
        var IMP = window.IMP; 
        IMP.init("imp82840187"); 
      
        var today = new Date();   
        var hours = today.getHours(); // 시
        var minutes = today.getMinutes();  // 분
        var seconds = today.getSeconds();  // 초
        var milliseconds = today.getMilliseconds();
        var makeMerchantUid = String(hours).padStart(2, '0') + 
        String(minutes).padStart(2, '0') + 
        String(seconds).padStart(2, '0') + 
        String(milliseconds).padStart(3, '0');
        
        

        function requestPay() {
            var kakaopaySelected = document.getElementById("kakaopay").checked;

            if (!kakaopaySelected) {
                alert("결제방법을 선택해주세요.");
                return;
            }
            
            IMP.request_pay({
            	
                pg : 'kakaopay',
                pay_method: 'card',
                merchant_uid: "Chusion"+makeMerchantUid,
                customer_uid: "${user.customer}",
                name : '${passname} ${passexplan}',
                amount : ${passpay},
                buyer_email : '${user.email}@${user.domain}',
                buyer_name : '${user.name}',
                buyer_tel : '${user.tel}',

        	},function(data){
        		if(data.success){   
        			
        			$.ajax({
        			    type: 'post',
        			    url: 'paySuccess',
        			    contentType: 'application/json',
        			    data: JSON.stringify({
        			        membernum : "${user.membernum}",
        			        ticketadate : "${passdate}",
        			        passnum : "${passnum}"
        			    }),

        			});
        			        			
         	         
         	         alert('결제가 완료되었습니다');
        			  
                   
                   window.close();

                   // 원래 페이지에 메시지 보내기
                   window.opener.postMessage("${kjj}/", "*");
                   
                }else{
                	alert("결제에 실패하였습니다");
                }
        	});
        }
    </script>
    
  
  
  </body>
</html>
