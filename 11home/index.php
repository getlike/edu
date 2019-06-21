<?php
include 'action/users.php';
?>
<!doctype html>
<html lang="ru"
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
<header>head</header>
<div class="main">
<!--    uesrs-->
    <div class="left-bar">
        <ul>
<!--            список пользователей-->
            <?php
            echo '<pre>';
            print_r(readUser());
            ?>
            <li>
                <div class="photo"><img src="views/img/simba.png" alt=""></div>
                <div class="data-user">
                    <p id="username"><a href="#">username</a></p>
                    <p id="lastmesage"><a href="#">lastmesage</a></p>
                </div>
            </li>


        </ul>
    </div>
    <div class="right-bar">
        <ul>
            <li>
                <div class="photo"><img src="views/img/simba.png" alt=""></div>
                <div class="data-user">
                    <p id="message"><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at corporis dignissimos, doloremque eum fugiat iste iusto libero maxime mollitia nam nesciunt provident quisquam repellendus similique sit sunt voluptate voluptatem?</a></p>
                </div>
            </li>


        </ul>
    </div>
    <div class="down-bar">
        <input type="submit" class="send-word">
        <input type="text" class="inner">
    </div>
</div>
<footer>footer</footer>
</body>
</html>