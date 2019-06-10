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
               echo 'connected ';
           }
           else{
               echo 'password is wrong';
           }
           //echo 'findUser <b>'.$username.'</b> with id '.$value['id'].'<hr>';
       }
//       elseif{
//           echo 'login is epsent';
//       }

}


?>