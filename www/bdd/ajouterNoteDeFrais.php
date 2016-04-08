<?php
include('function.php');

	$con = base();	//connexion a la base
	$dateDeplacement = $_GET['date']; //recuper la date de deplacement
	$dateIonic = $_GET['date']; //recuper la date de deplacement
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
	$id_demandeur = $_GET['id_demandeur'];
	

		//insert motif
		$sql = "insert into motif (libelle) 
        values ('".$motif."')";
        try {
            $nb = $con->exec($sql);
        } catch (PDOException $e) {
            die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
        }
		
		
		 //recupere l'id motif
		$sql = "select * from motif where libelle='".$motif."';";
            try {
                $res = $con->query($sql);
                $idMotif = $res->fetch(PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
            }
            
 
	   //insert ligne de frais
        $sql = "insert into ligneFrais (date, trajet, km, coutTrajet, coutPeage, coutRepas, coutHebergement, coutTotal, idDemandeur, Annee, idMotif) 
        values ('".$dateDeplacement."', '".$trajet."', ".$km.", ".$coutTrajet.", ".$coutPeage.", ".$coutRepas.", ".$coutHebergement.", ".$coutTotal.", ".$id_demandeur.", ".$annee.", ".$idMotif['idMotif'].")";

        try {
            $nb = $con->exec($sql);
        } catch (PDOException $e) {
            die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
        } 
		
		
		


?>