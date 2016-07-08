var express = require('express');
var app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "Files/books.json" );
})

app.get('/books', function (req, res) {
   res.sendFile( __dirname + "/" + "Files/books.json" );
})

app.get('/markers', function (req, res) {
   res.sendFile( __dirname + "/" + "Files/markers.json" );
})

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, app.get('port'));

})