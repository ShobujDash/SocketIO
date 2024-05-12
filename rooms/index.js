const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function (socket) {
  console.log("New User connected");

  socket.join('kitchen-room');
  let sizeKitchen = io.sockets.adapter.rooms.get("kitchen-room").size;
  io.sockets.in("kitchen-room").emit('cooking',"Fried Rice Cooking" + sizeKitchen);


  socket.join('bed-room');
  io.sockets.in("bed-room").emit('sleep',"I am sleeping");
  io.sockets.in("bed-room").emit('rest',"I am taking rest");



});

expressServer.listen(3000, function () {
  console.log("Server run at 3000 ");
});
