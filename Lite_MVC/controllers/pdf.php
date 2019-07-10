<?php 
	
	/**
	 * 
	 */
	class Route_pdf
	{
		
		function __construct()
		{
			# code...
		}

		public static function init($value = false)
		{
		echo '<pre>'; print_r($value); echo '</pre>';

		}

		public static function quote_st($value = false) {
			$data = GET::get('user');
			if($data) {
				// Данные о пользователе
				$user = DB::query('SELECT * FROM `wp_su_users` WHERE `PID` = \''.$data.'\'');
				$user_info = DB::query('SELECT * FROM `wp_su_user_info` WHERE `user` = \''.$user[0]['id'].'\'');
				// Данные сметы
				$expenses_reports = DB::query('SELECT * FROM `wp_su_cb_expenses_reports` WHERE `user` = '.intval($user[0]['id']).'');
				if($user && $user_info && $expenses_reports) {
					view('quote', ['user'=>$user[0], 'user_info'=>$user_info[0], 'expenses_reports'=>$expenses_reports]);
				} else {
					r413();
				}
			} else {
				r404();
			}
		}

		public static function quote($value = false) {
			if($value) {
				// Данные о пользователе
				$quote = DB::query('SELECT * FROM `wp_su_quote_link` WHERE `PID` = \''.$value.'\'');
				$user = DB::query('SELECT * FROM `wp_su_users` WHERE `id` = \''.$quote[0]['user'].'\'');
				$user_info = DB::query('SELECT * FROM `wp_su_user_info` WHERE `user` = \''.$quote[0]['user'].'\'');
				// Данные сметы
				$expenses_reports = DB::query('SELECT * FROM `wp_su_cb_expenses_reports` WHERE `user` = '.intval($quote[0]['user']).'');
				if($user && $user_info && $expenses_reports) {
					view('quote', ['user'=>$user[0], 'user_info'=>$user_info[0], 'expenses_reports'=>$expenses_reports]);
				} else {
					r413();
				}
			} else {
				r404();
			}
		}
	}

?>