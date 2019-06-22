<?php
//@todo временно и нужно переделать
setcookie("user", 'user', time()+3600);
setcookie("id", '4', time()+3600);
header('Location: admin-panel');
?>