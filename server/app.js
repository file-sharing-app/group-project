if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const Controller = require("./controllers/controller");

const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});


const errHandle = require("./middlewares/errorHandlers");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", Controller.register);
app.post("/login", Controller.login);

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("sender-join", (data) => {
    socket.join(data.roomId);
    console.log("sender-join", data.roomId);
  });

  socket.on("receiver-join", (data) => {
    socket.join(data.roomId);
    console.log("receiver-join", data.roomId);
    socket.in(data.roomId).emit("init", data.roomId);
  });

  socket.on("sender-file-meta", (data) => {
    socket.in(data.roomId).emit("server-meta", data.metadata);
  });

  socket.on("receiver-start", (data) => {
    console.log("server-start emitted", data.roomId);
    socket.in(data.roomId).emit("server-start", {});
  });

  socket.on("sender-file-raw", (data) => {
    socket.in(data.roomId).emit("server-share", data.buffer);
    console.log("server-share emitted", data.roomId);
  });
});

server.listen(4000, () => {
  console.log("server running at 3000");
});

app.use(errHandle);

module.exports = app;
