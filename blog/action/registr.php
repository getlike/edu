<?php
include '../config/db.php';
//со стандартной фоточкой
//createUserMessage('users',$arr=['имя','адресФото','электронка','пароль']);
$name=$_POST['first_name'];
$email=$_POST['email'];
$password=$_POST['password'];
createUserMessage('users',$arr=['username'=>$name,'email'=>$email,'password'=>$password]);
echo '<pre>';
    var_dump($_POST);


?>

