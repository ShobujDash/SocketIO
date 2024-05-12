const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

// Boradcasting
// io.on("connection", function (socket) {
//   console.log("New User connected");
//   // io.sockets.emit("MyBroadCast", "Hello EveryOne hi !");
// });




// namespace
let buyNsp = io.of("/buy");


buyNsp.on("connection", function (socket) {
  console.log("New User connected");
  buyNsp.emit("MyEvent", "Hello buy");
});

let sellNsp = io.of("/sell");
sellNsp.on("connection", function (socket) {
  console.log("New User connected");
  sellNsp.emit("MyEvent", "Hello sell !");
});





app.get("/", (req, res) => {
  res.send(__dirname + "/index.html");
});

expressServer.listen(3000, function () {
  console.log("Server run at 3000");
});
