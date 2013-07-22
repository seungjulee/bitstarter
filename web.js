var express = require('express');
var app = express.createServer(express.logger());
app.use(express.logger());

var index1 = fs.readFileSync(index.html);
var buf = new Buffer(fs);

app.get('/', function(request, response) {
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
