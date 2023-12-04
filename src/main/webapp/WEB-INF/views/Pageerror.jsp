<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="contextPath" value="${pageContext.request.contextPath }" />
<%@ page session="true" %> 
<!DOCTYPE html>
<html lang="ko">

<%@ include file="include/header.jsp" %>


<div class="image-container">
    <img src="${contextPath}/resources/img/Logo/page_ready.jpg" alt="컨텐츠 준비중입니다. 자료가 준비되는대로 업데이트 하도록 하겠습니다." />
</div>

<style>
.image-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
    height: 100vh; 
}
</style>

<%@ include file="include/footer.jsp" %>
</html>