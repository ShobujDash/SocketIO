const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

const path = require("path");
app.use(express.static("client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});


io.on("connection", function (socket) {
  console.log("New User connected");

  setTimeout(() => {
    socket.emit("msg", "This is message");
  }, 5000);






  socket.on("disconnect", function () {
    console.log("User Disconnected");
  });
});


expressServer.listen(5000, function () {
  console.log("Server run port 5000")
});
