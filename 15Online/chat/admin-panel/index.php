<?php
include 'configs/db.php';
include "partials/header.php";
/*
* @todo create login form and authorize - done
*/
// if(isset($_COOKIE['user_id']) && $_COOKIE['user_id'] != "") {
// ======================================

if (!isset($_SERVER['HTTP_COOKIE'])) {
    echo '<div class="container">';
    include 'partials/registration.php';
    echo '</div>';
}
else if ($_COOKIE['role']=='admin'){
    echo '<script>window.location.href = "modules/users/index.php";</script>';
}
else{
    echo 'that part of app in work yet';
}
/*
if user !isset(cookies) && user->role == "admin"
show login form 
else show admin panel



*/


include 'partials/footer.php';
?>

