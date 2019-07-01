function drowMessage(msg) {


    // created: "2019-06-22 14:14:57"
    // message: "asCsefgzsefzfzsefsezfsef"
    // username: "test"

    var contentBlock = document.querySelector(".content");
//
    var dialog = document.createElement('div');
    dialog.className = "dialog";
//
    var avatar = document.createElement("img");
    avatar.className = "dialog-avatar";
avatar.src = msg.photo;
    var textBlock = document.createElement("div");
    textBlock.className = "text-block";
    textBlock.innerHTML = "<div class=\"title-block\">" +
        "<b class='dialog-title'> "+msg.username+" </b>" +
        '<span class="no-read-msg-indicator">2</span>' +
        "</div>" +
        "<span class=\"dialog-last-msg\">"+msg.message+"</span>";


// // textBlock.appendChild(addContactBtn);
    var dialogTime = document.createElement("span");
    dialogTime.className = "dialog-time";
    dialogTime.innerText = msg.created;
//
// //1. В мобильном приложении сделай отображение сообщений выбранного пользователя.
// dialog.addEventListener('click',function () {
//     console.log('push me) '+user.id);
// });
//=====================================================================


    dialog.appendChild(avatar);
    dialog.appendChild(textBlock);
    dialog.appendChild(dialogTime);
    contentBlock.appendChild(dialog);
}

function $_GET(key) {
    var s = window.location.search;
    s = s.match(new RegExp(key + '=([^&=]+)'));
    return s ? s[1] : false;
}

// getParam = $_GET('user_id');
readMessage($_GET('user_id'));

function readMessage(user_id) {
    var xml = new XMLHttpRequest();
    xml.open("POST", "http://15home/chat/api/users.php", false);
    xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xml.send("page=getAllMessage&user_id=" + user_id);
    // console.log(xml);
    var messageXml = JSON.parse(xml.response);
    messageXml.forEach(function (item) {
        drowMessage(item)
        console.log(item);

    })


}

var backBtn=document.querySelector('.back');
backBtn.addEventListener('click',function () {
    window.location.href = "/index.html";
})
