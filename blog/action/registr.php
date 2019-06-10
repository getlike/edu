<?php
include '../config/db.php';
//со стандартной фоточкой
//createUserMessage('users',$arr=['имя','адресФото','электронка','пароль']);
$name=$_POST['first_name'];
$email=$_POST['email'];
$password=$_POST['password'];
$req =createUserMessage('users',$arr=['username'=>$name,'email'=>$email,'password'=>$password]);
//вернуть пользователя с куками если соединение прошло удачно
if (req){
    header('Location: /views/login.php');
}

?>

