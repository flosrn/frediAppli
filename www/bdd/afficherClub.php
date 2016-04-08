<?php
include('function.php');

$con = base();
//$id_demandeur = $_GET['id_demandeur'];
$sql = "select * from club";

try {
      $res = $con->query($sql);
      $rows = $res->fetchAll(PDO::FETCH_ASSOC);
  } catch (PDOException $e) {
      die("<p>Erreur lors de la requête SQL : " . $e->getMessage() . "</p>");
  }

  $rows = json_encode($rows);
  echo $rows;
  return $rows;

?>