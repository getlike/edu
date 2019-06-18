<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" type="text/css" href="../style/page_two.css">
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet">

</head>
<body>
	
	<div class="home">
		<header>
			<a href="/" class="logo_img">
				<img src="../img/icon.png">
			</a>
            <?php
            //если есть кука
            if (isset($_COOKIE["userLogin"])){
                echo '<a href="personalCabinet.php "><img src="../img/icons/icon_user.svg" alt=""></a>';
            }
            else{
                echo '<a href="login.php"><img src="../img/icons/icon_user.svg" alt=""></a>';
            }

            ?>

		</header>
        <?php 
                            include '../config/db.php';
                $arrMessage=readUserMessage('message');
         ?>
		<div class="main_text">
			<div class="left" >
				<div class="search_left">
					<img src="../img/icons/icon_search.svg" alt=""><input type="search" placeholder="Search">
				</div>
                <div class="minicontent">
                    <ul>
                        <?php foreach ($arrMessage as $key => $mesagge) {
                            echo '<li class="licontent" name="'.$mesagge['head'].'">'.$mesagge['head'].'</li>';
                        } ?>
                        
                    </ul>
                </div>
			</div>
			<div class="right">
                <?php
                //прочитать сообщения из бд через напрямую через bd.php
                //заполнять по мере чтения из бд


             /*

)*/
             foreach ($arrMessage as $value){


                 echo '<div class="message">'.
                     '<h1>'.$value['head'].'</h1>'.
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

		<footer><img src="../img/foot.jpg" class="footerImg" alt=""></footer>
	</div>
    <script src="../js/leftmenu.js"></script>
</body>
</html>