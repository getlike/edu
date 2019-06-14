<?php
session_start();
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../style/newpost.css">
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
            <!-- Тип кодирования данных, enctype, ДОЛЖЕН БЫТЬ указан ИМЕННО так -->
            <form enctype="multipart/form-data" action="../config/updatePhoto.php" method="POST" class="photo-message">

                <input type="file" name="img">
                <input type="submit" name="upload">

            </form>
            <?php
            if ($_SESSION['msg']) {
                echo 'sess';
                echo $_SESSION['msg'];
                unset($_SESSION['msg']);
            }
            ?>

        </div>
        <div class="right">
            <div class="head-message">
                <form action="../action/writeMessage.php" method="post"
                ">

                <label>Заголовок</label>
                <input type="text" name="head">
                <label name="user_id"></label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
                <input class="but" type="submit" onclick="window.location='../action/writeMessage.php';">
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