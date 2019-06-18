<?php
include '../config/db.php';
//со стандартной фоточкой
//createUserMessage('users',$arr=['имя','адресФото','электронка','пароль']);
$name=$_POST['first_name'];
$email=$_POST['email'];
$password=$_POST['password'];
$req =createUserMessage('users',$arr=['username'=>$name,'email'=>$email,'password'=>$password]);
//вернуть пользователя с куками если соединение прошло удачно
if (req){

    header('Location: /views/login.php');
}

?>

<?php function generateCode($length = 8)
{
    $chars = 'abdefhiknrstyz1234567890';
    $numChars = strlen($chars);
    $string = '';
    for ($i = 0; $i < $length; $i++)
    {
        $string .= substr($chars, rand(1, $numChars) - 1, 1);
    }
    return $string;

}
?>