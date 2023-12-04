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
    	
            	$.ajax({
            	    url: 'KakaoLogin',
            	    type: 'POST',
            	    data: {
            	        nickname : '${nickname}',
            	        profile : '${profile}',
                    },
                    success: function (data) {
 						
                    	window.close();
                    	
                        window.opener.location.reload();
                        
                    },
                    error: function (error) {
                        console.error('Ajax request failed:', error);
                    }
                });
                
            }


    window.onload = onPageLoad;
    
    function loginPopup() {
        PopupCenter("${kjj}/board/Loginview", "popLoginSecure", 470, 382);
    }
</script>
</html>