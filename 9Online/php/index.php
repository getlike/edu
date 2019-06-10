<!DOCTYPE html>
<html>
<head>
	<title>PHP</title>
</head>
<body>


	<h1>
		<?php
			$a = 22;
			$b = 10;

			if($a < $b) {
				echo "<script>alert('a < b');</script>";
			} else {
				echo "string";
			}

			for($i = 0; $i < 10; $i = $i + 1) {
				echo "<br/>i - " . $i;
			}
			$arr = [23, 323,33, 332];
		

		?>
		<pre>
			<?php
			// var_dump($arr);
			?>
		 	// echo $a + $b; 
	 	</pre>

	</h1>

</body>
</html>
