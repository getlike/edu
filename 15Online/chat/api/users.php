<?php
header('Content-Type: text/html');
header('Access-Control-Allow-Origin: *');

include '../configs/db.php';


// Получить всех друзей выбранного пользователя
function getFriends($user_id, $conn) {

	$sql = "SELECT * FROM friends WHERE user_1=$user_id";
	$result = $conn->query($sql);
	$friends = [];	
	if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {

			$sql = "SELECT * FROM users WHERE id=" . $row['user_2'];
			$resultFriend = $conn->query($sql);
			if($resultFriend->num_rows > 0) {
				$friend = $resultFriend->fetch_assoc();
				$friends[] = [
					"id" => $friend['id'],
					"username" => $friend['username'],
					"photo" => $friend['photo'],
					"email" => $friend['email']
				];
			}
		}
	}

	echo json_encode(["friends" => $friends]);
}
/*
* @todo как оптимизировать код, убрать дублирование пользователей
*/
function searchUser($text, $conn) {
	$sql = "SELECT * FROM `users` WHERE `username` LIKE '%" . $text . "%'";
	$result = $conn->query($sql);
	$users = [];	

	if($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$users[] = [
				"id" => $row['id'],
				"username" => $row['username'],
				"photo" => $row['photo'],
				"email" => $row['email']
			];
		}
	}

	echo json_encode(["users" => $users]);
}

function addFriend($current_user, $user_id, $conn) {
	$sql = "INSERT INTO `friends` (`user_1`, `user_2`, `status`) VALUES ('$current_user', '$user_id', 'true')";
	
	if ($conn->query($sql) === TRUE) {
	    echo json_encode(["status" => "ok"]);
	} else {
	    echo json_encode(["status" => "error"]);
	}
}

/*
* @todo сделать через switch
*/
if(isset($_GET['page']) && $_GET['page'] == 'friends') {
	getFriends($_GET['current_user'], $conn); // !!! $conn !!! -> ** как сделать $conn глобальной
}

if(isset($_GET['page']) && $_GET['page'] == "search" && isset($_GET['search'])) {
	searchUser($_GET['search'], $conn);
}


if(isset($_POST['page']) && $_POST['page'] == 'add_friend') {
	addFriend($_POST['current_user'], $_POST['user_id'], $conn);
}

