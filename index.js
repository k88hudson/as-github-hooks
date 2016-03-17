"use strict";

const connect = require("connect");
const http = require("http");

const app = connect();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// respond to all requests
app.use(function(req, res){
  res.end("Hi!\n");
});

http.createServer(app).listen(7777);
