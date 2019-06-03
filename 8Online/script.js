var userListBlock = document.querySelector("#user-list");
console.log(userListBlock);

function addContact(user) {
    //console.dir(user)
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.src = 'img/logo.png';
    var h2 = document.createElement("h2");
    h2.innerText = user.username;
    li.appendChild(img);
    li.appendChild(h2);
    li.onclick=function(){
        getMessage(user.id);
    }
    userListBlock.appendChild(li);
}
var uXmlRec = new XMLHttpRequest();
uXmlRec.open('GET','http://at.educoin.biz/chat-api/',false);
uXmlRec.send();

var users = JSON.parse(uXmlRec.response);
users=users.users;
function getMessage(userId) {

//http://at.educoin.biz/chat-api/?entity=messages&user_id=1
    var messabeById = new XMLHttpRequest();
    messabeById.open('GET','http://at.educoin.biz/chat-api/?entity=messages&user_id='+userId,false);
    messabeById.send();
    var arrMessabeById = JSON.parse(messabeById.response);
    console.dir(arrMessabeById.message);
    var modal=document.createElement('div');
}
// length - длина массива
for (var i = 0; i < users.length; i++) {
    addContact(users[i]);
}


var searchInput = document.querySelector("#search"); // 0
var searchResult = 0;
searchInput.onkeydown = function (e) { // 0.1
    // keydown enter
    if (e.keyCode == 13) {
        var searchText = e.target.value; // 1
        // очистить список пользователей
        userListBlock.innerText = "";

        for (var i = 0; i < users.length; i = i + 1) { // 2
            if (searchText == users[i].name) {
                searchResult = 1;
                addContact(users[i]);
            }
        }
        if (searchResult == 0) {
            for (var i = 0; i < users.length; i = i + 1) {
                addContact(users[i]);
            }
        }
        searchResult = 0;
    }
};