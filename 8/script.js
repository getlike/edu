var userContainer = document.querySelector('#user-list');
var userText = document.querySelector('.text-type');

var btnSend = document.querySelector('#sender');
var textArea = document.querySelector('.writer');
var finder = document.querySelector('.find-user');
var textFind = '';
var backgrond = document.getElementsByTagName('body');

var checkMaster = document.querySelector('.check-master');
var checkLabel = document.querySelector('#label-check');


function drowBack() {//рисуем фон. Перенести в css

    // console.dir(backgrond[0].style.background)
    for (var i = 0; i < 325; i++) {
        var kity = document.createElement('img');
        kity.className = 'kity';
        kity.src = 'img/hk.png';
        kity.style.position = 'absolute';
        kity.style.zIndex = -1;
        // kity.style.transform = random(0, 360) + 'deg';
        // kity.style.transform = 'rotate(' + random(0, 360) + 'deg)';


        kity.style.left = random(5, document.body.offsetWidth) + 'px';
        kity.style.top = random(5, document.body.offsetWidth) + 'px';

        backgrond[0].appendChild(kity);
    }//в следующий раз зделаю что бы постоянно крутились))

}

drowBack();//отрисовываем фон
//чеки
console.dir(checkMaster)
checkMaster.checked = true;
checkMaster.onclick = function () {
    if (checkMaster.checked) {
        checkLabel.innerText = 'люди';
    } else {
        checkLabel.innerText = 'сообщения.';

    }
}


//получаем ajax Message

var uXmlRecMessage = new XMLHttpRequest();

uXmlRecMessage.open('GET', 'http://at.educoin.biz/chat-api/?entity=messages&count=500', false);
uXmlRecMessage.send();
var messageXml = JSON.parse(uXmlRecMessage.response);
// console.dir(messageXml);

//выводим сообщения
writeMessages(messageXml);

//получаем ajax user
var uXmlRec = new XMLHttpRequest();
uXmlRec.open('GET', 'http://at.educoin.biz/chat-api/', false);
uXmlRec.send();
var usersXml = JSON.parse(uXmlRec.response);


function random(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function firstWrite() {//из масива на фронт//
    // console.log(usersXml[0]);
    for (var i = 0; i < usersXml.users.length; i++) {

        addUser(usersXml.users[i]);
    }
}

firstWrite();

//пишем список юзверей, слушаем клики
function addUser(users) {

    var user = document.createElement('li');
    user.onclick = function () {
        userText.value = users.name + ': ';
        userText.focus();
    };
    //даблклик на пользователе
    user.ondblclick = function () {
        var divModal = document.querySelector('#openModal');
        divModal.innerHTML = '';
        //имя, фото, никнейм, телефон.
        divModal.innerHTML = '<div>\n' +
            '<a href="#close" title="Close" class="close">X</a>' +
            '<h2>' + 'Имя: ' + users.username + '</h2>' +
            '<p>' + '<img src=' + users.avatar + '>' + '</p>' +
            '<p>' + 'никнейм ' + users.nikname + '</p>' +
            '<p>' + 'телефон: ' + users.telephone + '</p>';

        location.href = "#openModal";
    }
    user.innerHTML = "<a href='#'> <img src=\'img/logo.png\'><h2>" + users.username + "</h2><p>Message</p></a>";
    userContainer.appendChild(user);
}

//отправка сообщения по клику на кнопку сенд. Нужно переименовать клас css
btnSend.onclick = function () {
    var text = userText.value;
    userText.value = '';
    //написать сообщение
    var someText = document.createElement('div');
    someText.className = 'some';

    someText.innerHTML = '<h2>' + text + '</h2>';
    textArea.insertBefore(someText, textArea.children[0]);

}
//отправка сообщения по энтеру

document.onkeydown = function (e) {
    if (e.key == 'Enter') {
        btnSend.onclick();
    }
}

//ищем юзера по имени
//todo работает плохо
finder.onkeydown = function (e) {
    if (e.key != 'Backspace' && e.key != 'Control' && e.key != 'Shift' && e.key != 'Enter' && e.key != 'Control') {
        textFind += e.key;
    }
    if (e.key == 'Backspace') {
        textFind = '';
        if (userContainer.childElementCount == 1) {
            finder.innerHTML = '';
            userContainer.removeChild(userContainer.lastChild);
            firstWrite();
        }
        if (!checkMaster.checked){
            removeChildren(textArea);
            writeMessages(messageXml);
            return;
        }
    }
    if (checkMaster.checked) {
        checkStrName(textFind);

    } else {
        checkStrMessage(textFind);
    }

};
// var someText = document.createElement('div');
// someText.className = 'some';

//проверяем пользователей
function checkStrName(str) {
    var lowerStr = str.toLowerCase();
    var users = usersXml.users;
    for (var i = 0; i < users.length; i++) {
        var strAr = users[i].username;
        if (lowerStr === strAr.toLowerCase()) {
            userContainer.innerHTML = '';
            addUser(users[i]);
        }
    }
}

//проверяем сообщения
function checkStrMessage(str) {
    var lowerStr = str.toLowerCase();
    var message = messageXml.messages;
    for (var i = 0; i < message.length; i++) {
        var strAr = message[i].message;
        if (lowerStr === strAr.toLowerCase()) {
            console.log('check')
            writeMessages(messageXml.messages[i])
        }
    }
}

// var someText = document.createElement('div');
// someText.className = 'some';

//рисуем сообщения
function writeMessages(messageXml) {
    if (Array.isArray(messageXml.messages)) {
        for (var i = 0; i < messageXml.messages.length; i++) {
            var textM = messageXml.messages[i].message;
            var textN = messageXml.messages[i].username;
            var someText = document.createElement('div');
            someText.className = 'some';
            someText.innerHTML = '<h2> ava : ' + textN + ': ' + textM + '</h2>';
            textArea.insertBefore(someText, textArea.children[0]);
        }
    }
    else {
        removeChildren( textArea);
        console.dir(messageXml);
        var textM = messageXml.message;
        var textN = messageXml.username;
        var someText = document.createElement('div');
        someText.className = 'some';

        someText.innerHTML = '<h2> ava : ' + textN + ': ' + textM + '</h2>';
        textArea.insertBefore(someText, textArea.children[0]);
    }

}

function removeChildren(elem) {
    while (elem.lastChild) {
        elem.removeChild(elem.lastChild);

    }
}

/*
Выполни следующие задачи:

Сделай вывод всех пользователей, используя данные полученные с сервера (API).check

Сделай вывод всех сообщений, используя данные с сервера (API).chek

Поиск контактов, используя данные с сервера (API).check

Поиск по сообщениям, используя данные с сервера (API). Поиск нужно делать по имени пользователя и тексту сообщения.+/-

Необязательные дополнительные задачи:

* Сделай вывод 30-ти пользователей в список контактов. При скролле, когда дошел до конца списка, подгружай еще 10 следующих контактов, так чтобы в конце можно было дойти до самых последних контактов. Пример, VK.com, Telegram…

** Сделай вывод сообщений только пользователя, которого ты выбрал в списке контактов.*/