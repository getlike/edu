<?php
//это персональный кабинет доступный после прохождения регистрации
echo $_COOKIE["userLogin"];

?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../style/personalCabinet.css">
    <title>Персональный кабинет</title>
</head>
<body>
<header></header>
Привет <? $_COOKIE["userLogin"]; ?> !
<div class="personal">
    <div class="photo">
        <img src="../img/15minute.jpg" alt="">
    </div>
    <div class="info-user">
        <h3>username</h3>
        <input type="text" name="username" placeholder="username">
        <h3>email</h3>
        <input type="text" name="email" placeholder="email">
        <h3>password</h3>
        <input type="password" name="password" placeholder="password">
    </div>
    <input type="submit" name="logout" value="loguot" >
    <input type="submit" name="logout" value="addMessage" onclick="window.location='../views/newMessage.php';">
    <div class="messages">

        <?php
        //прочитать сообщения из бд через напрямую через bd.php
        //заполнять по мере чтения из бд

        include '../config/db.php';
        $arrMessage = readUserMessage('message');//масив сообщений
        $id = $_COOKIE['user_id'];

        foreach ($arrMessage as $value) {
            if ($value['user_id'] == $id) {
//                $value['message']=htmlspecialchars($value['message']);//экранируем теги
//                $value['head']=htmlspecialchars($value['head']);//экранируем теги
                '<h1>' . $value['head'] . '</h1>';

                echo '<div class="message">' .
                    '<h1>' . $value['head'] . '</h1>' .
                    '<hr>' . nameUser($value['user_id']) . '<hr>' .
                    '<img src="' . $value['picture'] . '" alt="" id="pictMess" align="left">' .
                    '<p>' . $value['message'] . '<br>' . '</p>' .
                    $value['datatime'];
//                     echo $value['message'] . '<br>';
                echo '</div>';
            }
            //todo куда засунуть автора?
//
        }
        function nameUser($user_id)
        {//ой костли)((((((
            $arrUsers = readUserMessage('users');
            foreach ($arrUsers as $value) {
                if ($value['id'] == $user_id) {

                    return $value['username'];
                }
            }

        }

        ?>


    </div>

</div>
</body>
</html>
