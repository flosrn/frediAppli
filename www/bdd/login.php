<?php
	include('function.php');

	$email = $_GET['email'];
	$password = $_GET['password'];
	$password = sha1($password);


	$con = base();

	$sql = "select * from demandeur where AdresseMail = '".$email."' and MotDePasse = '".$password."'";

	try {
		  $res = $con->query($sql);
		  $row = $res->fetch(PDO::FETCH_ASSOC);
	  } catch (PDOException $e) {
		  die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
	  }
	  $row = json_encode($row);
	echo $row;
	return $row;

?>