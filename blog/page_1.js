var body = document.querySelector("body");

var div = document.createElement("div");
div.className = "container ";
body.appendChild(div);

var p = document.createElement("p");
p.className = "p";
// p.innerText = "here you can show your ideas";
var kuka = getCookie('userLogin');
console.log(kuka);
if (kuka !== '') {
    p.innerHTML = '<p>hello! ' +kuka + ' </p>';

}
else {
    p.innerText = "here you can show your ideas :"+kuka;
}
div.appendChild(p);

var h1 = document.createElement("h1");
h1.className = "h1";
h1.innerText = "Welcome to IT-helper";
div.appendChild(h1);

var a = document.createElement("a");
a.className = "button";
a.href = "views/index.php";
a.value = "let begin";
a.innerText = "Go to Blog";
div.appendChild(a);


//получаем куку по имени
function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return(setStr);
}