<?php
include '../../configs/db.php';
//echo $_GET['id'];
//данные пользователя


/**
 * @todo получить пользователя по get параметру id
 * @todo сделать форму редактирования данных пользователя
 * @todo после успешного обновления данных пользователя оставить на этой же странице
 */

$list = readUser($_GET['id']);
function readUser($id)
{
    $sql = 'SELECT * FROM `users` WHERE id =' . $id;
    $result = connect()->query($sql);
    $row = $result->fetch_assoc();
//    echo $row['email'];
    return $row;
    connect()->close();
}


?>

<!--//инпуты-->
<!--//[id] => 3 [username] => user1 [photo] => /media/cat.jpg [email] => user@i.ua [password] => wassword [role] => user-->
<form action="../../action/update.php" method="post">
    <p>username</p>
    <input type="text" name="comment" size="40"
           value="<?php echo $list['username'] ?>"
           readonly>
    <input type="text" value="<?php echo $list['username'] ?>" name="username">

    <p>email</p>
    <input type="text" value="<?php echo $list['email'] ?>" name="email">

    <p>password</p>
    <input type="text" value="<?php echo $list['password'] ?>" name="password">

    <hr>
    <input type="submit">

</form>
