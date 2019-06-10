<?php include 'php/db.php'?>
<!---->
<!--//Создать базу данных для чата.check-->
<!--//-->
<!--//Создать таблицу для пользователей (users) с полями id, username, password.check-->
<!--//-->
<!--//Создать таблицу для сообщений (messages) с полями id, user_id, to_user_id, message.check-->
<!--//-->
<!--//Заполнить таблицу пользователей тестовыми данными.check-->
<!--//-->
<!--//Подключить базу данных к своему проекту.check-->
<!--//-->
<!--//Сделай CRUD (Create, Read, Update, Delete) для таблицы users. Пример реализации, можно посмотреть здесь и здесь.check-->
<!--//-->
<!--//Необязательные дополнительные задачи:-->
<!--//-->
<!--//Сделай CRUD (Create, Read, Update, Delete) для таблицы messages.chech-->
<!--//-->
<!--//-->

<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

<header>
    <div class="logo"><img src="img/logo.png" alt=""></div>
<div class="buttons">
    <a href="#" >login</a>
</div>
    <div class="buttons">
        <a href="views/register.html" >registration</a>

    </div>
    <div class="buttons">
        <a href="views/admin.php" >adminKo</a>

    </div>
</header>
<div class="container">
    <div class="left-menu">
        <ul id="user-list">
            <!--users-->
            <?php
            //'<img src="img/user.jpg" alt=""  > ' + user[i].username;

                foreach (readConn('users')as $value){
                    echo '<li><img id="liuser" src="img/user.jpg" alt=""  > '. $value['username'].'</li>';
                }
            ?>
        </ul>
    </div>
    <div class="right-menu">
        <div id="content">
            <ul id="message-list">
                <!--<li>message</li>-->
                <?php
                foreach (readConn('messages')as $value){
                    echo '<li><img src="img/user.jpg" alt=""  > '.$value['message'].'</li>';
                }
                ?>

            </ul>
        </div>
    </div>
    <div class="bottom-section">
        <input type="checkbox" checked="true">
        <button id="btnFind">find</button>
        <button>send</button>
        <input type="text" class="input-box">
        <script src="js/script.js"></script>
<!--        если мы зарегались - включить чат-->
<!--        <script src="js/user.js"></script>-->
<!--        <script src="js/messages.js"></script>-->
    </div>
</div>
</body>
</html>