<?php
include "../configs/db.php";
include '../../partials/header.php';

$sql='UPDATE `messages` SET `message` = \''.$_POST['message'].'\' WHERE `messages`.`id` ='.$_POST['id'];
connect()->query($sql);
connect()->close();
header('Location: ../modules/messages/index.php');
