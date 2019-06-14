var li = document.querySelectorAll(".licontent");

for (var i = 0; i < li.length; i++) {
	li[i].onclick = function (event) {
		event.target.attributes.name.value
		// console.dir(event.target.attributes.name.value);
	}
}

