<?php
include '../config/db.php';
//загнать в масив все подходящие записи
//echo '<pre>';
////login password
$username=$_POST['login'];//$_POST['username'];//получаем логин с формы
$password=$_POST['password'];//получаем пароль с формы
$list = (readUserMessage('users'));
//print_r($list);
//echo '</pre>';

foreach ($list as $value) {
       if($value['username']==$username){
           if ($value['password']==$password){
//               echo 'connected ';
               //вернуть пользователя с куками если соединение прошло удачно
               setcookie('userLogin',$username,time()+3600,"/");
               header('Location: /');
           }
           else{
               echo 'password is wrong';
           }
           //echo 'findUser <b>'.$username.'</b> with id '.$value['id'].'<hr>';
       }
//       else{
//           echo 'нету такого пользователя или что то пошло не так';
//       }

}


?>