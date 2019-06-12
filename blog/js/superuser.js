var body = document.querySelector("body");
console.dir(body);

function createHeaderBlock() {    //голова страницы
	var header = document.createElement("div");
		header.className = "header";
	body.appendChild(header);
	console.dir(header);

		var logo = document.createElement("a");//логотип активный - ссылка
			logo.className = "logo";
			logo.setAttribute("href", "#");
		header.appendChild(logo);
			var img = document.createElement("img");
				img.src = "../img/hulk.png";
				img.alt = "IT-helper";
			logo.appendChild(img);
		
		var nav = document.createElement("div");//блок авторизации
			nav.className = "nav";
		header.appendChild(nav);
			var login = document.createElement("a");//блок регистрации
				login.innerText = "Go to Blog";
				login.setAttribute("href", "#");
			nav.appendChild(login);
			var signUp = document.createElement("a");//блок входа
				signUp.innerText = "Personal Room";
				signUp.setAttribute("href", "../views/personalCabinet.php");
			nav.appendChild(signUp);
}
createHeaderBlock();

function createPanelBlock() {
	var panel = document.createElement("div");
		panel.className = "panel";
	body.appendChild(panel);
	console.dir(panel);

		var panel_left = document.createElement("div");
			panel_left.className = "panel_left";
		panel.appendChild(panel_left);
		console.dir(panel_left);

			var ava = document.createElement("img");
				ava.src = "../img/hulk.png";
				ava.alt = "avatar";
			panel_left.appendChild(ava);
			console.dir(ava);

			var login = document.createElement("p");
				login.alt = "login";
				login.src = "";
				login.innerText = "your login";
			panel_left.appendChild(login);

			var pass = document.createElement("p");
				pass.alt = "password";
				pass.src = "";
				pass.innerText = "your password";
			panel_left.appendChild(pass);

			var mail = document.createElement("p");
				mail.alt = "mail";
				mail.src = "";
				mail.innerText = "your mail";
			panel_left.appendChild(mail);

		var panel_center = document.createElement("div");
			panel_center.className = "panel_center";
		panel.appendChild(panel_center);
		console.dir(panel_center);

			var last_msg = document.createElement("p");
				last_msg.className = "last_msg";
				last_msg.innerText = "last_message";
			panel_center.appendChild(last_msg);
			console.dir(last_msg);

			var last_reg = document.createElement("div");
				last_reg.className = "last_reg";
				last_reg.innerText = "last_registration";
			panel_center.appendChild(last_reg);
			console.dir(last_reg);

		var panel_right = document.createElement("div");
			panel_right.className = "panel_right";
		panel.appendChild(panel_right);
		console.dir(panel_right);

			var tabluser = document.createElement("div");
				tabluser.className = "tabluser";
				tabluser.innerText = "data base users";
			panel_right.appendChild(tabluser);

			var tablmess = document.createElement("div");
				tablmess.className = "tablmess";
				tablmess.innerText = "data base messeges";
			panel_right.appendChild(tablmess);
}
createPanelBlock(); 