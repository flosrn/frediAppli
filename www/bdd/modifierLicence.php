<?php

include('function.php');
	
	$con = base();	//connexion a la base
	
	//recuperation des guet
	$num = $_GET['num'];
	$nom = $_GET['nom'];
	$prenom = $_GET['prenom'];
	//$dateNaissance = $_GET['dateNaissance'];
	$lib_club = $_GET['lib_club'];
	$id = $_GET['id'];

	$dateNaissance = $_GET['dateNaissance']; //recuper la date de deplacement
	$mois = explode(" ",$dateNaissance)[1];
	$jour = explode(" ",$dateNaissance)[2];
	$annee = explode(" ",$dateNaissance)[3];
	$mois = mois($mois);  
	$dateNaissance = $annee."-".$mois."-".$jour;

  
  $lib_club = trim($lib_club);


  //recuper l'indemniter avec l'annee
  $sql = "select idClub from club where Nom = '".$lib_club."';";
  try {
  	$res = $con->query($sql);
  	$idClub = $res->fetch(PDO::FETCH_ASSOC);
  } catch (PDOException $e) {
  	die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
  }
 echo $num;
 echo $nom;
 echo $prenom;
 echo $dateNaissance;
 echo $id;
 echo $idClub['idClub'];

	   //update adherent
        $sql = "update adherent set numLicence ='".$num."', Nom ='".$nom."', Prenom ='".$prenom."', dateNaissance ='".$dateNaissance."', idClub ='".$idClub['idClub']."' where id=".$id."";
        try {
            $nb = $con->exec($sql);
        } catch (PDOException $e) {
            die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
        } 
		
		
		


?>