<?php
//$sql='UPDATE `users` SET `username` = \''.$username.'\', `email` = \''.$email.'\', `password` = \''.$password.'\'  WHERE `users`.`username` = \''.$oldname.'\';';
include '../../partials/header.php';

?>
<div class="container">

    <form action="../../action/add.php" method="post" class="edit-message">
        <p>username</p>

        <input type="text" placeholder="name" name="username">

        <p>email</p>
        <input type="text" placeholder="email" name="email">

        <p>password</p>
        <input type="text" placeholder="password" name="password">

        <hr>
        <input type="submit">

    </form>
</div>
<!--/**-->
<!--* @сделать форму добавления нового пользователя -done-->
<!--* @после успешного добавления пользователя делать редирект на страницу со списком пользователей index.php - done-->
<!--*/-->