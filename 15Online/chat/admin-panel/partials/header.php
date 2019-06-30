<!DOCTYPE html>
<html>
<head>
	<title>Admin panel</title>
	<link rel="stylesheet" type="text/css" href="/admin-panel/css/style.css">
</head>
<body>
	<?php
		//@todo if пользователь авторизован то выводить следующее -done
    if (isset($_SERVER['HTTP_COOKIE'])) {
    ?>
    <header>

        <div class="container">
            <nav>
                <?php if (isset($page) && $page == "users") { ?>
                    <a href="/admin-panel/modules/users" class="active">Users</a>
                <?php } else { ?>
                    <a href="/admin-panel/modules/users">Users</a>
                <?php } ?>

                <a href="/admin-panel/modules/messages/">Messages</a>
<!--                <a href="/admin-panel/friends.php">Friend list</a>-->
            </nav>


            <a class="btn" href="/admin-panel/logout.php">Logout</a>
        </div>
    </header>
<?php
}
// end if

?>