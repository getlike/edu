var userContainer = document.querySelector('#user-list')
var userText = document.querySelector('.text-type');
var btnSend = document.querySelector('#sender');
var btnSend = document.querySelector('#sender');
var textArea = document.querySelector('.writer')

for (var i = 0; i < 15; i++) {
    addUser('Usver' + i);
}

function addUser(name) {
    var user = document.createElement('li');
    user.onclick=function(){
        userText.value=name+': ';
        userText.focus();
    }
    user.innerHTML = "<a href='#'> <img src=\'img/logo.png\'><h2>" + name + "</h2><p>Message</p></a>";
    userContainer.appendChild(user);
}

btnSend.onclick = function () {
    var text = userText.value;
    userText.value = '';
    //написать сообщение
    var someText = document.createElement('div');
    someText.className = 'some';

    someText.innerHTML = '<h2>'+text+'</h2>';
    textArea.insertBefore(someText, textArea.children[0]);

}
document.onkeydown=function (e) {
    if (e.key=='Enter'){
        btnSend.onclick();
    }
}