<?php
include('function.php');

$idLigne = $_GET['idLigne'];


$con = base();

$sql = "DELETE FROM lignefrais WHERE idLigne = ".$idLigne.";";
	try {
		$res = $con->exec($sql);
	} catch (PDOException $e) {
		die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
	}


?>