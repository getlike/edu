<?php
include '../../../configs/db.php';

$page = "users";
include '../../partials/header.php';
?>

<div class="container">
	<a href="create.php" class="btn">CREATE NEW USER</a>
	<table id="customers">
		<tr>
	    <th>ID</th>
	    <th>Username</th>
	    <th>Email</th>
	    <th>Options</th>
	  </tr>
	  <?php 
	  	$sql = "SELECT * FROM users WHERE role!='admin'";
	  	$result = $conn->query($sql);
	  	while ($row = $result->fetch_assoc()) {
	  		//@todo current usen not show!!!!
	  		// if($row['role'] != 'admin') {
		  		?>
		  			 <tr>
					    <td><?php echo $row['id']; ?></td>
					    <td><?php echo $row['username']; ?></td>
					    <td><?php echo $row['email']; ?></td>
					    <td><a href="edit.php?id=<?php echo $row['id']; ?>">Edit</a> | <a href="delete.php?id=<?php echo $row['id']; ?>">Delete</a></td>
					  </tr>
		  		<?php
	  		// } 
	  	}

	  ?>
	</table>
</div>

<?php 
include '../../partials/footer.php';
?>
