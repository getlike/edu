<?php
include '../../configs/db.php';

$page = "users";
include '../../partials/header.php';
?>

<div class="container">
    <?php if ($_COOKIE['role'] == 'admin') { ?>
        <a href="create.php" class="btn">CREATE NEW USER</a>
    <?php } ?>
    <table id="customers">
        <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Options</th>
        </tr>
        <?php
        $sql = "SELECT * FROM users";
        $result = connect()->query($sql);
        while ($row = $result->fetch_assoc()) {
            ?>
            <!--            //$row['role'] != 'admin'&& $row['id']!=$_COOKIE['id']-->
            <tr>
            <td><?php echo $row['id']; ?></td>
            <td><?php echo $row['username']; ?></td>
            <td><?php echo $row['email']; ?></td>
            <td>
            <?php if ($_COOKIE['role'] == 'admin') {

                ?>

                <a href="#" onclick="return edit('<?php echo $row['username']; ?>','<?php echo $row['id']; ?>')">
                    Edit</a> |
                <a href="#" onclick="return deleted('<?php echo $row['username']; ?>','<?php echo $row['id']; ?>')">
                    Delete</a></td>
                </tr>
                <?php
            } else {
                echo 'you not admin(((( sory';
            }
        }
        ?>


    </table>
</div>
<script src="dlyaVovy.js"></script>
<?php
include '../../partials/footer.php';
?>
