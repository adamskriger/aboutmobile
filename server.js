var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser')
var request = require('request')
var path = require('path')




var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('short'))
// app.use(express.static('./public'))
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
  console.log('Homepage served')
  res.render('index.html')
})


var x = 10;

if (x=10) {
  console.log('x is ten')
}








var port = process.env.PORT || 3000
var server = app.listen(port)
