/** Server startup for Message.ly. */
const http = require('http');
const config = require('./config');

const app = require("./app");


app.listen(3000, function () {
  console.log("Listening on 3000");
});

