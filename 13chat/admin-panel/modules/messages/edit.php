<?php

include '../../configs/db.php';
include '../../partials/header.php';

$list = readMessage($_GET['id']);
function readMessage($id)
{
    $sql = 'SELECT message FROM messages WHERE id =' . $id;
    $result = connect()->query($sql);
    $row = $result->fetch_assoc();
    return $row;
    connect()->close();
}


?>
<div class="container">

    <form action="../../action/updateMessage.php" method="post">
        <p>позиция вашего сообщения в наших закромах :
            <input type="text" name="id" readonly value="<?php echo $_GET['id'] ?>">
        </p>
        <textarea name="message" id="" cols="30" rows="10"><?php echo $list['message'] ?></textarea>
        <input type="submit" value="принять изменения">

    </form>
</div>