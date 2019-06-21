<?php 
session_start(); //старт сесии
session_decode();// завершения сесии
header('Location: login.php');// переход на страницу
exit; 
?>