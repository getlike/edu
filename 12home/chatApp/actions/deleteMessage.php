<?php
include 'db.php';

function deleteMessages()
{
    $sql = 'DELETE FROM `messages` WHERE `messages`.`id` = 10 ';
    connect()->query($sql);
    connect()->close();
}

?>