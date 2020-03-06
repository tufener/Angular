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
			<label for="idlogin">Login :</label>
			<input type="text" name="txtlogin" id="idlogin" placeholder="votre identifiant" value="${loginCookie}" required />
			<label for="idmdp">Mot de passe :</label>
			<input type="password" name="txtmdp" id="idmdp" placeholder="votre mot de passe" required />
		</p>
			<input type="submit"  name="btnlogin" value="S'identitifier"/>	
			
			
			<hr>
			<label for="idsouvenir">Mot de passe :</label>
			<input type="checkbox" value="memoriser" name="souvenirlogin" id="idsouvenir"/>
	</form>
	<p>${msg}</p>
	
</body>
</html>