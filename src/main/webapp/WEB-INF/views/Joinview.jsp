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

   <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
   <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


<link rel="stylesheet" href="${kjj}/resources/commons/loginstyle/jscrollpane.css" media="all">
<link rel="stylesheet" href="${kjj}/resources/commons/loginstyle/jquery-ui.css" media="all">	
<link rel="stylesheet" href="${kjj}/resources/commons/loginstyle/wbugs.css">
<link rel="stylesheet" href="${kjj}/resources/commons/loginstyle/fonts.css" type="text/css">

</head>


<body class="">
	<div id="wrap" class="wrapMembers">


<article class="mnMembers pgJoinEmail">
	<header class="pgHeader">
	<a href="${kjj}" class="logo">Cushion</a>
		<h1>이메일 아이디로 회원가입</h1>
	</header>

	<form action="${kjj}/board/joinMember" method="post">
		<fieldset class="formGroup basic">
			<legend>기본 정보 입력</legend>
			
						<div class="row" id="divname">
				<label for="name" class="lb">이름</label>
				<div class="col">
					<div class="placeholderForm" id="Inputname">
						<input type="text" id="name" name="name" placeholder="이름 입력" required>

					</div>
				</div>
			</div>
			
		<div class="row tel" id="divnickname">
    <label for="nicknamelabel" class="lb">닉네임</label>
    <div class="col">
        <span class="placeholderForm" id="divPhoneNumber">
            <input type="text" id="nickname" name="nickname" placeholder="닉네임 입력" required>
        </span>
        <button type="button" class="btn btnForm" id="nicknameCheckButton" onclick="nicknameCheck()">중복확인</button>
    </div>
    <p class="desc" id="descPassword">쿠션 회원님들과 닉네임으로 소통합니다.</p>
</div>
			
			
						<div class="row tel" id="divid">
				<label for="id" class="lb">아이디</label>
				<div class="col">
          <span class="placeholderForm" id="divPhoneNumber">
            <input type="text" id="id" name="id" placeholder="아이디 입력" required>

          </span>
 					<button type="button" class="btn btnForm" id="idCheckButton" onclick="idCheck()">중복확인</button>
 					
 					
				</div>
				<p class="desc">6~12자 영문,숫자로만 조합</p>
			</div>
			

			<div class="row id"  id="divEmail">
				<label for="email" class="lb">이메일</label>
				<div class="col">
					<span><input type="text" id="email" name="email" placeholder="이메일 입력" required></span>
					<span class="at">@</span>
					<span class="selectWrap">
						<select id="domain" name="domain" title="도메인 선택" required>
							<option value="">도메인 선택</option>
							<option value="naver.com">naver.com</option>
							<option value="gmail.com">gmail.com</option>
						</select>
					</span>

				</div>
				<p class="desc">결제내역 받기, 비밀번호 찾기 등에 사용되므로 정확하게 입력해 주세요.</p>
			</div>

			<div class="row">
				<label for="password" class="lb">비밀번호</label>
				<div class="col" id="divPassword">
					<div class="placeholderForm">
						<input type="password" id="pw" name="pw" placeholder="비밀번호 입력" required>
						
					</div>
				</div>
				<p class="desc" id="descPassword">8~20자 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합</p>
				<p class="desc" id="isValidLengthPassword"></p>

				<label for="" class="lb blind">비밀번호 재입력</label>
				<div class="col" id="divPasswordCheck">
					<div class="placeholderForm">
						<input type="password" id="passwordCheck" name="passwordCheck" placeholder="비밀번호 재확인" required>	
					</div>
				</div>
			</div>


    <div class="row tel" id="divCertifiedStep1">
        <label for="tel" class="lb">휴대폰</label>
        <div class="col">
            <input type="hidden" id="countryCode" name="countryCode" value="+82" />
            <span class="placeholderForm" id="divPhoneNumber">
                <input type="text" id="tel" name="tel" placeholder="숫자만 입력" required>
            </span>
            <button type="button" class="btn btnForm" id="btnCertifiedStep1">인증</button>
        </div>
    </div>

    <div class="row tel" id="divCertifiedStep2">
        <label for="tel" class="lb">인증번호</label>
        <div class="col">
            <span class="placeholderForm" id="divPhoneNumber">
                <input type="hidden" id="CertificationNumber" name="Certification Number" value=""/>
                <input type="text" id="telchecknum" name="telchecknum" placeholder="인증번호 입력" required>
            </span>
            <button type="button" class="btn btnForm" id="certifiedOk" name="certifiedOk" onclick="checkCertification()">확인</button>
        </div>
	</div>
	</fieldset>

		<fieldset class="formGroup chk">
			<legend>회원 가입 약관 체크</legend>

			<p>
				<input type="checkbox" id="allAgree" name="allAgree">
				<label for="allTermsAgree">아래 내용에 모두 동의합니다.</label>
			</p>

			<ul>
				<li>
					<input type="checkbox" id="agree" name="agree" value="1" required/>
					<label for="userTermsAgree">(필수) 이용약관에 동의합니다.</label>
					<a href="#" class="more">자세히 보기</a>
				</li>
				<li id="privacyTerms">
					<input type="checkbox" id="agree1" name="agree1" value="1" required/>
					<label for="privacyTermsAgree">(필수) 개인정보 수집 및 이용에 대한 안내에 동의합니다.</label>
					<a href="#" class="more">자세히 보기</a>
				</li>
				
			</ul>
		</fieldset>

		<p class="btns">
			
			<button type="submit" class="btn btnJoin" id="btnJoinComplete" style="width: 458px; height: 70px;">가입 완료</button>
		</p>
</form>
</article>



<footer id="footer">
	<div class="copyright">
		© NHN Bugs Corp. All rights reserved.
	</div>
</footer>

	</div>
</body>

<script>

//체크박스 전체선택

  var allAgreeCheckbox = document.getElementById("allAgree");


  var userTermsAgreeCheckbox = document.getElementById("agree");
  var privacyTermsCheckbox = document.getElementById("agree1");


  allAgreeCheckbox.addEventListener("change", function () {

    userTermsAgreeCheckbox.checked = allAgreeCheckbox.checked;
    privacyTermsCheckbox.checked = allAgreeCheckbox.checked;
    
	  duplicateAgree = this.checked;
	    console.log("agree " + duplicateAgree);
	    
		  duplicateAgree1 = this.checked;
		  console.log("agree1 " + duplicateAgree1);
    
    
  });
  
//체크박스 끝

  document.getElementById("agree").addEventListener("change", function() {
	  duplicateAgree = this.checked;
	    console.log("agree " + duplicateAgree);
	});

	// agree1 체크박스의 상태가 변경될 때 실행될 함수
	document.getElementById("agree1").addEventListener("change", function() {
	  duplicateAgree1 = this.checked;
	  console.log("agree1 " + duplicateAgree1);
	});
	

// 닉네임 중복확인 및 유효성검사
var duplicateNickname = false;
var duplicateId = false;
var Authentication = false;
var duplicateName = false;
var duplicateEmail = false;
var duplicateDomain = false;
var duplicatePassword = false;
var duplicateAgree = false;
var duplicateAgree1 = false;

var code = 0;

function nicknameCheck() {
    var nickname = document.getElementById("nickname").value;

    if (!isValidLength(nickname)) {
        alert("닉네임은 1~8글자여야 하며 \n특수문자 공백 한글(자음,모음) 을 사용할수없습니다.");
        return;
    }


    $.ajax({
        type: "POST",
        url: "nicknameCheck",
        data: {
            nickname: nickname
        },
        success: function(result) {
            if (result !== 0) {
                alert("이미 사용중인 닉네임입니다.");
                duplicateNickname = false;
            } else {
                alert("사용가능한 닉네임입니다.");
                duplicateNickname = true;
                console.log("닉네임 인증이 완료되었습니다. duplicateNickname을 true로 설정합니다.");
                console.log(duplicateNickname);
            }
        },
        error: function() {
            alert("오류가 발생했습니다.");
            duplicateNickname = false;
        }
    });
}

function onNicknameInputChange() {
    duplicateNickname = false;
    console.log("닉네임 입력이 변경되었습니다. duplicateNickname을 false로 설정합니다.");
}

document.getElementById("nickname").addEventListener("change", onNicknameInputChange);

function isValidLength(nickname) {

    var regex = /^[a-zA-Z가-힣0-9]{1,8}$/;

    return regex.test(nickname);
}

//닉네임 중복확인 및 유효성검사 끝

// 아이디 중복확인 및 유효성검사

function idCheck() {
    var id = document.getElementById("id").value;
    
    if (!isValidLength1(id)) {
        alert("아이디는 6~15글자(영어, 영어 + 숫자)여야 하며 \n특수문자 공백 한글을 사용할수없습니다.");
        return;
    }
    

    if (id.trim() === "") {
        alert("아이디를 입력해주세요.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "idCheck",
        data: {
            id: id
        },
        success: function(result) {
            if (result !== 0) {
            	
                alert("이미 사용중인 아이디입니다.");
                duplicateId = false;
            } else {

                alert("사용가능한 아이디입니다.");
                duplicateId = true;
                console.log("아이디 인증이 완료되었습니다. duplicateId을 ture로 설정합니다.");
                console.log(duplicateId);
            }
        },
        error: function() {
        	
            alert("오류가 발생했습니다.");
            duplicateId = false;
        }
    });
}

function onIdInputChange() {
    isIdAvailable = false;
    console.log("아이디 입력이 변경되었습니다. duplicateId을 false로 설정합니다.");
}

document.getElementById("id").addEventListener("change", onIdInputChange);


function isValidLength1(id) {

    var regex1 = /^[a-zA-Z0-9]{6,15}$/;

    return regex1.test(id);
}

//아이디 중복확인 및 유효성검사 끝

//인증번호 발송 및 전화번호 유효성검사
   
    
    $(document).ready(function () {

        $("#btnCertifiedStep1").click(function () {

            var phoneNumber = $("#tel").val();


            if (phoneNumber.trim() === "") {

                alert("전화번호를 입력해주세요.");
                return;
            }


            if (/^\d{11}$/.test(phoneNumber)) {

                alert("인증번호를 발송하였습니다.");
                $("#divCertifiedStep2").show();


                var tel = $("#tel").val();
                $.ajax({
                    type: "GET",
                    url: "certifiedPhoneNumber?tel=" + tel, 
                    cache: false,
                    success: function (data) {
                        if (data === "error") {
                            alert("error.");
                        } else {
                            $("#CertificationNumber").attr("disabled", false).val(data); 
                            code = data;
                            
                            console.log(code);
                        }
                    }
                });
            } else {

                alert("전화번호를 정확하게 입력해주세요 (숫자로만 11자 입력)");
            }
        });
    });
    
  //인증번호 발송 및 전화번호 유효성검사 끝
    
    //인증번호 확인
    function checkCertification() {
    	console.log(code);
        var receivedCertification = code;
        var enteredCertification = document.getElementById("telchecknum").value;

        if (receivedCertification === enteredCertification) {
            alert("인증에 성공했습니다");
            Authentication = true;
            console.log(Authentication);
        } else {
            alert("인증번호가 잘못되었습니다");
        }
    }
  
    //인증번호 확인 끝
            
  
</script>


<script>

document.getElementById("btnJoinComplete").addEventListener("click", function(event) {
    event.preventDefault();
	
    console.log("Name " + duplicateName);
    console.log("Email " + duplicateEmail);
    console.log("Domain " + duplicateDomain);
    console.log("password " + duplicatePassword);
    console.log("nickname " + duplicateNickname);
    console.log("id " + duplicateId);
    console.log("------------------------");
	
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var domain = document.getElementById("domain").value;
    var password = document.getElementById("pw").value;
    var passwordCheck = document.getElementById("passwordCheck").value;
    
    
    // 이름 입력란이 비어 있을 경우
    if (name.trim() === "") {
        alert("이름을 입력해주세요.");
        return;
    }
    
    // 이름이 한글만 포함하는지 검사
    if (!/^[가-힣]+$/.test(name)) {
        alert("이름을 다시 입력해주세요.");
        return;
    }

    // 이메일 입력란이 비어 있을 경우
    if (email.trim() === "") {
        alert("이메일을 입력해주세요.");
        return;
    }
    
    // 이메일이 영어와 숫자로만 이루어져 있는지 검사
    if (!/^[a-zA-Z0-9]+$/.test(email)) {
        alert("이메일은 영어와 숫자만 입력 가능합니다.");
        return;
    }
    
    // 도메인 선택이 되지 않았을 경우
    if (domain === "") {
        alert("이메일 도메인을 선택해주세요.");
        return;
    }
    
    if (password.trim() === "") {
        alert("비밀번호를 입력해주세요.");
        return;
    }
    
    var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d|.*[@#$%^&+=]).{8,20}$/;
    if (!passwordRegex.test(password)) {
        alert("비밀번호는 8~20자 영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합해야합니다.");
        return;
    }
    
    if (password !== passwordCheck) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }
    
    if (duplicateNickname == false) {
        alert("닉네임 중복확인을해주세요.");
        return;
    }
    
    if (duplicateId == false) {
        alert("아이디 중복확인을해주세요.");
        return;
    }
    
    if (Authentication == false) {
        alert("휴대폰 인증을해주세요.");
        return;
    }
    
    if (duplicateAgree == false) {
        alert("이용약관에 동의하여야합니다.");
        return;
    }
    
    if (duplicateAgree1 == false) {
        alert("개인정보 수집 및 이용에 대한 안내에 동의하여야합니다.");
        return;
    }
    
    duplicateName = true;
    duplicateEmail = true;
    duplicateDomain = true;
    duplicatePassword = true;
    console.log("Name " + duplicateName);
    console.log("Email " + duplicateEmail);
    console.log("Domain " + duplicateDomain);
    console.log("password " + duplicatePassword);
    console.log("nickname " + duplicateNickname);
    console.log("id " + duplicateId);
    console.log("Authentication " + Authentication);
    console.log("agree " + duplicateAgree);
    console.log("agree1 " + duplicateAgree1);
    
    if (duplicateName && duplicateEmail && duplicateDomain && duplicatePassword && duplicateNickname && duplicateId && Authentication && duplicateAgree && duplicateAgree1) {
        // 모든 duplicate 변수가 true일 때만 폼을 제출합니다.
        document.querySelector("form").submit();
    } else {
        alert("모든 정보를 올바르게 입력하고 확인해주세요.");
    }
});

</script>





        <style>
        #divCertifiedStep2 {
            display: none;
        }
    </style>
    
</html>
