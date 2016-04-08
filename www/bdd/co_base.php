<?php 

function base() {
$dsn = 'mysql:host=localhost;dbname=fredi';
$con = new PDO($dsn,'root','', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

return $con;

}
?>