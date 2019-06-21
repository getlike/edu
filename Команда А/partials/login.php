<?php 
include"config.php";//подключаем БД
?>

<!DOCTYPE html>
<header>
    <link rel="stylesheet" href="../css/reg.css">
</header> 
<body>
    <div class="container">
        <h3>Log In</h3>
        <form class="form" action="" method="post"> <!--форма авторизації-->
            <p>
                <input type="text" class="input-field" name="username" placeholder=" Username" required>
            </p>
            <p>
                <input type="password" class="input-field" name='password' id='pass1' placeholder=" Password" required>
            </p>
            <p>
                <input class="btn-log" type="submit" name="submit" value="Log In">
            </p> 
           <button class="btn-r"><a href="reg.php">Registration</a></button> 
        </form>
    </div>

<?php 

if( isset( $_POST['username'] ) AND isset( $_POST['password'] ) ) {  //проверка если есть отправка имени и пароля тогда выполняем код ниже
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$username' and password='$password'";//делаем запрос в БД;

    $result = $conn->query($sql); // помещаем результат запроса в переменную
    // var_dump($result);
    $data = mysqli_fetch_assoc($result);
    
    $count = mysqli_num_rows($result);
     // Возвращает количество рядов результата запроса
    var_dump($count);

    if($count == 1) { //если 1 тогда даем сесию юзеру з соответствующим именем\

        setcookie("user_id", $data['user_id'], time() + 300000, "/");  
        // echo "cookie Tru!!";
      header('Location: main.php'); 
   }
    else {
        $reg_false = "Ошибка, не коректное имя"; //инече ошибка
    }
} 

?>
 <script src="../js/form.js"></script>
</body>
</html>