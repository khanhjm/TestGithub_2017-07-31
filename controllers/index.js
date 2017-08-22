// gộp các router định tuyến vào file index, sau đó vào app.js rồi trả về các https. sau đó nó chỉ trả về link /user/add
// chứ ko trả về /user/user/add
const express = require('express');
const router = express.Router();
var app = express();
app.use('/user', require('./user'));
app.use('/section', require('./section'));

app.get('/', function(req, res) {
    res.render('home', {title: 'Home Page'})
})
module.exports = app