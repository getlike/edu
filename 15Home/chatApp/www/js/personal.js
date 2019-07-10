backBtn = document.querySelector('.back');
this.backBtn.addEventListener('click',function () {
    document.location.href = '/index.html';
});
drowMessage();
function drowMessage() {


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
    avatar.src = 'photo';
    var textBlock = document.createElement("div");
    textBlock.className = "text-block";
    textBlock.innerHTML = "<div class=\"title-block\">" +
        "<b class='dialog-title'> userName </b>" +
        '<span class="no-read-msg-indicator">2</span>' +
        "</div>" +
        "<span class=\"dialog-last-msg\">что то тут написать</span>";


// // textBlock.appendChild(addContactBtn);
    var dialogTime = document.createElement("span");
    dialogTime.className = "dialog-time";
    dialogTime.innerText = "и тут тоже";
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