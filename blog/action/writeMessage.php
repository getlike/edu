<?php
include '../config/db.php';
//'id' => $row['id'],
//                'userId' => $row['userId'],
//                'message' => $row['message'],
//                'datatime' => $row['datatime'],
//                'picture' => $row['picture'],
//                'rate' => $row['rate']));
$userId = $_POST['userId'];
$message= $_POST['message'];
if ($_POST['datatime']!=null){
    $datatime=$_POST['datatime'];
}
if ($_POST['picture']!=null){
    $picture=$_POST['picture'];
}
if ($_POST['rate']!=null){
    $rate=$_POST['rate'];
}
createUserMessage('message', $arr = ['userId' => $userId, 'message' => $message]);// создание стастьи

?>