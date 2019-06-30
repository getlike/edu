<?php
function connect()
{
    $servername = "localhost";
    $username = "getlike";
    $password = "Ml150g62131";
    $dbname = "getlike";

// Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
return $conn;
// Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
}
?>