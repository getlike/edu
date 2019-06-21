<?php 
include"config.php"; //подключаем БД

if( isset( $_POST['username'] ) && isset( $_POST['password'] ) ) {  //проверка если есть отправка имени и пароля тогда выполняем код ниже
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')"; //Вставляем в таблицу users в столбцы username,.. и тд данные которые заполняли в форме
    $result = $conn->query($sql);// в переменную заносим результат запроса $sql
    // var_dump($result);

    if($result) { //если есть переменная резалт тогда присваеваем ТРУ  следуйщий текст
        setcookie("user_id", $conn->insert_id, time() + 3000, "/");  
        header('Location: login.php');
    }

}

?>

<!DOCTYPE html>
<html>
<header>
    <link rel="stylesheet" href="../css/reg.css">
</header> 

<body>
    <div class="app">
        <div class="container">
            <h2>Registration</h2>
            <form class="form" action="" method="post">
                <p>
                    <input type="text" class="input-field" name="username" placeholder=" Username" required>
                </p>
                <p>
                     <input type="email" class="input-field" name='email' placeholder=" Email" required/> 
                </p>
                <p>
                    <input type="password" class="input-field" name='password' id='password1' minlength="5"  placeholder=" Password" required/>
                </p>
                <p>
                    <input type="password" class="input-field" name='password' id='password2' minlength="5" placeholder="Confirm password" onkeyup='check();' required/>
                    <span id='message'></span>
                </p>

                <p>
                    <input class="btn-reg" type="submit" name="submit" value="Register"/>
                </p> 
               <button class='btn-l'><a href="login.php">Log In</a></button>   
            </form>
        </div>
    </div>
 <script src="../js/chekPass.js"></script>
 <script src="../js/form.js"></script>
</body>
</html>