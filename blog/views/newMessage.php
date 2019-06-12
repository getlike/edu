<?php

?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="">
    <link rel="stylesheet" type="text/css" href="../style/page_two.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet">
    <title>Создать новый пост</title>
</head>
<body>
<div class="home">
    <header>
        <a href="/" class="logo_img">
            <img src="../img/icon.png">
        </a>
        <?php
        //если есть кука
        if (isset($_COOKIE["userLogin"])) {
            echo '<a href="personalCabinet.php "><img src="../img/icons/icon_user.svg" alt=""></a>';
        } else {
            echo '<a href="login.php"><img src="../img/icons/icon_user.svg" alt=""></a>';
        }

        ?>

    </header>
    <div class="main_text">
        <div class="left">
            <div class="search_left">
                <img src="../img/icons/icon_search.svg" alt=""><input type="search" placeholder="Search">
            </div>
        </div>
        <div class="right" style="border: 2px solid green">
            <div class="head-message">
                <form action="../action/writeMessage.php" method="post">

                    <label>Заголовок</label>
                    <input type="text" name="head">
                    <label name="user_id"></label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                    <input type="submit" onclick="window.location='../action/writeMessage.php';">
                </form>
            </div>

            <!--            id - номер сообщения-->
            <!--            head-заголовок-->
            <!--            user_id-пользователь-->
            <!--            message-тело сообщения-->
            <!--            datatime-дата сообщения-->
            <!--            picture-превью-->
            <!--            rate-оценка-->

        </div>
    </div>
</div>

</body>
</html>