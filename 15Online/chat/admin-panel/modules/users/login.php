<?php
//SELECT * FROM `users` WHERE `username` = 'admin'
include '../../configs/db.php';
$sql='SELECT * FROM `users` WHERE `username` = \'admin\'';
$result=$conn->query($sql);