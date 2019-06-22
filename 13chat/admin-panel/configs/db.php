<?php
function connect()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "webchat";

// Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
return $conn;
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
}
?>