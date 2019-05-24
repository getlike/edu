var field=document.querySelector('.coin');
var ball=document.querySelector('.ball');
var secundsRemaining=30;//можно положить из хтмл
var intervarHandle=setInterval(tick,1000);
var coin=0;


ball.onclick=function (e) {
    //alert('ball');
    ball.style.position=' absolute';
    ball.style.left=randomInteger(0,275)+'px';
    ball.style.bottom=randomInteger(0,275)+'px';
    //колобок сбежал))
    //что нетак с моим шариком?
    coin++;
    field.innerHTML='кликов '+coin;//тут нужен массив цветов для надписи



}
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}
function tick() {
    var timeDisplay=document.querySelector('.cloack');

    var min = Math.floor(secundsRemaining/60);
    var sec = secundsRemaining-(min*60);

    if (sec<10){
        sec="0"+sec;//красота
    }
    var message = min + ":" +sec;//приведение не нужно %)
    timeDisplay.innerText=message;

    if (secundsRemaining==0){
        alert('Time is up');
        clearInterval(intervarHandle);
        gameOver();
    }
    secundsRemaining--;
}
function gameOver() {
    ball.style.visibility='hidden';
}
window.onload=function () {
    //todo
}

//mouseover