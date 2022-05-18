"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 3000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/users', function (req, res) {
    res.send('Hello Samurai!');
});
app.post('/users', function (req, res) {
    res.send('We have created samurai');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
