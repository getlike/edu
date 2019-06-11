var body = document.querySelector("body");

var div = document.createElement("div");
	div.className = "container ";
body.appendChild(div);

	var p = document.createElement("p");
		p.className = "p";
		p.innerText = "here you can show your ideas";
	div.appendChild(p);

	var h1 = document.createElement("h1");
		h1.className = "h1"; 
		h1.innerText = "Welcome to IT-helper";
	div.appendChild(h1);

	var a = document.createElement("a");
		a.className = "button";
		a.href = "index.php";
		a.value = "let begin";
		a.innerText = "Go to Blog";
	div.appendChild(a);


	