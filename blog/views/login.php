<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login Page</title>
	<link rel="stylesheet" href="../style/loginstyle.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet">
</head>
<body>
	
	<form class="box" action="../action/enterLogin.php" method="post">
		<h1>Login Page</h1>
		<input type="text" name="login" placeholder="Login">
		<input type="password" name="password" placeholder="Password">
		<input type="submit" name="" value="Login">
        <a href="registration.php">
            <h3>Зарегистрироваться?</h3>
        </a>
	</form>

</body>
</html>