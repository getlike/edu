<?php  
	session_start();
	// Подключает все файлы из укаазаной директории
	function get_catalog($dir = false) {
		if(!$dir || !is_string($dir)) return false;

	    // Открываем каталог, получаем все названия имеющихся файловв ввнутри него
	    $catalog = opendir($dir);
	    while ($filename = readdir($catalog))
	    {  
	    	// Фильтр 
	    	if(($filename !== '.') AND ($filename !== '..')){
				// Подключаем файл
				include_once($filename = $dir."/".$filename);  
	    	}
	    }
	    // Закрываем работу с каталогом
	    closedir($catalog);
	}

	// Выброс на 404
	function r404($value = false){
		exit(include_once('404.php'));
	}

	// Выброс на 413
	function r413($value = false){
		exit(include_once('413.php'));
	}

	// Вывести файл
	function view($name = false, $data = false) {
		if($name && is_string($name)){
			$file = './templates/'.$name.'.php';
			exit(include($file));
		}
		else {
			r404();
		}
	}

	// JSON реквест для апи
	function request($status = false, $res = false, $error = false) {
		$_req = array(
			'status' => $status,
			'request' => $res,
			'error' => $error
		);
		die(json_encode($_req));
	}

?>