const express = require('express');
const app = express();


app.set('view engine', 'pug');

app.get('/', function(req, res, next) {
 res.render('index');
})
app.get('/about', function(req, res, next) {
 res.render('index');
})
app.get('/Contact', function(req, res, next) {
 res.render('index');
})
app.get('/portfolio', function(req, res, next) {
 res.render('index');
})

app.listen(3000, function(){
    const port = 3000
 console.log(` listen port: ${port}`);
})