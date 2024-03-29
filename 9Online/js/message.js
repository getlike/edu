var offsetMessages = 0;

function getMessages(count = 30, offset = offsetMessages, user_id) {

	var xml = new XMLHttpRequest();
		xml.open("GET", "http://at.educoin.biz/chat-api/?entity=messages&count=" + count + "&offset=" + offset, false);
		xml.send();

	var response = JSON.parse(xml.response); // TEXT => JSON

	return response.messages;
}



function createListMessages() {
	var messageListBlock = document.querySelector("#message-list");

	var messages = getMessages(10);
	console.dir(messages);
	for(var i = 0; i < messages.length; i = i + 1) {
		var li = document.createElement("li");
			li.innerText = messages[i].message;

		messageListBlock.appendChild(li);
	}
}

createListMessages();



var messageListBlock = document.querySelector("#message-list");
messageListBlock.onscroll = function(e) {
	console.dir(e)

	var element= e.target;

	if(element.scrollTop + 1000 >= element.scrollHeight) {
		offsetMessages = offsetMessages + 10;
		createListMessages();
	}
}