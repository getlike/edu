backBtn = document.querySelector('.back');
this.backBtn.addEventListener('click',function () {
    document.location.href = '/index.html';
});
function drawUsers(usr) {


    var contentBlock = document.querySelector(".content");
    var dialog = document.createElement('div');
    dialog.className = "dialog";
    dialog.addEventListener('click', function () {
        writeMessage(usr.id);

    })

    var avatar = document.createElement("img");
    avatar.className = "dialog-avatar";
    avatar.src = usr.photo;
    var textBlock = document.createElement("div");
    textBlock.className = "text-block";
    textBlock.innerHTML = "<div class=\"title-block\">" +
        "<b class='dialog-title'>" + usr.name + "</b>" +
        '<span class="no-read-msg-indicator">2</span>' +
        "</div>" +
        "<span class=\"dialog-last-msg\">" + usr.email + "</span>";


    var dialogTime = document.createElement("span");
    dialogTime.className = "dialog-time";
    dialogTime.innerText = "тоже хз";
//=====================================================================

    dialog.appendChild(avatar);
    dialog.appendChild(textBlock);
    dialog.appendChild(dialogTime);
    contentBlock.appendChild(dialog);
}

readUsers();

function readUsers() {
    var xml = new XMLHttpRequest();
    xml.open("POST", "http://15home/chat/api/users.php", false);
    xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xml.send("page = getAllUsers");
    // console.log(xml);
    var userXml = JSON.parse(xml.response);
    for (var i = 0; i < userXml.users.length; i++) {
        drawUsers(userXml.users[i]);
        // console.log(userXml.users[i]);
    }
}

// writeMessage(1);

function writeMessage(usrId) {
    var popup = document.createElement('div');
    popup.className = "popup";
    var contentBlock = document.querySelector(".content");//не люблю я глобальные

    var labelName = document.createElement('label');
    labelName.innerText = 'здесь будет имя';
    popup.appendChild(labelName);

    var messageArea = document.createElement('textarea');
    popup.appendChild(messageArea);

    var btnSend = document.createElement('a');
    btnSend.title = 'send message';
    btnSend.href = '';
    btnSend.innerText = 'отправить';
    // console.log(usrId);
    btnSend.addEventListener('click', function () {
        console.log(usrId);

        sendMessage(usrId, messageArea.value);
        popup.remove();
        alert('сообщение успешно отправлено');
    })

    popup.appendChild(btnSend);
    contentBlock.appendChild(popup);
}

function sendMessage(userId, message) {
    console.log(userId);
    console.log(message);

    var xml = new XMLHttpRequest();
    xml.open("POST", "http://15home/chat/api/users.php", false);
    xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xml.send("page = writeMessage&user_id=" + userId + "&message=" + message);
}