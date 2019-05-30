var btnStart = document.querySelector("#btn-start");
var gameField = document.querySelector(".game-field");
var player = document.querySelector("#player");

// функциональные переменные
var scoreBlock = null; // блок очков
var score = 0; //очки
var lifes = 3;//жизни
var sizeBall = 100;//размер игрового шара
var lifeBlock = null;//блок с жизнями
var status = "on";//свичер


btnStart.onclick = function() {//ф. нажатие по кнопке

	var startBlock = document.querySelector(".start-block");//находим старт блок
	startBlock.style.display = "none";//скрываем


	startGame();//дёргаем функцию
}

// Start Game: создаем все поля в игровом поле 
function startGame() {
	// Create timer block
	createTimerBlock();

	// create score block
	createScoreBlock();
//создаем блок для отображения жизней
	createLifesBlock();
	//создаем шар
	createBall();
}

function createTimerBlock() {//отображение таймера
	var timerBlock = document.createElement("div");//создаем элемент
	timerBlock.id = "timer";//даем элементу айдишник
	timerBlock.innerHTML = "<h2>Timer: <span>5</span></h2>";//внедряем значение
	
	gameField.appendChild(timerBlock);//помещаем созданый блок в основное поле
}

function createScoreBlock() {//очки
	// создаем блок div с id score
	var block = document.createElement("div");
		block.id = "score";
	// создаем заголовок h2
	var h2 = document.createElement("h2");
		h2.innerText = "Score: ";
	// помещаем заголовок h2 в блок div с id score
	block.appendChild(h2);
	// помещаем блок div с id score в игровое поле
	gameField.appendChild(block);
	// создаем span для счета
	scoreBlock = document.createElement("span");
	scoreBlock.innerText = "0";

	h2.appendChild(scoreBlock);
}

function createLifesBlock() {//блок с жизнями
	if(lifeBlock == null) {//если такого блока еще нет
		lifeBlock = document.createElement("div");//создаём его
	} else {//иначе
		lifeBlock.innerHTML = "";//вставляем пустую строку
	}

	lifeBlock.id = "lifes";//привязываем айдишник

	gameField.appendChild(lifeBlock);//помещаем созданый блок в основное поле
	var i = 0;//счетчик
	while(i < lifes) {//пока i меньше количества жизней
		var span = document.createElement("span");//создаем стройчный эл
		lifeBlock.appendChild(span);//впихиваем все в блок
		i = i + 1;//приращиваем счетчик
	}
}


function createBall() {
	if(status == "off") {
		return 0;
	}
	var ball = document.createElement("div");
	ball.className = "ball";
	/*
	1. Получить случайное число от 1 до 3(1 - слева, 2 - снизу)
	2. Проверяем откуда вылетаем
	3. получаем случайное число координаты в зависимости от места вылета

	*/
	var place = random(1, 3);//случайная позиция вокруг игрового поля для вылета
	if(place == 1) {
		ball.style.left = "-200px";//слева
		ball.style.top = random(0, 400) + "px;"
	} else if(place == 2) {
		console.log(place);

		ball.style.left = random(0, 400) + "px";
		ball.style.top = "500px"//снизу
	} else {
		ball.style.left = "500px";//справа
		ball.style.top = random(0, 400) + "px;"
	}
	
	
	setTimeout(function(){//помещаем через 0,5 сек в поле
		// end position
		ball.style.left = random(0, 300) + "px";
		ball.style.top = random(0, 300) + "px";
	}, 500);
	setTimeout(function() {
		downBall(ball);//опускаем вниз
	}, 1000)
	

	ball.style.background = "rgb(" + random(0, 255) + ", " + random(0, 255) + "," + random(0, 255) + ")"; // цвет шара рандомно

	sizeBall = sizeBall - 10;
	
	gameField.appendChild(ball);
}

/*
* @todo если шарик упал то отнять жизнь 
* @todo если жизней нет закончить игру
*/
function downBall(ball) {//опускаем шар
	ball.style.top = ball.offsetTop + 30 + "px";
	
	if(ball.offsetTop >= 420) {//если ниже заданой позиции
		ball.remove();//удаляем шар
		checkBalls();//чекаем
		lifes = lifes - 1;//минусуем жизни
		createLifesBlock();//лезем в блок жизни и чудим там магию
		if(lifes <= 0) {
			endGame();//если жизни кончились - заканчиваем игру
		}
	} else {
		setTimeout(function() {
			downBall(ball);//инача опускаем потихонечку шар
		}, 9.81)
	}
	
}

function random(min, max) {//самый неудобный рандом из всех
    var rand = min + Math.random() * (max + 1 - min);
    	rand = Math.floor(rand);

    return rand;
}


function endGame() {
	status = "off";//выключаем все. Чуствуем себя Чубайсом
}

// резать шарики
gameField.onmousemove = function(e) {//если мышке наступить на левый глазик
	var element = e.target; // элемент

	if(element.className == "ball") {//если под стрелочкой попался шарик
		element.style.width = "0";//делаем худым
		element.style.height = "0";//и очень очень низким
		element.className = "ball-kill";//убиваем именем css и королевы Англии

		scoreBlock.innerText = +scoreBlock.innerText + 1; //даём 0чко
		player.play();//играем игры
		setTimeout(function() {
			element.remove();//удаляем элемент и проверям есть ли что еще убить

			checkBalls();
			
		}, 500);
	}
}

function checkBalls() {
	// проверяем есть ли в ировом поле шарики
	var ballSelect = document.querySelector(".ball");
	// если их нет запускаем новые шары
	if(ballSelect == null) {
		var i = 0;

		while(i < random(1, 5)) { // правда/да
			createBall();//дай нам больше шариков (голосом из warcraft)
			i = i + 1;
		}
	}
}




