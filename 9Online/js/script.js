var app = document.querySelector("#app");


/*

1. получить блок user-list
2. Добавлять в него элементы
<li>
	<img src="img/logo.png">
	<h2>User 1</h2>
	<p>Message</p>
</li>

*/


var userListBlock = document.querySelector("#user-list");
console.log(userListBlock);

function addContact(user) {
	var li = document.createElement("li");

	var img = document.createElement("img");
		img.src = "img/logo.png";

	var h2 = document.createElement("h2");
		h2.innerText = user.username;

	li.appendChild(img);
	li.appendChild(h2);

	userListBlock.appendChild(li);
	li.id = user.id;
	li.onclick = function() {
		getMessagesUserId(user.id)
	}

}
// GET USERS 
// =======================
// Создаем новый объект XMLHttpRequest и адрес на него помущаем в xmlRequest
var xmlRequest = new XMLHttpRequest();
	// Открывае запрос на сервер. 3 параметра. 
	// 1. Метод запроса - GET || POST
	// 2. Ссылка куда мы стучимся
	// 3. true/false - асинхронный/синхронный запрос
	xmlRequest.open('GET', 'http://at.educoin.biz/chat-api/', false);

	// Выполняем отправку запрос
	xmlRequest.send();

var response = JSON.parse(xmlRequest.response);
console.dir(response)
var users = response.users;
// =====================


//===========
// GET MESSAGES
function getMessagesUserId(id) {
	
	/*
		http://at.educoin.biz/chat-api/?entity=messages&user_id=1
		1. Сделать аякс запрос и получить нужные сообщения
	*/
	var modal = document.createElement("div");
		modal.id = "modal";

	app.appendChild(modal);

	var xml = new XMLHttpRequest();
		xml.open("GET", "http://at.educoin.biz/chat-api/?entity=messages&user_id=" + id, false);
		xml.send();

	var response = JSON.parse(xml.response);
	var messages = response.messages;

	console.dir(messages)
	for(var i = 0; i < messages.length; i++) {
		var h3 = document.createElement("h3");
			h3.innerText = messages[i].message;

		var hr = document.createElement("hr");

		modal.appendChild(h3);
		modal.appendChild(hr);
	}
}

/*
1. HTTP запрос
2. Метод GET
3. Получаем мы json
4. JSON нужно преобразовать через функцию объекта JSON -> parse()
5. xmlRequest = new XMLHttpRequest();
   xmlRequest.open('GET', 'http://at.educoin.biz/chat-api/', false);
   xmlRequest.send()

*/


// length - длина массива
for(var i = 0; i < users.length; i = i + 1) {
	addContact(users[i]);
}

/*
0. Получить поле для ввода - 3
0.1. Добавить событие onchange - 
	1. Получить значение с инпута - 2
		- Создать переменную для хранения текста с инпута
		- Занести свойство с инпута отвечающее за то что ввели
	2. Перебрать в цикле весь массив users - 2
	3. Проверить совпадение name c тем что ввели в инпут - 2 
	4. Если совпадает вызываем addContact() - 1
	== 10 minutes
*/

var searchInput = document.querySelector("#search"); // 0
var searchResult = 0; 
searchInput.onkeydown = function(e) { // 0.1
	// keydown enter
	if(e.keyCode == 13) {
		var searchText = e.target.value; // 1
		// очистить список пользователей
		userListBlock.innerText = "";
		
		for(var i = 0; i < users.length; i = i + 1) { // 2
			if(searchText == users[i].name) {	
				searchResult = 1;	
				addContact(users[i]);
			}
		}
		if(searchResult == 0) {
			for(var i = 0; i < users.length; i = i + 1) {
				addContact(users[i]);
			}
		}
		searchResult = 0;
	}
}


/*
1. Массивы
var arr = ["qwert", 23, true, null];
alert(arr[2])
2. Объекты
var obj = {
	свойство: "Значение",
	телефон: "555 55 55",
	users: {}
}
alert(obj.users)
3. Цикл for 
for(счетчик; условие; что делаем после действия) {
	действие
}
for(var i = 0; i < 5; i = i + 1) {
	alert(i);
}
4. 
*/