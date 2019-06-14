<?php
session_start();
if (!empty($_FILES['img']['tmp_name'])) {
    if (!empty($_FILES['img']['error'])) {
        $_SESSION['msg'] = 'ошибка фото';

        header('Location: ../views/newMessage.php');
    }
    if (($_FILES['img']['size'] > 2 * 1024 * 1024)) {
        $_SESSION['msg'] = 'большой очень';

        header('Location: ../views/newMessage.php');
    }
//много много проверок еще крутить(((
//        case
//}
    if (!move_uploaded_file($_FILES['img']['tmp_name'], '../img/imgMess/' . $_FILES['img']['name'])) {//что и куда грузим
        $_SESSION['msg'] = 'file not uploadet';
        header('Location: ../views/newMessage.php');
    }

    $_SESSION['msg'] = 'файл успешно загружен';//тут привязать к пользователю
    header('Location: ../views/newMessage.php');

} else {
    $_SESSION['msg'] = 'file not uploadet';
    header('Location: ../views/newMessage.php');

}

//
//Array
//(
//    [name] => image_2019-05-06_11-59-06.png
//[type] => image/png
//[tmp_name] => C:\OSPanel\userdata\temp\phpBCFF.tmp
//[error] => 0
//    [size] => 32820
//)