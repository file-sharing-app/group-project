if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require('express');
const Controller = require('./controllers/controller');
const { createServer } = require('node:http')
const { Server } = require('socket.io')
const cors = require("cors")

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
})
app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", Controller.register)
app.post("/login", Controller.login)

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('sender-join', (data) => {
    socket.join(data.roomId) 
    console.log('sender-join', data.roomId)
  })

  socket.on('receiver-join', (data) => {
    socket.join(data.roomId) 
    socket.in(data.roomId).emit('init', data.roomId)
    console.log('receiver-join')
  })

  socket.on('sender-file-meta', (data) => {
    socket.in(data.roomId).emit('server-meta', data.metadata)
  })
  
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

module.exports = app