<?php  
	/**
	 * 
	 */
	class POST
	{
		function __construct($name = false, $value = false)
		{
			
		}

		public static function init($name = false) {
			if(!isset($_POST) || empty($_POST)) return false;
			if(!$name || (is_string($name) || is_int($name)) || (!isset($_POST[$name]) && empty($_POST[$name]))) return false;
			else return true;
		}

		public static function get($name = false) {
			if(!self::init()) return false;
			return $_POST[$name];
		}

		public static function get_all() {
			return $_POST;
		}

		public static function clear($name = false) {
			if(!$name || (is_string($name) || is_int($name))){
				unset($_POST);
				return true;
			}
			unset($_POST[$name]);
			return true;
		}
	}

?>