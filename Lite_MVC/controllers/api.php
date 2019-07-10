<?php 
	
	/**
	 * 
	 */
	class Route_api
	{
		
		function __construct()
		{
			# code...
		}

		public static function test()
		{
			echo '<pre>'; print_r('api test done!'); echo '</pre>';
			$res = GET::get_all();
			echo '<pre>'; print_r($res); echo '</pre>';
		}

		public static function quote() {
			// $data = GET::get('user');
			request(200);
		}
	}

?>