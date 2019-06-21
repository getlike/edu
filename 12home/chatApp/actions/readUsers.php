<?php
include 'db.php';

function readUser(){//вот что делает плохо сформированый запрос
    $list = [];
    $sql = 'SELECT * FROM users ';
//    echo $sql;
    $result = connect()->query($sql);

    while ($row = $result->fetch_assoc()) {
        array_push($list,$row);
    }
    connect()->close();

    echo '<pre>';
    print_r($list);
}
