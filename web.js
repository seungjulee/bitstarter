#!/usr/bin/env node
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var indexPage = fs.readFileSync("./index.html","utf-8");
  response.send(indexPage.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
