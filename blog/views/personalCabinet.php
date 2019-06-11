<?php
//это персональный кабинет доступный после прохождения регистрации
echo $_COOKIE["userLogin"];

?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../style/personalCabinet.css">
    <title>привет <? $_COOKIE["userLogin"]; ?></title>
</head>
<body>
<header></header>
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
    <input type="submit" name="logout" value="loguot">
    <div class="messages">

        <?php
        //прочитать сообщения из бд через напрямую через bd.php
        //заполнять по мере чтения из бд

        include '../config/db.php';
        $arrMessage = readUserMessage('message');

        foreach ($arrMessage as $value) {
            '<h1>' . $value['head'] . '</h1>';

            echo '<div class="message">' .
                '<h1>' . $value['head'] . '</h1>' .
                '<hr>' .
                $value['username'].'<hr>'.
                '<img src="' . $value['picture'] . '" alt="" id="pictMess" align="left">' .
                '<p>' . $value['message'] . '<br>' . '</p>' .
                $value['datatime'];
//                     echo $value['message'] . '<br>';
            echo '</div>';
            //todo куда засунуть автора?
//
        }
        ?>


    </div>

</div>
</body>
</html>
