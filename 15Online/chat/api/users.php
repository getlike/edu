<?php

include "../admin-panel/configs/db.php";

if (isset($_GET['page'])) {
    switch ($_GET['page']) {
        case 'friends':
            //http://ithelper.anovainfo.zzz.com.ua/api/users.php?page=friends&user_id=5
            getFriens($_GET['user_id']);
            break;
        case 'allUsers':

            getAllUsers();
            break;
        case 'message':
            getMessage($_GET['user_id']);
            break;
        default:
            echo 'niponil';
    }
}
function getMessage($id){
    $messages = [];
    $sql = 'SELECT message FROM `messages` WHERE user_id='.$id;

    $result = connect()->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $messages[] = [
                "mess" => $row['message']
            ];


        }
        echo json_encode(["messages" => $messages]);
    }
}
function getAllUsers()
{
    $users = [];
    $sql = 'SELECT * from users';

    $result = connect()->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $users[] = [
                "id" => $row['id'],
                "username" => $row['username'],
                "photo" => $row['photo'],
                "email" => $row['email']

            ];


        }
        echo json_encode(["users" => $users]);
    }
}

function getFriens($user_ID)
{
    $sql = 'select * from friends where user_1 = ' . $user_ID . ';';
//echo $sql;
    $result = connect()->query($sql);
    $friends = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
//            echo $row['user_2'];
            //
            $sqlF = 'SELECT * FROM users WHERE id=' . $row['user_2'];
//            echo $sqlF;
            $resultF = connect()->query($sqlF);
            if ($resultF->num_rows > 0) {
                $friend = $resultF->fetch_assoc();
                $friends[] = [
                    "id" => $friend['id'],
                    "username" => $friend['username'],
                    "photo" => $friend['photo'],
                    "email" => $friend['email']

                ];
            }
        }
        echo json_encode(["friends" => $friends]);
    }

}

//getFriens(5);

/*Получить список всех друзей выбранного пользователя по ID. - check


Получить список всех пользователей. - check

Получить список всех сообщений пользователя по ID. - check*/