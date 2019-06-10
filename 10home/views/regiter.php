<?php
include '../php/db.php';//подключаем недоКРУД
if (isset($_POST['username'])&&isset($_POST['email'])&&isset($_POST['password'])){//если все существует
    createConn('users',$_POST['username'],$_POST['password'],$_POST['email']);//метод из круд
}


?>