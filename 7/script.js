var userContainer = document.querySelector('#user-list');
var userText = document.querySelector('.text-type');
var btnSend = document.querySelector('#sender');
var btnSend = document.querySelector('#sender');
var textArea = document.querySelector('.writer');
var finder = document.querySelector('.find-user');
var textFind = '';
var backgrond = document.getElementsByTagName('body');

function drowBack() {//это было поздним вечером...я бы даже сказал глубокой ночью

    console.dir(backgrond[0].style.background)
    for (var i = 0; i < 45; i++) {
        var kity = document.createElement('img');
        kity.src = 'img/hk.png';
        kity.style.position = 'absolute';
        kity.style.zIndex = -1;
        kity.style.transform = random(0, 360) + 'deg';
        kity.style.transform = 'rotate(' + random(0, 360) + 'deg)';


        kity.style.left = random(5, 1200) + 'px';
        kity.style.top = random(5, 900) + 'px';

        backgrond[0].appendChild(kity);
    }//в следующий раз зделаю что бы постоянно крутились))

}

drowBack();

function random(min, max) {//капец как неудобненько
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

var users = [//имя, аватар, телефон, никнейм.
    {
        name: 'vasya',
        avatar: 'img/logo.png',
        telephone: '08001235456',
        nikname: 'Vasilisis'
    },
    {
        name: 'Kolya',
        avatar: 'img/logo.png',
        telephone: '08001654654',
        nikname: 'Nikolaus'
    },
    {
        name: 'Petro',
        avatar: 'img/logo.png',
        telephone: '00035456',
        nikname: 'Velikiy'
    },
    {
        name: 'Roma',
        avatar: 'img/logo.png',
        telephone: '0811235456',
        nikname: 'Ramayan'
    }
];

function firstWrite() {
    for (var i = 0; i < users.length; i++) {
        //console.dir(users[i])

        addUser(users[i]);
    }
}

firstWrite();

function addUser(users) {
    // console.dir(users)
    var user = document.createElement('li');
    user.onclick = function () {
        userText.value = users.name + ': ';
        userText.focus();
    }
    user.ondblclick = function () {
        var divModal = document.querySelector('#openModal');
        divModal.innerHTML = '';
        //имя, фото, никнейм, телефон.
        divModal.innerHTML = '<div>\n' +
            '<a href="#close" title="Close" class="close">X</a>' +
            '<h2>' + 'Имя: ' + users.name + '</h2>' +
            '<p>' + '<img src=' + users.avatar + '>' + '</p>' +
            '<p>' + 'никнейм ' + users.nikname + '</p>' +
            '<p>' + 'телефон: ' + users.telephone + '</p>';

        location.href = "#openModal";
    }
    user.innerHTML = "<a href='#'> <img src=\'img/logo.png\'><h2>" + users.name + "</h2><p>Message</p></a>";
    userContainer.appendChild(user);
}

btnSend.onclick = function () {
    var text = userText.value;
    userText.value = '';
    //написать сообщение
    var someText = document.createElement('div');
    someText.className = 'some';

    someText.innerHTML = '<h2>' + text + '</h2>';
    textArea.insertBefore(someText, textArea.children[0]);

}
document.onkeydown = function (e) {
    if (e.key == 'Enter') {
        btnSend.onclick();
    }
}


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


    }
    checkStr(textFind);
    textFind.toLowerCase();


}

function checkStr(str) {
    var lowerStr = str.toLowerCase();


    for (var i = 0; i < users.length; i++) {

        if (~lowerStr.indexOf(users[i].name.toLowerCase())) {
            userContainer.innerHTML = '';
            addUser(users[i]);
        }
    }

}

var messages = [//имя пользователя, аватар, текст сообщения, время отправки.
    {
        user: users[1],//а потом дергаем нужные свойства
        message: 'alloha',
        time: '12-15'

    },
    {
        user: users[1],//а потом дергаем нужные свойства
        message: 'alloha я сказал',
        time: '12-16'

    },
    {
        user: users[2],//а потом дергаем нужные свойства
        message: 'все спят',
        time: '12-17'

    },
    {
        user: users[3],//а потом дергаем нужные свойства
        message: 'не буянте',
        time: '12-20'

    },
    {
        user: users[2],//а потом дергаем нужные свойства
        message: 'что бы посмотреть детали контакта, кликните на нём дважды',
        time: '12-22'

    },
    {
        user: users[0],//а потом дергаем нужные свойства
        message: 'без БД скучно...ни тебе историю ни толковой модерации. Лажа какаято. Одмин!!! харэ филонить',
        time: '03-30'

    }

]
for (var i = 0; i < messages.length; i++) {
    var user = document.createElement('li');
    var text = messages[i].message;

    var someText = document.createElement('div');
    someText.className = 'some';

    someText.innerHTML = '<h2>' + '<img src=' + messages[i].user.avatar + '>' + messages[i].time + ': ' + messages[i].user.name + ': ' + text + '</h2>';
    textArea.insertBefore(someText, textArea.children[0]);

}


/*
* Сделай массив пользователей. Пользователь должен иметь следуюшие данные: имя, аватар, телефон, никнейм.check

Выведи всех пользователей из п.1 в поле списка контактов.check

Сделай массив сообщений. Сообщение должно иметь следуюшие данные: имя пользователя, аватар, текст сообщения, время отправки.check

Выведи все сообщения из п.3 в поле списка сообщений.check

Пропиши коментарии ко всему коду приложения.

Необязательные дополнительные задачи:

* Стилизуй свой чат, сделай свой уникальный дизайн. Можешь изменить цвет, положение блоков и пр.check

** Сделай клик по контактам, при клике открывать всплывающее окно, например, как тут. В открывшемся окне показывать информацию пользователя: имя, фото, никнейм, телефон.check

*** При вводе имени пользователя в поле поиска, отображать только те контакты, которые имеют точное совпадение того, что ввел с именем пользователя.check

*/