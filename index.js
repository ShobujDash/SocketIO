const express = require('express');
const app = express()
const http = require('http')
const expressServer = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(expressServer);

io.on('connection', function (socket) {
  console.log('New User connected')
 
  // setTimeout(() => {
  //   socket.send('Learn with Shobuj Das (server --->client)')
  // }, 4000);

  
  setInterval(() => {
    let d = new Date();
    let t = d.getTime();
    socket.send(t);
  }, 2000);

})



app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html");
})


expressServer.listen(3000, function () {
  console.log("Server run at 3000")
})















