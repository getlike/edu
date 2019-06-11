<?php
/*
 * Создать пользователя
 * createUserMessage('users',$arr=['имя','адресФото','электронка','пароль']);
 * Создать запись
 *  createUserMessage('message',$arr=['имя','заголовок','текст статьи','Дата','pictureFromArg','оценка']); по умолчанию оценка 5. Нужно думать как ее туду сюду крутить
 * удалить пользователя
 * deleteUserMesage('users',айдишник записи);
 *удалить сообщение
 * deleteUserMesage('message',айдишник записи);
 *  */







//конектимся
function connect($arr = [
    "servername" => "localhost",
    "username" => "root",
    "password" => "",
    "dbname" => "blog"
])
{
    $servername = $arr['servername'];//переопределяем для более сжатой
    $username = $arr['username'];
    $password = $arr['password'];
    $dbname = $arr['dbname'];

    $connection = new mysqli($servername, $username, $password, $dbname);
    if ($connection->connect_error) {
        die('ERROR : ' . $connection->connect_error);
    }
//    echo 'conn';
    return $connection;

}


//crud

//create
//createUserMessage('users',$arr=[]);
function createUserMessage($tablename, $arr = [//todo проверку ввода на стороне js
    'username' => 'usernameformArg',
    'photo' => '',
    'email' => 'emailformArg',
    'password' => 'passwordformArg',        //users значения по умолчанию
    'userId'=>3,
    'head=>'=>'headFromarg',
    'message'=>'messageFromArg',
    'datatime'=>'2019-06-12',
    'picture'=>'pictureFromArg',
    'rate'=>5])                             //message значения по умолчанию
{
    $listUsers=readUserMessage('users');//получаем полльзователей
    foreach ($listUsers as $value) {//todo переделать под функцию in_array


        if ($arr['username'] == $value['username'] || $arr['email'] == $value['email']) {//проверка уникальности логина & passwords

            echo 'такой уже есть';
            return;
        }
    }
    if ($tablename == 'users') {
        $sql = 'INSERT INTO ' . $tablename . "( username, email,password) VALUES ('" . $arr['username'] .  "','" . $arr['email'] . "','" . $arr['password'] . "');";

        connect()->query($sql);

    }
    elseif ($tablename=='message'){
        $sql = 'INSERT INTO ' . $tablename . "( userId, message,datatime,picture,rate) VALUES ('" . $arr['userId'] . "','" . $arr['message'] . "','" . $arr['datatime'] . "','" . $arr['picture'] . "','" . $arr['rate'] . "');";

        connect()->query($sql);
    }
    connect()->close();//от греха подальше
}

//read message and user
function readUserMessage($tablename)
{
    $list = [];
    $sql = 'SELECT * FROM ' . $tablename;
    $result = connect()->query($sql);
//    echo $result;
    if ($tablename == 'users') {

        while ($row = $result->fetch_assoc()) {//прочитали users
            //echo $row['username'].'<hr>'. $row['id'];
            array_push($list, array(
                'id' => $row['id'],
                'username' => $row['username'],
                'photo' => $row['password'],
                'email' => $row['email'],
                'password' => $row['password']));
        }
        return $list;
    } elseif ($tablename == 'message') {
//echo $result;
        //echo $sql;
        while ($row = $result->fetch_assoc()) {//прочитали message
            //echo $row['username'].'<hr>'. $row['id'];
            array_push($list, array(
                'id' => $row['id'],
                'user_id' => $row['user_id'],
                'head'=>$row['head'],
                'message' => $row['message'],
                'datatime' => $row['datatime'],
                'picture' => $row['picture'],
                'rate' => $row['rate']));
        }
        return $list;

    }
    connect()->close();//от греха подальше
}



function deleteUserMesage($tablename,$id){
    if ($tablename=='message'){
        $sql = 'DELETE FROM '. $tablename.' WHERE `message`.`id` = '.$id ;
        $result = connect()->query($sql);
        echo 'delete complete';
    }
    if ($tablename=='users'){
        $sql = 'DELETE FROM '. $tablename.' WHERE `users`.`id` = '.$id ;
        $result = connect()->query($sql);
        echo 'delete complete';
    }
    connect()->close();
}

/*
Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живёте
*/