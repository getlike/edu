<?php
include "../configs/db.php";

$username=$_POST['username'];
$password=$_POST['pass'];

$sql='SELECT * FROM `users` WHERE `username` = \''.$username.'\'';

$result = connect()->query($sql);
$row = $result->fetch_assoc();


if ($password==$row['password']){
    setcookie("user", $row['username'], time()+3600,'/');
    setcookie("id", $row['id'], time()+3600,'/');
    setcookie("role", $row['role'], time()+3600,'/');//а по безопаске єто воще норм?????

}
else{
    echo 'bad';

}
header('Location: ../');
