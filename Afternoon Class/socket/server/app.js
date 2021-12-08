// ini setup server pake express
// const express = require("express");
// const app = express();
// ini setup buka koneksi socket di server
// const http = require("http");
// const server = http.createServer(app);

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
