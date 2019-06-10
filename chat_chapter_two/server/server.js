"use strict";

const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');

nunjucks.configure('../client/', {
        autoescape: true,
        express: app
    }
);

app.get('/', (req, res) => {
    res.sendFile(path.join('index.html'));
});

app.listen(7777, '0.0.0.0', () => {
    console.log('server started on port 7777');
});
bed