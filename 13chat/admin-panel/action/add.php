<?php
include "../configs/db.php";
// ["username"]=> string(11) "ddddddddddd" ["email"]=> string(15) "wqeqweqweqweqwe" ["password"]=> string(19) "fdsdfsdfsdfsdfsdsfd" }

$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
//INSERT INTO `users` (`id`, `username`, `photo`, `email`, `password`, `role`) VALUES (NULL, 'ййцйцйц', '/media/cat.jpg', 'уцйцуйцуйцуйц', 'йцуйцуйцуйцуйцуйцу', 'user');
$sql='INSERT INTO `users` (`username`, `email`, `password`) VALUES ( \''.$username.'\',\''.$email.'\',\''.$password.'\'); ';
//echo $sql;
connect()->query($sql);
connect()->close();
header('Location: ../index.php');







?>