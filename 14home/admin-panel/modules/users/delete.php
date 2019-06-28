<?php
include '../../configs/db.php';
//DELETE FROM `users` WHERE `users`.`id` = 8;
$sql = 'DELETE FROM users WHERE `users`.`id` = ' . $_GET['id'];
$res = connect()->query($sql);
connect()->close();
//header('Location: index.php');
echo $sql;


/**
 * @todo получить пользователя по get параметру id
 * @todo удалить запись о пользователе из базы данных
 */