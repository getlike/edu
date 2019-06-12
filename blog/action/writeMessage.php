<?php
include '../config/db.php';
//'id' => $row['id'],
//                'userId' => $row['userId'],
//                'message' => $row['message'],
//                'datatime' => $row['datatime'],
//                'picture' => $row['picture'],
//                'rate' => $row['rate']));
$userId = $_POST['user_id'];
$message= $_POST['message'];
$head=$_POST['head'];
if ($userId==''){
    $userId=$_COOKIE["user_id"];
    //echo $userId;
}
if ($_POST['datatime']!=null){
    $datatime=$_POST['datatime'];
}
if ($_POST['picture']!=null){
    $picture=$_POST['picture'];
}
if ($_POST['rate']!=null){
    $rate=$_POST['rate'];
}
$message=htmlspecialchars($message);//экранируем теги
$head=htmlspecialchars($head);//экранируем теги
createUserMessage('message', $arr = ['head'=>$head,'userId' => $userId, 'message' => $message]);// создание стастьи
echo 'post '.$head.' is created';
header('Location: /views/index.php');
//экранирование
?>