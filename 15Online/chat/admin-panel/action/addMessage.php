<?php
include '../configs/db.php';
foreach ($_POST['user'] as $keys => $values) $userId = $values;
//var_dump($_POST);
//array(3) { ["user"]=> array(1) { [0]=> string(1) "9" } ["message"]=> string(14) "awdawadwadwada" ["password"]=> string(15) "awdawdawdawdawd" }


//INSERT INTO `messages` (`user_id`, `to_user_id`, `message`, `created`) VALUES ('1', NULL, '8419641896', CURRENT_TIMESTAMP);
$sql='INSERT INTO `messages` (`user_id`, `to_user_id`, `message`, `created`) VALUES (\''.$userId.'\', NULL, \''.$_POST['message'].'\', CURRENT_TIMESTAMP);';
//echo $sql;
connect()->query($sql);
connect()->close();
header('Location: ../modules/messages/index.php');





?>

