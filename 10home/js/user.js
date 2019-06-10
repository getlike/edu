var offsetUser = 0;

function getUser(count = 30, offsetUser = 0) {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'http://at.educoin.biz/chat-api/?count=' + count + '&offset=' + offsetUser, false);
    xml.send();
    var response = JSON.parse(xml.response);
    return response.users;
}

function createUserList() {
    var userListBox = document.querySelector('#user-list');
//var js_array = [<?php echo '"'.implode('","', $php_array).'"' ?>];
    var user = getUser(10, offsetUser);
//console.dir(user)
    for (var i = 0; i < user.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = '<img src="img/user.jpg" alt=""  > ' + user[i].username;

        userListBox.appendChild(li);
    }
}

createUserList();

var userListBlock = document.querySelector(".left-menu");
userListBlock.onscroll = function (e) {
    var element = e.target;
    if (element.scrollTop + 1000 >= element.scrollHeight) {
        offsetUser += 10;
        createUserList();
    }
}
//i e916

//09
//
// Параметры передаются через добавление к ссылке знака «?», то есть http://at.educoin.biz/chat-api/?, а далее пишутся параметры которые тебе необходимы:
//
//     entity — то что ты хочешь получать. На данный момент есть только 2 параметра: users и messages, выбираешь один из них и получаешь необходимые данные. Если это значение не передаешь то по умолчанию получаешь users.
//
//     count — количество записей, которые ты хочешь получить. Указываешь значение в цифрах 0…N.
//
//     offset — сколько записей от начала нужно пропустить.
//
//     user_id — получить сообщения пользователя с данным ID. Работает только с параметром entity=messages!


