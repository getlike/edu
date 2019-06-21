<?php
include 'db.php';
foreach ($_POST as $value=>$item){
    deleteUser($item);
}
header('Location: index.php');




?>