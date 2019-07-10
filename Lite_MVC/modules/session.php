<?php  
	/**
	 * 
	 */
	class session
	{
		function __construct($name = false, $value = false)
		{
			if(!session_status()) {
				session_start();
			}
			if(!$_SESSION || empty($_SESSION)) {
				$_SESSION = new stdClass;
			}
			$this->set($name, $value);
		}

		public static function get($name = falses) {
			if(!$name || (!is_string($name) || !is_int($name))) return false;
			return $_SESSION->{$name};
		}

		public static function get_all() {
			return $_SESSION;
		}

		public static function set($name = false, $value = false) {
			if(!$name || !is_string($name)) return false;
			if(!$value) return false;
			
			return $_SESSION->{$name} = $value;
		}
	}

	$session = new session();

?>