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
// lastMessage(1);
//lastMessage post // записываем последнее сообщение
/*generateContact: function(user) {
    var contentBlock = document.querySelector(".content");


    var dialog = document.createElement('div');
    dialog.className = "dialog";
    dialog.addEventListener('click',function () {
        window.location.href = "/allMessage.html";
    })
    var avatar = document.createElement("img");
    avatar.className = "dialog-avatar";
    avatar.src = user.photo;
    var textBlock = document.createElement("div");
    textBlock.className = "text-block";
    textBlock.innerHTML = "<div class=\"title-block\">" +
        "<b class='dialog-title'>" + user.username + "</b>" +
        '<span class="no-read-msg-indicator">2</span>' +
        "</div>" +
        "<span class=\"dialog-last-msg\">"+lastMessage(user.id)+"</span>";
    // lastMessage(1);
    //lastMessage post // записываем последнее сообщение

    function lastMessage(user_id) {
        var xml=new XMLHttpRequest();
        xml.open("POST","http://15home/chat/api/users.php",false);
        xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xml.send("page=last_message&user_id=" + user.id);
        try {//не у всех есть сообщения(((((
            var lastMessage = JSON.parse(xml.response);
            return lastMessage.lastMessage.message;

        }
        catch {
            return '';
        }
        // console.log(xml.response['lastMessage']);
        // responseText: "{"lastMessage":{"id":"13","user_id":"6","to_user_id":"1","message":"last m for uid=6","created":"2019-06-30 12:13:04"}}"

    }
    //lastMessage post===========================================================
    var addContactBtn = document.createElement("button");
    addContactBtn.addEventListener('click', function() {
        var xml = new XMLHttpRequest();
        xml.open("POST", "http://15home/chat/api/users.php", false);
        xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xml.send("page=add_friend&current_user=17&user_id=" + user.id);
        console.dir(xml);
    });
    textBlock.appendChild(addContactBtn);
    var dialogTime = document.createElement("span");
    dialogTime.className = "dialog-time";
    dialogTime.innerText = "20:02";

    //1. В мобильном приложении сделай отображение сообщений выбранного пользователя.
    dialog.addEventListener('click',function () {
        console.log('push me) '+user.id);
    });
    //=====================================================================


    dialog.appendChild(avatar);
    dialog.appendChild(textBlock);
    dialog.appendChild(dialogTime);
    contentBlock.appendChild(dialog);
}
// window.location.href = "http://www.w3schools.com";
};
*/