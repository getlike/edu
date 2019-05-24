var moveNow = 'right';//следим за нажатием клавишами
var sizeBall = 5;
var scoreCounter = 0;
var secondsRemaining = 0;
var minuteRemaining = 0;
var timerId;
//работаем с статичными элементами верстки
var gameField = document.querySelector('.game-field');
var scoreField = document.querySelector('.score')
//var scoreTime = document.querySelector('.time')//todo
var btnStart = document.querySelector('.button');


btnStart.onclick = function () {
    startGame();
};

function startGame() {
    gameField.children[0].style.background = '#fffdfdc7';//подложка белая
    setTimeout(function () {
        run()
    }, 500);//запуск основного функционала
    timerGame();
}

function run() {
    removeChildren(gameField);
    //variables
    //следим за нажатием клавишами
    var sizeBall = 5;
    var scoreCounter = 0;
    var secondsRemaining = 0;
    var minuteRemaining = 0;
    //variables
    cracken();
    createBall();
    sound8Bit();//lets Rock
}

//тут создают героев
function cracken() {

    var outerBlock = document.createElement('div');//рамка для отлова положения героя
    outerBlock.className = 'pacmanOuter';

    var block = document.createElement('div');
    block.className = "pacman";
    if (block.offsetParent != null) {//костыль
        block.offsetParent = null;
    }
    console.dir(block);

    outerBlock.appendChild(block);//матрёшкина радость

    gameField.appendChild(outerBlock);

    setInterval(function () {//скорость передвижения героя.
        move(outerBlock)

    }, 25);//todo сьесть волшебый шарик и побежать аки рысь

}

//движние игрока
function move(gamer) {

    omnom(gamer);//жрем еду
    // }
    //пусть колобок побегает

    if (gamer.offsetLeft < gameField.clientWidth - gamer.clientWidth && moveNow == 'right') {//если граница поля справа и герой смотрит вправо
        gamer.style.left = gamer.offsetLeft + 2 + 'px';
        gamer.style.transform = 'scale(1, 1)';

        if (gamer.offsetLeft == gameField.clientWidth - gamer.clientWidth) {//если дошел до граници
            moveNow = 'left';//крутим влево

        }
    } else if (gamer.offsetLeft > 0 && moveNow == 'left') {
        gamer.style.transform = 'scale(-1, 1)';


        gamer.style.left = gamer.offsetLeft - 2 + 'px';//чертовщина какая то.
        if (gamer.offsetLeft <= 0) {
            moveNow = 'right';

        }
    } else if (gamer.offsetTop < gameField.clientHeight - gamer.clientHeight && moveNow == 'down') {
        gamer.style.top = gamer.offsetTop + 2 + 'px';
        gamer.style.transform = 'rotate(90deg)';
        if (gamer.offsetTop >= gameField.clientHeight - gamer.clientHeight) {

            moveNow = 'up'
        }
    } else if (gamer.offsetTop >= 0 && moveNow == 'up') {
        gamer.style.top = gamer.offsetTop - 2 + 'px';//чертовщина какая то.
        gamer.style.transform = 'rotate(270deg)';
        if (gamer.offsetTop <= 0) {
            moveNow = 'down'
        }
    }
}


//клавиатура
document.onkeydown = function (e) {//слушаем клавиатуру и крутим героем через переменную
    switch (e.key) {
        case 'ArrowLeft':
            moveNow = 'left';

            break;
        case 'ArrowRight':
            moveNow = 'right';//нужно как то крутить головой

            break;
        case 'ArrowDown':
            moveNow = 'down';
            break;
        case 'ArrowUp':
            moveNow = 'up';//нужно как то крутить головой

            break;
    }
}

function omnom(gamer) {//получаем координаты пакмана (4)
//получить все шарики
    //прогнать масив на координаты О_О
    //чистое зло(((
    var bals = document.querySelectorAll('.ball');//получаем в масив ВСЕ шарики
    for (var i = 0; i < bals.length; i++) {//проганяем весь масив, это плохо но подругому я не нагуглил
        if (gamer.offsetTop <= bals[i].offsetTop && gamer.offsetLeft <= bals[i].offsetLeft) {
            //если нижняя и правая граница пакмана больше гранци шарика
            //================================
            //МАГИЯ
            //================================
            if (gamer.offsetTop + gamer.offsetHeight >= bals[i].offsetTop + bals[i].offsetHeight && gamer.offsetLeft + gamer.offsetWidth >= bals[i].offsetLeft + bals[i].offsetWidth) {
                soundEat();

                bals[i].remove();
                score()//боюсь функция вырастет, так тчо выношу её


                createBall();//
                if (bals.length == 1) {//проверяем количество несьеденых шариков
                    reload();//вызвать попап
                }
            }
            //================================
            //МАГИЯ
            //================================
        }
        //сожрать и рамдомно выбросить шарик
        //увеличить коин
    }
}

// сьедобные шарики
//todo шарики появляются с увелечением от 0 до sizeBall//done
function createBall() {//создаем мячики

    var ball = document.createElement('div');
    ball.className = 'ball';
    ball = randomPosition(ball);

    ball.style.background = "rgb(" + randomInteger(0, 255) + "," + randomInteger(0, 255) + "," + randomInteger(0, 255) + ")";//разноцветненько

    ball.style.width = sizeBall + 'px';
    ball.style.height = sizeBall + 'px';

    gameField.appendChild(ball);
}


//общее
function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
var str=null;
function sound8Bit() {//промах

    if (str==null) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'sound/cracken.mp3'; // Указываем путь к звуку "клика"
        audio.volume = 0.5;
        audio.loop = true;
        audio.play();
    }
}

//звук боли
function soundWrong() {//промах
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'sound/dohs.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

function soundEat() {
    var audio = new Audio();
    audio.src = "sound/eat.mp3";
    audio.autoplay = true;
}

//вспомогательная для создания еды
function reload() {
    for (var i = 0; i < 10; i++) {
        createBall();
    }
    enemies();
    enemies();
}


function score() {
    scoreCounter++;
    if (scoreCounter % 2 == 0) {
        destroyEnemy();//пересоздаём призрака
    }
    scoreField.innerHTML = `<h2> ${scoreCounter} </h2>`;
}

function destroyEnemy() {
    var ghost = document.querySelector('.ghostOuter');
    if (ghost != null) {
        ghost.remove();
        enemies();
    }
}

function randomPosition(div) {
    div.style.left = randomInteger(5, gameField.offsetWidth - 35) + 'px';//рандомно в пределах поля
    div.style.top = randomInteger(5, gameField.offsetHeight - 35) + 'px';

    return div;
}

/*
* собственно злодей
*/
function enemies() {//все по аналогии с героем
    var ghostOuter = document.createElement('div');
    ghostOuter.className = 'ghostOuter';

    ghostOuter = randomPosition(ghostOuter);

    var ghost = document.createElement('div');
    ghost.className = 'ghost';
    ghost.style.borderColor = 'red';


    var eyes = document.createElement('div');
    eyes.className = 'eyes';

    ghost.appendChild(eyes);

    ghostOuter.appendChild(ghost);

    gameField.appendChild(ghostOuter);

    setInterval(function () {
        moveEnemy(ghostOuter)

    }, 100);//todo со скоростью нужно еще эксперементировать done
}

//шевелим злодеями
function moveEnemy(zlodey) {

    //движение по диагоналям
    var target = document.querySelector('.pacmanOuter');//гонимся за главны героем
    //дать герою прикурить
    if (target) {
        findHero(zlodey, target);

        if (zlodey.offsetTop > target.offsetTop && zlodey.offsetLeft > target.offsetLeft) {//следуем координатам героя
            //двигаем злодеем лево верх
            zlodey.style.left = zlodey.offsetLeft - 3 + 'px';
            zlodey.style.top = zlodey.offsetTop - 3 + 'px';
        }
        if (zlodey.offsetTop < target.offsetTop && zlodey.offsetLeft < target.offsetLeft) {
            //двигаем злодеем вправо вниз

            zlodey.style.left = zlodey.offsetLeft + 3 + 'px';
            zlodey.style.top = zlodey.offsetTop + 3 + 'px';
        }

        //обратные диагонали
        if (zlodey.offsetTop > target.offsetTop && zlodey.offsetLeft < target.offsetLeft) {
            //двигаем злодеем вправо верх
            zlodey.style.left = zlodey.offsetLeft + 3 + 'px';
            zlodey.style.top = zlodey.offsetTop - 3 + 'px';
        }
        if (zlodey.offsetTop < target.offsetTop && zlodey.offsetLeft > target.offsetLeft) {
            //двигаем злодеем влево вниз
            zlodey.style.left = zlodey.offsetLeft - 3 + 'px';
            zlodey.style.top = zlodey.offsetTop + 3 + 'px';
        } else {

        }
    }
    //todo движение по прямым


}

//давайте поможем найти героя
function findHero(zlodey, gamer) {
    //если я их не удалил
    //проверяем где находится злодей
    //если не снизу, не сверху не слева не справа
    //делаем герою больно
    if (gamer) {//если я их не снес
        var check = "";


        if (zlodey.offsetLeft > gamer.offsetLeft + gamer.offsetWidth) {
            check = 'right';

        } else if (zlodey.offsetTop > gamer.offsetTop + gamer.offsetHeight) {
            check = 'down';

        } else if (zlodey.offsetLeft + zlodey.offsetWidth < gamer.offsetLeft) {
            check = 'left';

        } else if (zlodey.offsetTop + zlodey.offsetHeight < gamer.offsetTop) {
            check = 'up'

        }
        if (check == "") {

            //console.log('ням ням');
            demage();
        }
    }

}

function demage() {

    //туду удалить всех детей показать результаты
    removeChildren(gameField);
    soundWrong();
    createTableResult();

}

function removeChildren(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}

function createTableResult() {
    timerGame("stop")
    var div = document.createElement('div');

    div.className = 'result';

    div.innerHTML = `<span>score ${scoreCounter}</span> <span>time survie ${minuteRemaining} : ${secondsRemaining}</span><p>replay?</p>`
    gameField.appendChild(div);
    div.onclick = function () {
        //removeChildren(gameField);
        //null variables
        moveNow = 'right';
        scoreCounter = 0;
        str='nomusickMore'
        startGame('noBack');//запуск игры без подложки
    }

}

function timerGame(tim) {
    if (tim == null) {
        timerId = setInterval(function () {
            secondsRemaining++;
            if (secondsRemaining < 60) {
                if (secondsRemaining < 10) {
                    secondsRemaining = "0" + secondsRemaining;
                }


                document.querySelector('.time').innerHTML = `<h2>${minuteRemaining} m ${secondsRemaining} s</h2>`;

            }
            else {
                minuteRemaining++;
                secondsRemaining = 0;
            }
        }, 1000);
    }
    else {
        clearInterval(timerId);
    }
}

//скушать