<?php
function connect($arr = [
    "servername" => "localhost",
    "username" => "root",
    "password" => "",
    "dbname" => "chat"
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


    return $connection;

}

function readMessages(){//вот что делает плохо сформированый запрос
    $list = [];
    $sql = 'SELECT * FROM messages ';
//    echo $sql;
    $result = connect()->query($sql);

    while ($row = $result->fetch_assoc()) {
        array_push($list,$row);
    }
    connect()->close();

    echo '<pre>';
    print_r($list);
}


function readUser(){//вот что делает плохо сформированый запрос
    $list = [];
    $sql = 'SELECT * FROM users ';
//    echo $sql;
    $result = connect()->query($sql);

    while ($row = $result->fetch_assoc()) {
        array_push($list,$row);
    }
    connect()->close();

    return $list;
}
function deleteMessages()
{
    $sql = 'DELETE FROM `messages` WHERE `messages`.`id` = 10 ';
    connect()->query($sql);
    connect()->close();
}
function deleteUser($id){
    $sql = 'DELETE FROM `users` WHERE `users`.`id` = '.$id;
    connect()->query($sql);
    connect()->close();
}
//изменить имя пользователя
//UPDATE `users` SET `username` = 'яДобави' WHERE `users`.`id` = 17;

//addU
function addUser($username,$password,$email){
    //INSERT INTO `users` (`username`, `password`, `email`) VALUES (NULL, 'sql', 'views/img/simba.png', 'qls', 'test@i.ua');
    $sql = 'INSERT INTO `users` (username, password, email) VALUES ('.$username.','.$password.','.$email.');';
    echo $sql;
    connect()->query($sql);
    connect()->close();
}