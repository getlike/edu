<!DOCTYPE html>
<html>
<head>
	<title>JSON TEST</title>
</head>
<body>
	<div id="app"></div>

	<script type="text/javascript">
		var app = document.querySelector("#app");

		var xml = new XMLHttpRequest();
			xml.open('GET', 'http://chat.local/api/users.php?page=friends', false);
			xml.send();

		console.dir(JSON.parse(xml.response));


	</script>

</body>
</html>