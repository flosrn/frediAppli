<?php

include('function.php');

$con = base();
$idLigne = $_GET['idLigne'];



$sql = "select numLicence, a.Nom, a.Prenom, a.dateNaissance, c.Nom as lib_club, c.idClub, a.id from adherent a, club c where a.idClub = c.idClub and id=".$idLigne."";

try {
      $res = $con->query($sql);
      $row = $res->fetch(PDO::FETCH_ASSOC);
  } catch (PDOException $e) {
      die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
  }
  
  
  /*$date = $row['date'];
    // echo $date."<br>";
  $annee = explode("-",$date)[0];
  $mois = explode("-",$date)[1];
  $jour = explode("-",$date)[2];
  $date = $jour."-".$mois."-".$annee;
  $row['date'] = $date; 
  // echo $row['date'];*/

  $row = json_encode($row);
  echo $row;
  return $row;

?>