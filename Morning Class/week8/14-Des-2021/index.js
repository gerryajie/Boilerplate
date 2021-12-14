const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app);
const { Server } = require("socket.io")
const io = new Server(server)

app.set("view engine", "ejs")
app.get("/", (req, res) => {
  res.render("home")
})

io.on('connection', (socket) => {
  console.log("============== Server Connected =============")
  socket.on("disconect", () => {
    console.log("======== User DC ==========")
  })

  socket.on("send-chat", (msg) => {
    console.log("MESSAGE =", msg)
    io.emit("send-chat", msg)
  })

})

server.listen(3000, () => {
  console.log("SUCCCESS")
})