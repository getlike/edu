var app = {
    searchInput: null,
    searchBtn: null,
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },


    onDeviceReady: function () {

        this.searchInput = document.querySelector('.search-input');
        this.searchBtn = document.querySelector('img.search');
        this.backBtn = document.querySelector('.back');



        var that = this;
        var personalBtn = document.querySelector('.user-ic');

            personalBtn.addEventListener('click',function () {
                window.location.href = "/personal.html";
            });
        // открытие поля поиска
        this.searchBtn.addEventListener("click", function () {
            var pageTitle = document.querySelector(".page-title");
            pageTitle.style.display = "none";

            that.searchInput.style.display = "block";
        });

        //сбросить поиск
        this.backBtn.addEventListener('click', function () {
            document.location.href = '/allUsers.html';
        });
        // поиск контактов
        this.searchInput.addEventListener("keyup", function (e) {
            var contentBlock = document.querySelector(".content");
            contentBlock.innerHTML = "";

            var xml = new XMLHttpRequest();
            xml.open("GET", 'http://15home/chat/api/users.php?page=search&search=' + e.target.value, false);
            xml.send();

            var users = JSON.parse(xml.response);

            for (var i = 0; i < users.users.length; i++) {
                that.generateContact(users.users[i]);
            }
        });


        this.getFriends();

    },

    getFriends: function () {

        var xml = new XMLHttpRequest();
        xml.open("GET", 'http://15home/chat/api/users.php?current_user=5&page=friends', false);
        xml.send();
        console.log(xml);
        var users = JSON.parse(xml.response);

        for (var i = 0; i < users.friends.length; i++) {
            this.generateContact(users.friends[i]);
        }

    },

    generateContact: function (user) {
        var contentBlock = document.querySelector(".content");


        var dialog = document.createElement('div');
        dialog.className = "dialog";
        dialog.addEventListener('click', function () {
            window.location.href = "/allMessage.html?user_id=" + user.id;
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
            "<span class=\"dialog-last-msg\">" + lastMessage(user.id) + "</span>";
        // lastMessage(1);
        //lastMessage post // записываем последнее сообщение
        function lastMessage(user_id) {
            var xml = new XMLHttpRequest();
            xml.open("POST", "http://15home/chat/api/users.php", false);
            xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xml.send("page=last_message&user_id=" + user.id);
            try {//не у всех есть сообщения(((((
                var lastMessage = JSON.parse(xml.response);
                return lastMessage.lastMessage.message;

            } catch {
                return '';
            }

        }

        //lastMessage post===========================================================
        var addContactBtn = document.createElement("button");
        addContactBtn.addEventListener('click', function () {
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
        dialog.addEventListener('click', function () {
            console.log('push me) ' + user.id);
        });
        //=====================================================================


        dialog.appendChild(avatar);
        dialog.appendChild(textBlock);
        dialog.appendChild(dialogTime);
        contentBlock.appendChild(dialog);
    }
    // window.location.href = "http://www.w3schools.com";

};

app.initialize();

/*
1. AJAX post запрос js
2. AJAX post PHP
3. SQL 
    3.1 search LIKE + LIKE %...%
    3.2 insert
    3.3 select
4. Debugging
5. that

*/


