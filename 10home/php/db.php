<?php
//можно было классами но не будем торопиться
// Данные для подключения
function connect($servername = "localhost", $username = "root", $password = "", $dbname = "chat")
{
//    $servername = "localhost";
//    $username = "root";
//    $password = "";
//    $dbname = "chat";

    $connection = new mysqli($servername, $username, $password, $dbname);
    if ($connection->connect_error) {
        die('ERROR : ' . $connection->connect_error);
    }
//    echo 'conn';
    return $connection;
}


/* закрытие соединения */


function readConn($tablename)
{//read
    if ($tablename == 'users') {
        $sql = "SELECT * FROM " . $tablename;
        $result = connect()->query($sql);
        if ($result->num_rows > 0) {
            // в переменную row записываем первую запись, которую было найдено выполнив запрос $sql выше
            $list = array();
            while ($row = $result->fetch_assoc()) {
                //echo $row['username'].'<hr>'. $row['id'];
                array_push($list, array(
                    'id' => $row['id'],
                    'username' => $row['username'],
                    'password' => $row['password'],
                    'email' => $row['email']));
            }
            return $list;
        }
        connect()->close();//от греха подальше
    } elseif ($tablename == 'messages') {
        $sql = "SELECT * FROM " . $tablename;
        $result = connect()->query($sql);
        if ($result->num_rows > 0) {
            // в переменную row записываем первую запись, которую было найдено выполнив запрос $sql выше
            $list = array();
            while ($row = $result->fetch_assoc()) {
                //echo $row['username'].'<hr>'. $row['id'];
                //`id`, `user_id`, `to_user_id`, `message`

                array_push($list, array(
                    'id' => $row['id'],
                    'user_id' => $row['user_id'],
                    'to_user_id' => $row['to_user_id'],
                    'message' => $row['message']));
//
            }
            return $list;
//            echo '<pre>';
//            print_r($list);
        }
        connect()->close();//от греха подальше
    }

}

//crud
//create
function createConn($tablename, $username = 'userFromArg', $passowrd = 'passFromArg', $email = 'emailFromArg', $to_user_id = 'arg', $user_id = 'arg_to', $mess = 'mess_arg')
{
    if ($tablename == 'users') {//я знаю что так сравнивать нельзя. А как льзя - непомню((
        //    INSERT INTO Sellers (ID, Address, City, Seller_name, Country) VALUES ('6', '1st Street', 'Los Angeles', 'Harry Monroe', 'USA')
        $sql = "INSERT INTO " . $tablename . " ( username, password,email) VALUES ('" . $username . "', '" . $passowrd . "', '" . $email . "');";
        connect()->query($sql);
        echo 'Вы успешно зарегистрированы ' . $username . ' ! Перейдите по <a href="../index.php">ссылке</a>';
        connect()->close();//от греха подальше
    }
    if ($tablename == 'messages') {
        //INSERT INTO `messages` (`id`, `user_id`, `to_user_id`, `message`) VALUES (NULL, '2', '3', 'теыт');
        $sql = "INSERT INTO " . $tablename . " ( user_id,to_user_id,message) VALUES ('" . $user_id . "', '" . $to_user_id . "', '" . $mess . "');";
        connect()->query($sql);
        echo 'Вы успешно зарегистрированы ' . $username . ' ! Перейдите по <a href="../index.php">ссылке</a>';
        connect()->close();//от греха подальше
    }

}

function delConn($tablename, $id)
{
    //"DELETE FROM `users` WHERE `users`.`id` = 1"
    $sql = "DELETE FROM " . $tablename . " Where users.id = " . $id;

    connect()->query($sql);
    connect()->close();//от греха подальше
}

//create
//createConn('users');//read
//read
//readConn('messages');//read
//update
//delete
//delConn('users', 1);
?>

