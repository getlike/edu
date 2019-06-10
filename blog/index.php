<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="style/rostyk.css">
</head>
<body>
	
	<div class="home">
		<header>
			<a href="rost.html" class="logo_img">
				<img src="img/icon.png">
			</a>
			<div class="nav">
				<a href="views/login.php "><img src="img/icons/icon_user.svg" alt=""></a>
			</div>
		</header>
		<div class="main_text">
			<div class="left" >
				<div class="search_left">
					<img src="img/icons/icon_search.svg" alt=""><input type="search" placeholder="Search">
				</div>
			</div>
			<div class="right">
				<input type="text" value="text">
                <?php
                //прочитать сообщения из бд через /action/readMessage.php
                //todo поместить в масив(?) и заполнить страницу по самое помидоро

                include 'config/db.php';
                $arrMessage=readUserMessage('message');
             /*

)*/
             foreach ($arrMessage as $value){
                 echo '<div class="message">'.
                     '<h1>Заголовок</h1>'.
                     '<hr>'.
                     '<img src="'.$value['picture'].'" alt="" id="pictMess" align="left">'.
                     '<p>'.$value['message'] . '<br>'.'</p>'.
                     $value['datatime'];
//                     echo $value['message'] . '<br>';
                     echo '</div>';
                     //todo куда засунуть автора?
//
             }
                ?>


                </div>
			</div>
		</div>

		<footer>team B</footer>
	</div>

</body>
</html>