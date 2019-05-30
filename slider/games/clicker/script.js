var gameField = document.querySelector('.game-field');

//батОны //,,,????
var startBlock = document.querySelector('.start-block');
var btnStart = document.querySelector('#btnStart');
var sizeBall = 50;
var scoreCounter = 1;//так вышло((
var secundsRemaining = 30;
var switcher = true;//тормозим шарики
var ballsCount = randomInteger(1, 8);
var intervarHandle;
var endBlock;
var scoreBlock;
//game logic

btnStart.onclick = function () {//логика шаров здесь и это неверно
    startBlock.style.display = 'none';
    //запуск таймера
    startGame();


}
function startGame(str){
    createTimerBlock();
    createScoreBlock();
    createLives();
    checkBalls();
    startMusick(str);
//ник вынес в-цию

    fieldClick(gameField);
    intervarHandle = setInterval(tick, 1000);
}

function fieldClick(gf) {
    gf.onclick= function (e) {//слушаем нажатие наполе
        if (e.target.valueOf().className == 'game-field') {//если по полю то убираем жизнь
            soundWrongClick();
            document.querySelector('.sLife').remove();
            console.log(document.querySelectorAll('.sLife'))
            if (!document.querySelector('.sLife')) {//если жизней не осталось - конец игры
                endGame();
            }
        }
    }

        

}

function createTimerBlock() {//щитаем время
    var timerBlock = document.createElement('div');
    timerBlock.id = "timer";
    timerBlock.innerHTML = "<h2> T:<span></span></h2>";
    gameField.appendChild(timerBlock);
}

function createScoreBlock() {//очки
    var block = document.createElement('div');
    block.id = "score";
    block.innerHTML = "<h2 class='score'> score:</h2>";

    gameField.appendChild(block);

    scoreBlock = document.createElement("span");
    scoreBlock.innerText = "0";
    var h2 = block.querySelector('h2');
    h2.appendChild(scoreBlock);
}

function createLives() {//жизни
    var block = document.createElement('div');
    block.className = 'lifes';

    for (var i = 0; i < 3; i++) {//органичение по ширине можно сделать цифрой
        block.className = 'lifes';
        var lifeSpan = document.createElement('span');
        lifeSpan.className = 'sLife';
        block.appendChild(lifeSpan);
    }


    gameField.appendChild(block);

}


function createBall() {//создаем мячики


    if (switcher) {
        var ball = document.createElement('div');
        ball.className = 'ball';

        ball.style.width = sizeBall + 'px';
        ball.style.height = sizeBall + 'px';


        placeBalls(ball);//позиция
        changePlace(ball);
        ballColors(ball);//цвет

        ball.onclick = function () {


            if (ball.style.background == 'green') {
                scoreBlock.innerText = +scoreBlock.innerText + 2;
                destroyBall(ball);
                createBall();
                soundClick();
            } //если желтый +1 очко
            else if (ball.style.background == 'yellow') {
                scoreBlock.innerText = +scoreBlock.innerText + 1;
                destroyBall(ball);
                soundClick();
            } else {
                soundWrongClick();
                //если красный -1 очко
                document.querySelector('.sLife').remove();
                if (!document.querySelector('.sLife')) {//если жизней не осталось - конец игры
                    endGame();
                }
            }
        }
        setTimeout(function () {
            destroyBall(ball);
            checkBalls();
        }, 3000);

        gameField.appendChild(ball);

    }
}

//создание шара в случайном месте
function placeBalls(ball) {//к чему мины максы?
    var place = randomInteger(1, 3);

    if (place == 1) {
        ball.style.left = ball.offsetLeft - 100 + 'px';
        ball.style.top = randomInteger(0, gameField.offsetHeight) + 'px';

    } else if (place == 2) {
        ball.style.left = randomInteger(0, gameField.offsetWidth) + 'px';
        ball.style.top = gameField.offsetHeight + 100 + 'px';
    } else {
        ball.style.left = gameField.offsetWidth + 100 + 'px';
        ball.style.top = randomInteger(0, gameField.offsetHeight) + 'px';
    }
}

function changePlace(ball) {
    var divScore = document.querySelector('#timer');

    setTimeout(function () {


        ball.style.left = randomInteger(0, gameField.offsetWidth - sizeBall) + 'px';
        ball.style.top = randomInteger(divScore.offsetHeight, gameField.offsetHeight - sizeBall) + 'px';
    }, 500)
}

function ballColors(ball) {///цвет и размер
    var colorBall = randomInteger(1, 3);

    if (colorBall == 1) {
        ball.style.background = 'green';
    } else if (colorBall == 2) {
        ball.style.background = 'yellow';
    } else {
        ball.style.background = 'red';
    }

};

//создать шарики если нет шариков на поле
function checkBalls() {
    var selected = document.querySelector('.ball')

    if (selected == null) {

        var i = 0;
        while (i < randomInteger(1, 5)) {
            createBall();
            i++;
        }
    }
}
function startMusick(str) {
    if (str==null) {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'sound/click.mp3'; // Указываем путь к звуку "клика"
        audio.loop=true;
        audio.play(); // Автоматически запускаем
    }
}
function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'sound/lb_ball_fire.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

function soundWrongClick() {//промах
    var audio = new Audio(); // Создаём новый элемент Audio


    audio.src = 'sound/dohs.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем

}

//уничтожить шарик
function destroyBall(ball) {
    //уничтожить шарик




    ball.remove();


    if (document.querySelector('.ball')) {
        scoreCounter++;
    } else {//if (!document.querySelector('.sLife')){
        //рамку посредине
        //createBlockContinue();

        scoreCounter++;
        //endGame();
    }

}


// function reload() {
//     for (var i = 0; i < ballsCount; i++) {//создаем мячики
//         createBall();
//     }
// }


function randomInteger(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function tick() {
    var timeDisplay = document.querySelector('#timer');

    var min = Math.floor(secundsRemaining / 60);
    var sec = secundsRemaining - (min * 60);

    if (sec < 10) {
        sec = "0" + sec;//красота
    }
    var message = "<h2> T: <span>" + min + ": " + sec + "</span></h2>";//приведение не нужно %)
    timeDisplay.innerHTML = message;

    if (secundsRemaining == 0) {

        clearInterval(intervarHandle);
        secundsRemaining=0;

        endGame();

        // createBlockContinue();


        switcher = false;;
        //endgame
    }
    secundsRemaining--;
}//timer

function endGame() {


    endBlock = document.createElement('div');

    endBlock.className = 'end-block';

    var finishScrore = document.createElement('h2');
    finishScrore.className = 'finish-score';
    // console.log(scoreBlock);
    finishScrore.innerText = 'Your Score: ' + ' ' + scoreBlock.innerText;

    endBlock.appendChild(finishScrore);

    var reloadBtn = document.createElement('button');
    reloadBtn.className = 'reload-btn';

    endBlock.appendChild(reloadBtn);
    gameField.appendChild(endBlock);//test logic
    reloadBtn.onclick = function () {
        reloadGame();
    };




}

function reloadGame() {//перезапуск игрового поля
    // location.reload();
    removeChildren(gameField);//удаляем с грового поля все к чертям
    secundsRemaining=30;
    // noinspection JSAnnotator
    switcher=true;//вернуть шарики
    // removeEventListener(gameField);
    startGame('rjcns');
}
function removeChildren(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);
    }
}