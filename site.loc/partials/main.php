<?php 
include"config.php";//подключаем БД
?>

<!DOCTYPE html>

<html>

<head>
	<meta charset="utf-8">
	<title>Petior</title>
	<link rel="stylesheet" type="text/css" href="../css/main.css">
</head>

<body>

<?php 

if(isset($_COOKIE['user_id'])) {

	$sql = "SELECT * FROM users WHERE user_id =" . $_COOKIE['user_id'];
	$result = $conn->query($sql);
	
	if($result->num_rows > 0) {
		$user = $result->fetch_assoc();
		// echo "<br>";
		// var_dump($user['user_id']);	
	}
}
?>
<ul id='UL'>
<?php
   $sqlTasks = "SELECT * FROM tasks WHERE user_id = " . $_COOKIE['user_id'];

   $resultTasks = $conn->query($sqlTasks);

   if($resultTasks->num_rows > 0) {

   		while($row =  $resultTasks->fetch_assoc()) {
   				$li_id = $row['task_id'];
   				?>

   				<li data-id='<?php  echo $li_id; ?>'  onclick =<?php sqlQuery(); ?>> 
   					<?php echo  $row['task_name'];
   					?>
   				</li>
   				<?php 
   			}
 	}
 ?>
 </ul>

 <?php 

 	function sqlQuery() {
 		echo "123";   
 		// $sql = "SELECT * FROM tasks WHERE task_id =  "
 	}

 ?>
  	

<?php
if(isset($_POST['submit'])) { //если кнопка нажата тогда выполняем код ниже

//	$importance = $_POST['importance'];
//	$date = $_POST['date'];
//	$task = $_POST['task'];
	$userid = $user['user_id'];

	$taskname = $_POST['taskname'];
	$taskdescription = $_POST['taskdescription'];
	$taskimportance = $_POST['taskimportance'];
	$taskduration = $_POST['taskduration'];
	$taskdifficulty = $_POST['taskdifficulty'];
	$tasklifetime = $_POST['date'];
	$taskalarm = $_POST['alarm'];

	//,
	

$sql = "INSERT INTO `tasks` (`user_id`, `task_name`, `task_description`, `task_importance`, `task_duration`, `task_difficulty`,  `task_lifetime`, `task_alarm`)
 VALUES ('$userid', '$taskname', '$taskdescription', '$taskimportance', '$taskduration', '$taskdifficulty', '$tasklifetime', '$taskalarm') "; //вставляем в таблицу значения

$result = $conn->query($sql);// в переменную помещаем результат запроса
var_dump($result);


	if($result) {
		echo "Задача добавлена!!!";
	}
}

?>
	<script src="../js/main.js"></script>
</body>

</html>