<?php include '../php/db.php';
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="main.css">
    <title>Document</title>
</head>
<body>
<div class="users">
    <table>
        <tr>

            <th>id</th>
            <th>username</th>
            <th>password</th>
            <th>email</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
        <!--            php there-->
        <button></button>
        <?php


        foreach (readConn('users') as $value) {
            echo '<tr>
                                <td>' . $value['id'] . '</td>' .
                                '<td>' . $value['username'] . '</td>
                                <td>' . $value['password'] . '</td>
                                <td>' . $value['email'] . '</td>
                                <form action="../php/deleted.php" method="post">
                                <td><button type="submit">edit</button></td>
//                                <td><button type="submit" value="echo $name;?>">delete</button></td>
                                </form>
                           </tr>';
        }


        ?>

        <!--            <tr>-->
        <!--                <td></td>-->
        <!--                <td></td>-->
        <!--                <td></td>-->
        <!--                <td></td>-->
        <!--                <td></td>-->
        <!--            </tr>-->
    </table>

</div>
</body>
</html>
