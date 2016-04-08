<?php
include('function.php');

$idLigne = $_GET['id'];
echo $idLigne;

$con = base();

$sql = "DELETE FROM adherent WHERE id =".$idLigne."";
	try {
		$res = $con->exec($sql);
	} catch (PDOException $e) {
		die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
	}


?>