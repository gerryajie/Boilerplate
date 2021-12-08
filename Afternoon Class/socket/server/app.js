// ini setup server pake express
// const express = require("express");
// const app = express();
// ini setup buka koneksi socket di server
// const http = require("http");
// const server = http.createServer(app);
var jwt = require("jsonwebtoken");

function decodeJwt(token) {
  return jwt.decode(token);
}

const { instrument } = require("@socket.io/admin-ui");

const io = require("socket.io")(3000, {
  cors: {
    origin: ["http://localhost:8080"],
  },
});
// const { Server } = require("socket.io");
// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:8081"],
//   },
// });

instrument(io, {
  auth: false,
});

// open namespace localhost:3000/user
// io.of("/user").on("connection")
const userIo = io.of("/user");
// handling connection yg ke localhost:3000/user
userIo.on("connection", (socket) => {
  console.log("connected to user namespace", socket.id);
  console.log(
    "connected to user namespace: " + JSON.stringify(socket.userData)
  );
});

userIo.use((socket, next) => {
  // if (isValid(socket.request)) {
  //   next();
  // } else {
  //   next(new Error("invalid"));
  // }

  if (socket.handshake.auth.token) {
    let token = socket.handshake.auth.token;
    let decodeToken = decodeJwt(token);
    socket.userData = decodeToken;
    next();
  } else {
    next(new Error("Please send token"));
    // umpamanya
    // io.emit("connect-error", "Please send token")
  }
});

// namespace localhost:3000
io.on("connection", (socket) => {
  console.log(`a user connected ${socket.id}`);
  socket.on("custom-event", (number, string, obj) => {
    console.log(number, string, obj);
  });

  socket.on("send-message", (message, room) => {
    console.log("message, ", message);
    if (room === "") {
      // io.emit("receive-message", message, );
      socket.broadcast.emit("receive-message", message);
    } else {
      socket.to(room).emit("receive-message", message);
    }
  });

  // listener join-room
  socket.on("join-room", (room, cb) => {
    console.log("room joined", room);
    socket.join(room);
    cb(`joined room: ${room}`);
  });
});

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.listen(3000, () => console.log("server is running on 3000"));
