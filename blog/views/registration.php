<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Rega Page</title>
	<link rel="stylesheet" href="../style/regastyle.css">
</head>
<body>
	
	<form action="../action/registr.php" class="reg" method="post">
		<h1>Registrarion</h1>
		<div class="form_row">
			<label for="form_login">Login:</label>
			<input type="text" id="form_login" name="first_name">
		</div>
		<div class="form_row">
			<label for="form_email">email:</label>
			<input type="text" id="form_email" name="email">
		</div>
		<div class="form_row">
			<label for="form_password">password:</label>
			<input type="password" id="form_password" name="password">
		</div>
		<input type="submit" value="Registration">
        <a href="login.php">
            <h3>Вернуться на страницу входа?</h3>
        </a>

	</form>
<!-- <h1>Регистрация временно недоступна ¯\_(ツ)_/¯ </h1>
<img src="https://demotivatorium.ru/sstorage/3/2017/05/31141804456049/demotivatorium_ru_madam_ja_starij_soldat_136109.jpg" alt=""> -->
</body>
</html>