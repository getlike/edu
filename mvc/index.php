<?php  
	
	// Подключаем мадуль рабоыт с бд
	require 'config/db.php';
	require 'config/functions.php';
	
	// Подлючаем модули
    get_catalog('modules/');
	// Подключаем контроллеры
    get_catalog('controllers/');
	// -end- Loading routes

    // Получаем роуты и зависимости
    $_routes = include_once('routes.php');

    if($_SERVER['REQUEST_URI'] == '/') {
    	die(require_once('index.html'));
    }

    // Определяем контроллер
    foreach(array_reverse($_routes) as $_way => $_controller) {
    	// Находим зарегистрированую зависимость
    	if(strpos($_SERVER['REQUEST_URI'], $_way)) {
    		// Отделяем вложености от GET параметров
    		$_url = explode("/", $_SERVER['REQUEST_URI']);
    		$_url = explode("?", array_pop($_url));
    		// Читаем зарегистрированую зависимость по вложеностям
    		$_url_rout = explode("/", $_way);
    		// Проверяем соответствие влоожености зависимости с вложеностью URL
    		if($_url[0] != array_pop($_url_rout)) {
				// Перебрасываем на 404
    			r404();
    		}
    		// Получем название контроллера и его метода для данной зависимости
    		$_elems = explode(">", $_controller);
    		// Определяем имя контроллера
    		$class = 'Route_'.$_elems[0];
    		// Инициаализируем указаный контроллер
			$controller = new $class();
			// Вызываем указаный метод
			if(isset($_elems[1]) && !empty($_elems[1])){
				$controller->{$_elems[1]}();
				break;
				exit();
			} else {
				$controller->init();
				break;
				exit();
			}
    	} 
    }
    r404();

?>