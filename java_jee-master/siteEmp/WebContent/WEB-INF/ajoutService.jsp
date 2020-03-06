<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%@ include file="includes/entete.jsp" %>
	<form action="" method="post">
	
		<p>
			<label for="idLibelle">Libellé</label>
			<input type="text" name="txtlib" id="idLibelle" placeholder="votre libellé" required />
		</p>
			<input type="submit"  name="btnAjouter" value="Ajouter Service"/>
		
	</form>
	<c:forEach var="error" items="${errors}">
		<p>${error}</p>
	</c:forEach>
	<c:if test="${!empty msg}">
		<p>${msg}</p>
	</c:if>
</body>
</html>