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
    $_SESSION['img'] = '../img/imgMess/' . $_FILES['img']['name'];

    header('Location: ../views/newMessage.php');

} else {//если все ок возвращаем сообщение и адрес картинки
    $_SESSION['msg'] = 'file not uploadet';


    header('Location: ../views/newMessage.php');

}

