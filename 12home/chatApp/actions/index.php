<?php
include 'db.php';
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/main.css">
    <title>adminka</title>
</head>
<body>

<h1>Пользователи</h1>
<table>
    <table class="rounded">
        <tbody>
        <tr>
            <th>username</th>
            <th>img</th>

            <th>email</th>
            <th>delete</th>

        </tr>


        <?php
        foreach (readUser() as $value) {
            echo '<tr>';


            echo '<th>';
            echo $value['username'];
            echo '</th>';
            echo '<th>';
            echo $value['password'];
            echo '</th>';

            echo '<th>';
            echo $value['email'];
            echo '</th>';

            echo '<th>';
            echo '<form action="deleteUser.php" method="post">';
            echo '<input type="submit"  value="'.$value['id'].'" name="id"> ';
            echo '</form>';
            echo '</th>';


echo '</tr>';
        }

        ?>



        </tbody>
    </table>

</table>
</body>
</html>