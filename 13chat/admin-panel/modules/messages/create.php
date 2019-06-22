<?php
include '../../configs/db.php';

//$sql='UPDATE `users` SET `username` = \''.$username.'\', `email` = \''.$email.'\', `password` = \''.$password.'\'  WHERE `users`.`username` = \''.$oldname.'\';';
?>
<form action="../../action/addMessage.php" method="post">
    <p>username</p>

    <select name="user[]">
        <?php
        $sql = 'SELECT id,username FROM `users`;';
        $result = connect()->query($sql);
        while ($row = $result->fetch_assoc()) {
            ?>
            <option value="<?php echo $row['id'] ?>"> <?php echo $row['username'] ?></option>
        <?php } ?>
    </select>

    <p>text</p>
    <textarea name="message" id="" cols="30" rows="10"></textarea>

    <p>password</p>
    <input type="text" placeholder="password" name="password">

    <hr>
    <input type="submit">

</form>
