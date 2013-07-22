var express = require('express');
var app = express.createServer(express.logger());
app.use(express.logger());

app.get('/', function(request, response) {
    var buf = fs.readFileSync('./index.html','utf8');
    response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
