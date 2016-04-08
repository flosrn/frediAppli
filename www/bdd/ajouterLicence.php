<?php
include('function.php');

	$con = base();	//connexion a la base

	//recuperation des guet
	$num = $_GET['num'];
	$nom = $_GET['nom'];
	$prenom = $_GET['prenom'];
	$lib_club = $_GET['lib_club'];
	$id_demandeur = $_GET['id_demandeur'];

	$id = trim($lib_club);


	$dateNaissance = $_GET['dateNaissance']; //recuper la date de deplacement
	$mois = explode(" ",$dateNaissance)[1];
	$jour = explode(" ",$dateNaissance)[2];
	$annee = explode(" ",$dateNaissance)[3];
	$mois = mois($mois);  
	$dateNaissance = $annee."-".$mois."-".$jour;

		$sql = "select * from club where Nom='".$id."'";
		try {
			$res = $con->query($sql);
			$row = $res->fetch(PDO::FETCH_ASSOC);
		} catch (PDOException $e) {
			die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
		}

		$idClub2 = $row['idClub'];

	   //insert adherent
        $sql = "insert into adherent (numLicence, Nom, Prenom, dateNaissance, idClub, idDemandeur) 
        values ('".$num."', '".$nom."', '".$prenom."', '".$dateNaissance."', '".$idClub2."', '".$id_demandeur."')";

        //echo $sql;
        try {
            $nb = $con->exec($sql);
        } catch (PDOException $e) {
            die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
        } 

?>