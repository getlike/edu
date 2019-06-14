<?php
//это персональный кабинет доступный после прохождения регистрации
//и я понимаю что здесь нарушена логика mvc и не только здесь, но я неуспеваю ))
include '../config/db.php';
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../style/personalCabinet.css">
    <link rel="stylesheet" href="../style/fly_window.css">
    <title>Персональный кабинет</title>
</head>
<body>
<header></header>
<div class="personal">
    <div class="photo">
<!--        выгружаем фото пользователя юзая куку. Гугл спид меня возненавидит а недохацкеры возлюбят-->
        <img src="<?php echo readUser($_COOKIE['user_id'])['photo'];?>" alt="">
    </div>
<!--    <div class="info-user">-->
<!--        <h3>username</h3>-->
<!--        <input type="text" name="username">-->
<!--        <h3>email</h3>-->
<!--        <input type="text" name="email">-->
<!--        <h3>password</h3>-->
<!--        <input type="password" name="password">-->
<!--    </div>-->
    <input type="submit" name="logout" value="loguot" onclick="window.location='../action/out.php';">
    <input type="submit" name="logout" value="addMessage" onclick="window.location='../views/newMessage.php';">
    <div class="messages">

        <?php

        //прочитать сообщения из бд через напрямую через bd.php
        //заполнять по мере чтения из бд





if (isset($_COOKIE['user_id'])){
        $id = $_COOKIE['user_id'];
        $arrMessage = readPersCab('message',$id);//масив сообщений


        foreach ($arrMessage as $value) {
            if ($value['user_id'] == $id) {
//
                '<h1>' . $value['head'] . '</h1>';

                echo '<div class="message">' .
                    '<h1>' . $value['head'] . '</h1>' .
                    '<hr>' . $value['user_id'] . '<hr>' .
                    '<img src="' . $value['picture'] . '" alt="" id="pictMess" align="left">' .
                    '<p>' . $value['message'] . '<br>' . '</p>' .
                    $value['datatime'];
//                     echo $value['message'] . '<br>';
                echo '</div>';}
            //todo куда засунуть автора?
//
        }


}
else{
    header('Location: /views/login.php');
}

        ?>


    </div>
</div>
<script type="text/javascript" src="../js/fly_window.js" ></script>
</body>
</html>
