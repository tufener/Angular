<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>

<head>
	<meta charset="ISO-8859-1">
	<link rel="stylesheet" type="text/css" href="./css/monstyle.css">
	<!-- Bootstrap Core CSS -->
	<link href="./bootstrap/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<!-- MetisMenu CSS -->
	<link href="./bootstrap/metisMenu/metisMenu.min.css" rel="stylesheet">
	<!-- DataTables CSS -->
	<link href="./bootstrap/datatables-plugins/dataTables.bootstrap.css" rel="stylesheet">
	<!-- DataTables Responsive CSS -->
	<link href="./bootstrap/datatables-responsive/dataTables.responsive.css" rel="stylesheet">
	<title>Acceuil</title>
</head>

<body>
	<%@ include file="includes/entete.jsp" %>
	<div id="wrapper">
	
		<c:if test="${ ! empty sessionScope.sessInfo }">
			<p><b>Bonjour ${sessionScope.sessInfo}</b></p>
		</c:if>
		<div class="row">
          <div class="col-lg-12">
              <h1 class="page-header">Tables</h1>
          </div>
          <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
                    <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
									<c:forEach var="service" items="${services}">
								  		<!--<li><a href="AccueilServlet?servSelected=${service.code}">${service.libelle}</a></li> -->
								  		<a href="AccueilServlet?servSelected=${service.code}"><button type="button" class="btn btn-primary">${service.libelle}</button></a>
									</c:forEach>
									<a href="AccueilServlet"><button type="button" class="btn btn-primary">Tout les services</button></a>
                        </div>
                        <!-- /.panel-heading -->
                        <div class="panel-body">
                            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                    	<th style="display:none;">idEmp</th>
                                    	<th style="display:none;">idService</th>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Salaire</th>
                                        <th>Ville</th>
                                        <th>Nom habitant</th>
                                    </tr>
                                </thead>
                                <tbody>
                                	<c:forEach var="employe" items="${employes}">
										<tr>
											<td style="display:none;">${employe.matricule}</td>
											<td style="display:none;">${employe.numService}</td>
											<td>${employe.nom}</td>
											<td>${employe.prenom}</td>
											<td>${employe.salaire}</td>
											<td>${employe.ville}</td>
											
											<c:choose>
												<c:when test="${employe.ville == 'PARIS'}">
														<td>Vous êtes Parisien</td>
												</c:when>
												<c:when test="${employe.ville == 'CRETEIL'}">
														<td>Vous êtes Cristollien</td>
												</c:when>
											    <c:otherwise>
											    		<td>Vous êtes Autre</td>
											    </c:otherwise>
											</c:choose>
										</tr>
									</c:forEach>
                                </tbody>
                            </table>
                            <!-- /.table-responsive -->
                            <div class="well">
                                <h4>DataTables Usage Information</h4>
                                <p>DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at <a target="_blank" href="https://datatables.net/">https://datatables.net/</a>.</p>
                                <a class="btn btn-default btn-lg btn-block" target="_blank" href="https://datatables.net/">View DataTables Documentation</a>
                            </div>
                        </div>
                        <!-- /.panel-body -->
                    </div>
                    <!-- /.panel -->
                </div>
                <!-- /.col-lg-12 -->
            </div>
            <!-- /.row -->
	</div>
	<h1>Ma page d'accueil</h1>
	
	<ul>
		<c:forEach var="service" items="${services}">
	  		<li><a href="AccueilServlet?servSelected=${service.code}">${service.libelle}</a></li>
		</c:forEach>
		<li><a href="AccueilServlet">Tout les services</a></li>
	</ul>
	<table>
		<c:forEach var="employe" items="${employes}">
			<tr>
				<td>${employe.matricule}</td>
				<td>${employe.numService}</td>
				<td>${employe.nom}</td>
				<td>${employe.prenom}</td>
				<td>${employe.salaire}</td>
				<td>${employe.ville}</td>
				
				<c:choose>
					<c:when test="${employe.ville == 'PARIS'}">
							<td>Vous êtes Parisien</td>
					</c:when>
					<c:when test="${employe.ville == 'CRETEIL'}">
							<td>Vous êtes Cristollien</td>
					</c:when>
				    <c:otherwise>
				    		<td>Vous êtes Autre</td>
				    </c:otherwise>
				</c:choose>
			</tr>
		</c:forEach>
	</table>
	
	<!-- jQuery -->
    <script src="./bootstrap/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="./bootstrap/bootstrap/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="./bootstrap/metisMenu/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="./bootstrap/datatables/js/jquery.dataTables.min.js"></script>
    <script src="./bootstrap/datatables-plugins/dataTables.bootstrap.min.js"></script>
    <script src="./bootstrap/datatables-responsive/dataTables.responsive.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="./bootstrap/sb-admin-2.js"></script>

    <!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    });
    </script>
</body>
</html>