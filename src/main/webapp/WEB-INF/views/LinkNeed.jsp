<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="kjj" value="${pageContext.request.contextPath }" />
<%@ page session="true" %> 
<!DOCTYPE html>
<html lang="ko">
<title>Insert title here</title>

<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<c:set var="user" value="${sessionScope.user}" />

<%-- user 값 사용 --%>
<c:if test="${not empty user}">
</c:if>
</head>
<body>

</body>

<script>
    function onPageLoad() {
    	
    	var user = "${user}";
    	var userId = "${user.id}"
        var result = confirm("기존에 연동된 아이디가 없습니다. 연동하시겠습니까?" );
        
        if (result) {
            if (user === ""){

                alert("로그인이 필요합니다. 로그인 페이지로 이동합니다. 로그인후 연동하기 버튼을 눌러주세요.");
                window.location.href = "${kjj}/board/Loginview";
            } else {
            	
            	$.ajax({
            	    url: 'NaverLinkOn',
            	    type: 'POST',
            	    data: {
            	        naver_id : '${naverId}',
            	        id : userId
            	    },
            	    success: function (response) {
            	        if (response === 1) {
            	            alert('연동이 완료되었습니다.');
            	        } else {
            	            alert('연동에 실패하였습니다.');
            	        }
            	        window.close();
            	    },
            	    error: function (error) {
            	        console.error('Error:', error);
            	    }
            	});
                
            }
        } else {
            window.close();
        }
    }

    window.onload = onPageLoad;
    
    function loginPopup() {
        PopupCenter("${kjj}/board/Loginview", "popLoginSecure", 470, 382);
    }
</script>
</html>