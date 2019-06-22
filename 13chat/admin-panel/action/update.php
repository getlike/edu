<?php
include "../configs/db.php";
// ["username"]=> string(11) "ddddddddddd" ["email"]=> string(15) "wqeqweqweqweqwe" ["password"]=> string(19) "fdsdfsdfsdfsdfsdsfd" }
$oldname=$_POST['comment'];
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
//UPDATE `users` SET `username` = 'dddddddddddqq', `email` = 'wqeqweqweqweqweww', `password` = 'fdsdfsdfsdfsdfsdsfdee', `role` = 'userrr' WHERE `users`.`id` = 6;
$sql='UPDATE `users` SET `username` = \''.$username.'\', `email` = \''.$email.'\', `password` = \''.$password.'\'  WHERE `users`.`username` = \''.$oldname.'\';';
//echo $sql;
connect()->query($sql);
connect()->close();
header('Location: ../index.php');







?>