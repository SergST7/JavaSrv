<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Available Courses</title>
<link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
<script type="text/javascript" src="js/jquery-2.2.2.min.js"></script>
<script type="text/javascript" src="js/bootstrap.js"></script>
</head>
<body>
	<div class="container">


		<div class="row">
			<div class="col-xs-6 col-md-12">
				<h3>Subscribed courses</h3>
			</div>
			<div class="col-xs-6 col-md-12">
				<table class="table table-hover">
					<tr>
						<th>Employee_id</th>
						<th>Dep_id</th>
						<th>Last name<th>
						<th>First name<th>
						<th>Middle name<th>
						<th>Position<th>
						<th>Sex<th>
						<th>Contact Info<th>
					</tr>
					<c:forEach var="employ" items="${requestScope.employee}">
						<tr>
							<td>${employ.idEmpl}</td>
							<td>${employ.idDep}</td>
							<td>${employ.lastName}</td>
							<td>${employ.firstName}</td>
							<td>${employ.middleName}</td>
							<td>${employ.position}</td>
							<td>${employ.sex}</td>
							<td>${employ.contactInfo}</td>
						</tr>
					</c:forEach>
				</table>
			</div>
		</div>

	</div>
</body>
</html>
