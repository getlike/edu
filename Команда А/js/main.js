var gameField = document.querySelector(".game_field");
var plane = document.querySelector(".airplane");
plane.style.display = "none";

//функциональные переменные
var score = 0;
var i = 0;

createStartGame();

function createStartGame(elem) { //меню старта
    console.log("func startGame");
    var start = document.createElement("div");//блок старта
    start.className = "start";
    gameField.appendChild(start);

    var btnStart = document.createElement("button");//кнопка старта игры
    btnStart.className = "btnStart";
    btnStart.innerText = "Start Game?";
    start.appendChild(btnStart);
    btnStart.onclick = function () {//событие при нажатии
        createScoreBlock();
        createEnemy();
//        enemyMove();
        createLifeBlock();
        plane.style.display = "block";
        start.remove();

        //listenKey();

    }

}

//да простят меня потомки
//===============================
//клавиши без пропуска
//===============================
var state = true;
var counter = 0;

var pressed = [1024];

function Down(e) {
    cxc = e.keyCode;
    pressed[cxc] = 1;
    if (cxc == 27) {
        state = false;
    } //escape
}

function Up(e) {
    cxc = e.keyCode;
    pressed[cxc] = 0;
}

document.onkeydown = function (event) {
    Down(event);
};
document.onkeyup = function (event) {
    Up(event);
};


//------------------------
var Loop = function () {
    var s = "";
    if (state) {
        for (var j = 37; j < 41; j++) {
            s = s + " " + parseInt(pressed[j], 10);
        }

        move(s);

        counter = counter + 1;

        gLoop = setTimeout(Loop, 1000 / 50);
    }
};

Loop();
//===============================
//клавиши без пропуска
//===============================
// document.onkeydown = function (event) {
//
//
// 	console.dir(event.key);
// 	shotRemove(); //запускаэ функ видалення пострілів при будь якій дії
// 	if (event.key == " ") {//при натисканні на "пробел"
// shot();
// 	}
// move(event)
// }

function move(s) {
    //0100 up
    //0001 down
    //1000 left
    //0010 right
    console.log(s)
    if (plane.offsetTop > 0 && s == ' 0 1 0 0') { //вверх піднявся//хуясе он резкий
        plane.style.top = plane.offsetTop - 30 + "px";
    }
    if ((plane.offsetTop < gameField.clientHeight - plane.clientHeight) && (s == ' 0 0 0 1')) { //вниз опустився
        plane.style.top = plane.offsetTop + 30 + "px";
    }
    // if ((plane.offsetLeft < gameField.clientWidth - plane.clientWidth) && (event.key == "ArrowRight")) {//рух вправо
    // 	plane.style.left = plane.offsetLeft + 30 + "px";
    // }
    // if ((plane.offsetLeft > 0) && (event.keyCode == "ArrowLeft")) {//рух вліво
    // 	plane.style.left = plane.offsetLeft - 30 + "px";
    // }
}

function shot() {//создать выстрел
    var shotBlock = document.createElement("div"); //створили елемент
    shotBlock.className = "shot";
    gameField.appendChild(shotBlock);
    shotBlock.style.top = plane.offsetTop + plane.clientHeight / 2 - 5 + "px"; //позиція для м'ячика
    shotBlock.style.left = plane.offsetLeft + plane.clientWidth + "px";
    moveShotBlock(shotBlock);
}

//движение пули
function moveShotBlock(event) {//event = "пуля".
    var scoreBlock = document.querySelector(".score");
    var enemyBlock = document.querySelector(".enemyBlock");
    shotInterval = setInterval(function () {
        event.style.left = event.offsetLeft + 10 + "px";// кожну секунду добавляє по значенню, щоб рухалося
        if (event.offsetLeft == (enemyBlock.offsetLeft + enemyBlock.clientWidth) && (enemyBlock.offsetTop)) {
            enemyBlock.remove();
            score = score + 1;
            scoreBlock.innerHTML = "<h2>Score: <span>" + score + " </span></h2>";
            if (score >= 7) {
                clearInterval(shotInterval);
                enemyBlock.remove();
                event.remove();
                plane.remove();
                createEndGame();
            }
        }
        shotRemove(); //та видаляє
    }, 1);
}

function shotRemove() { //фун-я видалення пострілів
    var removeElements = document.querySelectorAll(".shot"); //вибрати дівчик шот
    for (var i = 0; i < removeElements.length; i++) { //цикл по прикладу на сайті
        if (removeElements[i].offsetLeft >= gameField.clientWidth) {
            removeElements[i].remove()
        }
    }
}

function createEndGame() { //меню оканчания игры
    var end = document.createElement("div"); //блок окончания игры
    end.id = "end";
    end.innerHTML = "<p>You Win</p>"; //результат игры (или You Win!)
    gameField.appendChild(end);

    var btnEnd = document.createElement("button");//кнопка перезапуска
    btnEnd.innerText = "Restart Game?";
    end.appendChild(btnEnd);
    btnEnd.onclick = function () {
        location.reload();
    }
}

//Ф-ція створення блоку Очків
function createScoreBlock() {
    var score = document.createElement("div");
    score.className = "score";
    score.innerHTML = "<h2>Score: <span>0</span></h2>";
    gameField.appendChild(score);
}

function createLifeBlock() { //блок права на ошибку
    var lifeBlock = document.createElement("div"); //контейнер блока
    lifeBlock.id = "lifes";
    lifeBlock.innerText = "Lifes: "; //вложеный текст в контейнер
    gameField.appendChild(lifeBlock);
    console.log(lifeBlock);
    var lifeSpan1 = document.createElement("span"); //1-я попытка
    lifes.appendChild(lifeSpan1);

    var lifeSpan2 = document.createElement("span"); //2-я попытка
    lifes.appendChild(lifeSpan2);

    var lifeSpan3 = document.createElement("span"); //3-я попытка
    lifes.appendChild(lifeSpan3);
}

//обьявляем функцию!!!

function createEnemy() {
    var enemyBlock = document.createElement("div");
    enemyBlock.className = ("enemyBlock");
    //console.dir(enemyBlock);
    gameField.appendChild(enemyBlock);
    // создания врага слева
    enemyBlock.style.left = gameField.clientWidth - 0 + "px";
    enemyBlock.style.top = random(50, gameField.clientHeight) + "px";//тут виправив Ростислав
}

// var enemyBlock = document.querySelector(".enemyBlock");
// if (enemyBlock == null) {
//		createRandomEnemy();
//	}

createRandomEnemy();

function createRandomEnemy() {
    while (i < random(7, 10)) {
        createEnemy();
        i = i + 1;
    }
}

function enemyMove() {//ф-ция движения врага
    var IntervalLeft = setInterval(function () {
        var block = document.querySelector(".enemyBlock");
        if (block.offsetLeft >= 0) {
            block.style.left = block.offsetLeft - 2 + 'px';
        } else {
            block.remove();//Удаление преграды когда она достигает 0 координаты
            createEnemy();
        }
    }, 10);
    enemyMoveUp();
}

function enemyMoveUp() {//ф-ция движения врага
    var IntervalTop = setInterval(function () {
        var block = document.querySelector(".enemyBlock");
        block.style.top = block.offsetTop - 2 + "px";
        if (block.offsetTop <= 0) {
            clearInterval(IntervalTop);
            enemyMoveDown();
        }
    }, 10)
}

function enemyMoveDown() {//ф-ция движения врага
    var IntervalDown = setInterval(function () {
        var block = document.querySelector(".enemyBlock");
        block.style.top = block.offsetTop + 2 + "px";
        if (block.offsetTop >= gameField.clientHeight - block.clientHeight) {
            clearInterval(IntervalDown);
            enemyMoveUp();
        }
    }, 10)
}

//Рандом
function random(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
