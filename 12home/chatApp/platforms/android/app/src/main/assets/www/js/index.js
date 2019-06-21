var app = {
    // Application Constructor
    initialize: function() {

        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);

    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        getMessage();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
//crud

function getMessage(){
    var uXmlRecMessage = new XMLHttpRequest();

    uXmlRecMessage.open('GET', 'http://at.educoin.biz/chat-api/?entity=messages&count=500', false);
    uXmlRecMessage.send();
    var messageXml = JSON.parse(uXmlRecMessage.response);
    console.dir(messageXml);
}
// var testBtn = document.querySelector("#test");
// // testBtn.addEventListener('click', function(e) {
// //     alert("test");
// //     console.dir(this);
// // });

// var User = {
//     name: "Peter",
//     sayName: function() {
//         alert(this.name);
//         console.dir(this);
//     },
//     setName: function(newName) {
//         this.name = newName;
//         console.dir(this);
//     },
//     getName: function() {
//         this.setName("Igor");
//     }
// }

// User.getName();