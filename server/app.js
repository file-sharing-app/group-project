const express = require('express');
const Controller = require('./controllers/controller');
const { createServer } = require('node:http')
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", Controller.register)

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('sender-join', (data) => {
    socket.join(data.roomId) 
  })

  socket.on('receiver-join', (data) => {
    socket.join(data.roomId) 
    socket.in(data.roomId).emit('init', data.roomId)
  })
  //use multer in /
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});