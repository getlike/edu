<?php  

	class DB 
	{
		// Настройки подключения
		public static $servername = "localhost";
		public static $username = "root";
		// public static $password = "%7R#Yd0Ryn@8Mq$3&Ml!r26EOldQbHxM";
		public static $password = "";
		public static $base = 'snagg';

		public static $conn;
		
		function init($servername = false, $username = false, $password = false, $base = false)
		{
			self::$servername = ($servername && is_string($servername)) ? $servername : self::$servername; 
			self::$username = ($username && is_string($servername)) ? $username : self::$username; 
			self::$password = ($password) ? $password : self::$password; 
			self::$base = ($base && is_string($base)) ? $base : self::$base; 

			self::$conn = new mysqli(self::$servername, self::$username, self::$password, self::$base);
			self::$conn->set_charset('utf8');
			if (self::$conn->connect_error) {
			    die(include_once('./2097.php'));
			} 
			return true;
		}

		public static function query($sql = false)
		{
			self::init();
			if($sql) {
				$result = self::$conn->query($sql);
				if( $result && $result->num_rows > 0 ) {
					$request = array();
					while( $row = $result->fetch_assoc() ) {
						$request[] = $row;
					}
					return $request;
				} else {
					return false;
				}
			} else {
				return false;
			}
		}
	}

?>