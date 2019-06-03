"use strict";

const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const path = require('path');

var server = require('http').Server(app);
var io = require('socket.io')(server,{serveClient:true});


app.use('/assets', express.static(path.join(__dirname, '..', 'client', 'public')));

nunjucks.configure(path.join(__dirname, '..', 'client', 'views'), {
    autoescape: true,
    express: app
});

app.get('/', (req, res) => {
    res.render('index.html');
});
io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
app.listen(7777, '0.0.0.0', () => {
    console.log('start server');
});