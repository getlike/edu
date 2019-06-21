<?php

$name=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$req =createUserMessage('users',$arr=['username'=>$name,'email'=>$email,'password'=>$password]);

function createUserMessage($tablename, $arr = [//todo проверку ввода на стороне js
'username' => 'usernameformArg',
'photo' => '',
'email' => 'emailformArg',
'password' => 'passwordformArg',        //users значения по умолчанию
'userId' => 3,
'head=>' => 'headFromarg',
'message' => 'messageFromArg',
'datatime' => '2019-06-12',
'picture' => 'pictureFromArg',
'rate' => 5])                             //message значения по умолчанию
{
$listUsers = readUserMessage('users');//получаем полльзователей
foreach ($listUsers as $value) {//todo переделать под функцию in_array


if ($arr['username'] == $value['username'] || $arr['email'] == $value['email']) {//проверка уникальности логина & passwords

echo 'такой уже есть';
return;
}
}
if ($tablename == 'users') {
$sql = 'INSERT INTO ' . $tablename . "( username, email,password) VALUES ('" . $arr['username'] . "','" . $arr['email'] . "','" . $arr['password'] . "');";

connect()->query($sql);

} elseif ($tablename == 'message') {
//echo $arr['head'];
//INSERT INTO `message` (`id`, `head`, `user_id`, `message`, `datatime`, `picture`, `rate`) VALUES (NULL, 'заголовок', '14', 'тело сообщения', CURRENT_TIMESTAMP, '', '')
$sql = 'INSERT INTO ' . $tablename . "( head, user_id, message,picture,rate) VALUES ('" . $arr['head'] . "','" . $arr['userId'] . "','" . $arr['message'] . "','" . $arr['picture'] . "','" . $arr['rate'] . "');";

connect()->query($sql);

}
connect()->close();//от греха подальше
header('Location: /views/login.php');

}

