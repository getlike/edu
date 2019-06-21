var app = document.querySelector(".app");

createInfo1();
createInfo2();

function createInfo1() {
	var infoBlock = document.createElement("div");
		infoBlock.className = "info";
		infoBlock.style.opacity = 0;
		infoBlock.style.left = infoBlock.offsetLeft  - 550 + 'px';
	app.appendChild(infoBlock);

	var p = document.createElement("p");
		p.id = "text";
		p.innerText = "Your Personal";
	infoBlock.appendChild(p);

	var infoMove = setTimeout(function() {
		infoBlock.style.left = 15 + '%';
		infoBlock.style.opacity = 1;

	}, 600);
}

function createInfo2() {
	var infoBlock2 = document.createElement("div");
		infoBlock2.className = "info";
		infoBlock2.style.opacity = 0;
		infoBlock2.style.left = infoBlock2.offsetLeft  + 1200 + 'px';
	app.appendChild(infoBlock2);

	var p = document.createElement("p");
		p.id = "text";
		p.innerText = "Time Organizer";
	infoBlock2.appendChild(p);

	var infoMove = setTimeout(function() {
		infoBlock2.style.left = 50 + '%';
		infoBlock2.style.opacity = 1;

	}, 1600);
}

	var a = document.querySelector(".learn-more");
		a.onclick = function() {
		location.href = 'partials/login.php';
}
	


