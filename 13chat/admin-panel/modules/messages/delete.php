<?php
include '../../configs/db.php';

$sql = 'DELETE FROM messages WHERE id = ' . $_GET['id'];
$res = connect()->query($sql);
connect()->close();
header('Location: index.php');
