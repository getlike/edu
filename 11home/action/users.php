<?php
include '../config/db.php';

//читаем ползователей для єкрана
function readUser()
{
    $list = [];
    $sql = 'SELECT * FROM users';
    $result = connect()->query($sql);

    while ($row = $result->fetch_assoc()) {//прочитали users
        //echo $row['username'].'<hr>'. $row['id'];
        array_push($list, array(
            'id' => $row['id'],
            'username' => $row['username'],
            'picture' => $row['picture'],
            'email' => $row['email'],
            'password' => $row['password']));
    }
    return $list;


}

?>