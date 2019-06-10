//alert("test");

// var fuck = function () {
// 	document.write("<h2>text</h2>");
// }

// function alert(title, text) {
// 	document.write("<h2>" + message + "</h2>");
// }
console.log("res")
function sum(a, b, c) {
	console.dir(arguments);
	var res = 0;
	for (var i = 0; i < arguments.length; i = i + 1) {
		res = res + arguments[i];
	}

	return res;
}


var res = sum(5, 6, 7, 7, 8);
alert(res);