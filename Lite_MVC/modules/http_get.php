<?php  
	/**
	 * 
	 */
	class GET
	{
		function __construct($name = false, $value = false)
		{
			
		}

		public static function init($name = false) {
			if(!isset($_GET) || empty($_GET)) return false;
			if($name AND ( ( !is_string($name) && !is_int($name) ) || (!isset($_GET[$name]) || empty($_GET[$name])))) return false;
			else return true;
		}

		public static function get($name = false) {
			if(!self::init($name)) return false;
			return $_GET[$name];
		}

		public static function get_all() {
			return $_GET;
		}

		public static function clear($name = false) {
			if(!$name || (is_string($name) || is_int($name))){
				unset($_GET);
				return true;
			}
			unset($_GET[$name]);
			return true;
		}
	}
?>