"use strict";

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const path = require('path');

var server = require('http').Server(app);
var io = require('socket.io')(server, {serveClient: true});


app.use('/assets', express.static(path.join(__dirname, '..', 'client', 'public')));

nunjucks.configure(path.join(__dirname, '..', 'client', 'views'), {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.render('index.html');
});
io.on('connection', function (socket) {
    socket.emit('connected', {hello: 'You are connected!'});
    socket.join('all');
    socket.on('msg', content => {
        const obj = {
            date: new Date(),
            content: content,
            username: "getlike"
        };
        socket.emit("message", obj);
        socket.to('all').emit("message".obj);

    });
});
server.listen(7777, '0.0.0.0', () => {
    console.log('start server');
});