var app = document.querySelector(".app");
formMove();

function formMove() {
	var form = document.querySelector(".container");
		form.style.top = form.offsetTop - 500 + 'px';

		var move = setTimeout(function() {
		form.style.top = 25 + '%';
		form.style.opacity = 1;
	}, 600);
}