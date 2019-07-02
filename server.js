var express = require('express');
var path = require('path');

var app = express(); 
var myPort = process.env.PORT || 3000; 

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());

app.use(express.static('app/public'));


app.listen(myPort, function() {
	console.log("App listening on PORT: " + myPort);
});