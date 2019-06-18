<?php
function connect($arr = [
    "servername" => "localhost",
    "username" => "root",
    "password" => "",
    "dbname" => "blog"
])
{
    $servername = $arr['servername'];//переопределяем для более сжатой
    $username = $arr['username'];
    $password = $arr['password'];
    $dbname = $arr['dbname'];

    $connection = new mysqli($servername, $username, $password, $dbname);
    $connection->set_charset('utf8');
    if ($connection->connect_error) {
        die('ERROR : ' . $connection->connect_error);
    }
//    echo 'conn';

    return $connection;

}


?>