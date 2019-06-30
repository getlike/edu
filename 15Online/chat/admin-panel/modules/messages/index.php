<?php
include '../../configs/db.php';

//$page = "users";
include '../../partials/header.php';
?>

<div class="container">
    <?php if ($_COOKIE['role'] == 'admin') { ?>
        <a href="create.php" class="btn">CREATE NEW NEW MESSAGE</a>
    <?php } ?>
    <table id="customers">
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Text</th>
            <th>created</th>
            <th>Options</th>
        </tr>
        <?php
        //        $listU = [];
        //        $sqlU = "SELECT id,username FROM users";
        //        $resultU = connect()->query($sqlU);
        //        while ($rowU = $resultU->fetch_assoc()) {
        //            array_push($listU, $rowU);
        //        }
        //        connect()->close();
        //
        //оставил что бы помнить как делать нельзя

        $sql = "SELECT * FROM users,messages WHERE users.id=user_id";
        $result = connect()->query($sql);
        while ($row = $result->fetch_assoc()) {
            //@todo current usen not show!!!!

            ?>
            <tr>
                <td><?php echo $row['id']; ?></td>

                <td>

                    <?php echo $row['username']; ?>
                </td>
                <td><?php echo $row['message']; ?></td>
                <td><?php echo $row['created']; ?></td>
                <td><a href="edit.php?id=<?php echo $row['id']; ?>">Edit</a> | <a
                            href="delete.php?id=<?php echo $row['id']; ?>">Delete</a></td>
            </tr>
            <?php

        }
        connect()->close();

        ?>
    </table>
</div>

<?php
include '../../partials/footer.php';
?>
