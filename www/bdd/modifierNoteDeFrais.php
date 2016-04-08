<?php

include('function.php');
	
	$con = base();	//connexion a la base
	$dateDeplacement = $_GET['date']; //recuper la date de deplacement
	$mois = explode(" ",$dateDeplacement)[1];
	$jour = explode(" ",$dateDeplacement)[2];
	$annee = explode(" ",$dateDeplacement)[3];
	$mois = mois($mois);  
	$dateDeplacement = $annee."-".$mois."-".$jour;
	
	//recuper l'indemniter avec l'annee
	$sql = "select * from indemnite where Annee='".$annee."';";
	try {
		$res = $con->query($sql);
		$tarifKm = $res->fetch(PDO::FETCH_ASSOC);
	} catch (PDOException $e) {
		die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
	}

	//recuperation des guet
	$motif = $_GET['motif'];
	$trajet = $_GET['trajet'];
	$km = $_GET['km'];
	$coutPeage = $_GET['coutPeage'];
	$coutRepas = $_GET['coutRepas'];
	$coutHebergement = $_GET['coutHebergement'];
	$coutTrajet = $tarifKm['tarifKilometrique'] * $km; //calcul
	$coutTotal = $coutTrajet + $coutPeage + $coutRepas + $coutHebergement; //calcul
	$idLigne = $_GET['idLigne'];
	$idMotif = $_GET['idMotif'];
	

		//update motif
		$sql = "update motif set libelle = '".$motif."' where idMotif=".$idMotif."";
        try {
            $nb = $con->exec($sql);
        } catch (PDOException $e) {
            die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
        }
		
            
 
	   //update ligne de frais
        $sql = "update lignefrais set date='".$dateDeplacement."', trajet='".$trajet."', km=".$km.", coutPeage=".$coutPeage.", coutRepas=".$coutRepas.", coutHebergement=".$coutHebergement.", coutTrajet=".$coutTrajet.", coutTotal=".$coutTotal." where idLigne=".$idLigne.";";

        try {
            $nb = $con->exec($sql);
        } catch (PDOException $e) {
            die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
        } 
		
		
		


?>