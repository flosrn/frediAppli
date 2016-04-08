<?php
include('function.php');
	
	$id_demandeur = $_GET['id_demandeur'];
	
	$con = base();

	$sql = "select sum(coutTotal) as total from lignefrais where idDemandeur='".$id_demandeur."';";
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