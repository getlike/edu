<?php 
$servername = "localhost";
$username = "root";
$password = "";
$db = "comand A";

$conn = new mysqli($servername, $username, $password, $db); //в переменнюю помещаем запрос к БД
$conn->set_charset('utf8');
// echo "<pre>";
// var_dump($conn );
// echo "</pre>";

if($conn->connect_error) { 
	die("Connrction failed: " . $conn->connect_error);//выводим ерор если нет соединения
} 
?>