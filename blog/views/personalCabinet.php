<?php
//это персональный кабинет доступный после прохождения регистрации
echo $_COOKIE["userLogin"];

?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>привет <?$_COOKIE["userLogin"];?></title>
</head>
<body>
<?php
?>

</body>
</html>
