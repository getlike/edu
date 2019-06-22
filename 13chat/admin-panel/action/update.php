<?php
include "../configs/db.php";
$id=$_POST['id'];
$oldname=$_POST['comment'];
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$sql='UPDATE `users` SET `username` = \''.$username.'\', `email` = \''.$email.'\', `password` = \''.$password.'\'  WHERE `users`.`username` = \''.$oldname.'\';';
connect()->query($sql);

header('Location: ../modules/users/edit.php?id='.$id);







?>