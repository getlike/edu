<?php
header('Content-Type: text/html');
header('Access-Control-Allow-Origin: *');

include '../configs/db.php';

//последнее сообщение для айди
//SELECT * FROM messages WHERE user_id = 6 ORDER BY created DESC LIMIT 1;.
//getLastMessage(1,$conn);
function getLastMessage($user_id, $conn)
{
    //
    $sql = "SELECT * FROM messages WHERE user_id = " . $user_id . " ORDER BY created DESC LIMIT 1;";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo json_encode(["lastMessage" => $row]);
    }

}

//getAllUsers($conn);//без этого не работает О_О люблю php (срказьм)
function getAllUsers($conn)
{
    $sql = "SELECT * FROM users";
    $result = $conn->query($sql);
    $users = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {

            $users[] = [
                "id" => $row['id'],
                "username" => $row['username'],
                "photo" => $row['photo'],
                "email" => $row['email'],
                "role" => $row['role']
            ];
        }

    }
    echo json_encode(["users" => $users]);
}

function getAllMessage($user_id, $conn)
{
    $sql = "SELECT messages.message,messages.created, messages.user_id,users.username,users.photo
          FROM messages 
          JOIN users 
          WHERE users.id=user_id 
          AND user_id=" . $user_id . " ;";
    $result = $conn->query($sql);
    $messages = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            /*
             * Array
 (
     [message] => asCsefgzsefzfzsefsezfsef
     [created] => 2019-06-22 14:14:57
     [user_id] => 6
     [username] => test
 )*/
            $messages[] = [
                "message" => $row['message'],
                "created" => $row['created'],
                "photo" => $row['photo'],
                "username" => $row['username']
            ];
        }
    }

    echo json_encode($messages);
}

//writeMessage(3,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',$conn);

function writeMessage($user_id,$message,$conn){
    $sql = "INSERT INTO messages (user_id,message) VALUES ('".$user_id."', '".$message."');";
    $conn->query($sql);
//    echo $sql;
}
// Получить всех друзей выбранного пользователя
//неработат. Може вы что то подскажете.
if (isset($_POST['page']) && $_POST['page'] == 'writeMessage') {


    writeMessage($_POST['user_id'],$_POST['message'],$conn);




}

function getFriends($user_id, $conn)
{

    $sql = "SELECT * FROM friends WHERE user_1=$user_id";
    $result = $conn->query($sql);
    $friends = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {

            $sql = "SELECT * FROM users WHERE id=" . $row['user_2'];
            $resultFriend = $conn->query($sql);
            if ($resultFriend->num_rows > 0) {
                $friend = $resultFriend->fetch_assoc();
                $friends[] = [
                    "id" => $friend['id'],
                    "username" => $friend['username'],
                    "photo" => $friend['photo'],
                    "email" => $friend['email']
                ];
            }
        }
    }

    echo json_encode(["friends" => $friends]);
}

/*
* @todo как оптимизировать код, убрать дублирование пользователей
*/
function searchUser($text, $conn)
{
    $sql = "SELECT * FROM `users` WHERE `username` LIKE '%" . $text . "%'";
    $result = $conn->query($sql);
    $users = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $users[] = [
                "id" => $row['id'],
                "username" => $row['username'],
                "photo" => $row['photo'],
                "email" => $row['email']
            ];
        }
    }

    echo json_encode(["users" => $users]);
}


function addFriend($current_user, $user_id, $conn)
{
    $sql = "INSERT INTO `friends` (`user_1`, `user_2`, `status`) VALUES ('$current_user', '$user_id', 'true')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "ok"]);
    } else {
        echo json_encode(["status" => "error"]);
    }
}
//updateData('qwerty','123456',$conn);
function updateData($name,$pass,$conn){
    $sql="UPDATE users SET `username` = '".$name."', `password` = '".$pass."' WHERE `users`.`id` = 5;";
    $conn->query($sql);
    echo 'Данные обновлены <a href="#" OnClick="history.back();">Назад</a>';
}

/*
* @todo сделать через switch
*/
if (isset($_GET['page']) && $_GET['page'] == 'friends') {
    getFriends($_GET['current_user'], $conn); // !!! $conn !!! -> ** как сделать $conn глобальной
}

if (isset($_GET['page']) && $_GET['page'] == "search" && isset($_GET['search'])) {
    searchUser($_GET['search'], $conn);
}


if (isset($_POST['page']) && $_POST['page'] == 'add_friend') {
    addFriend($_POST['current_user'], $_POST['user_id'], $conn);
}
if (isset($_POST['page']) && $_POST['page'] == 'last_message') {
    getLastMessage($_POST['user_id'], $conn);
}

if (isset($_POST['page']) && $_POST['page'] == 'getAllMessage') {
    getAllMessage($_POST['user_id'], $conn);
}
if (isset($_POST['page']) && $_POST['page'] == 'getAllUsers') {
    getAllUsers($conn);
}
if (isset($_GET['pass']) ) {
    updateData($_GET['name'],$_GET['pass'],$conn);
}
if (isset($_POST['page']) && $_POST['page'] == 'writeMessage') {
    $fd = fopen("error.txt", 'w') or die("не удалось создать файл");
    $str = $_POST['user_id']." ".$_POST['message'];
    fwrite($fd, $str);
    fclose($fd);


    writeMessage($_POST['user_id'],$_POST['message'],$conn);




}
