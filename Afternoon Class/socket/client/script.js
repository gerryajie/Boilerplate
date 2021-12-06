import { io } from "socket.io-client";

const joinRoomButton = document.getElementById("room-button");
const messageInput = document.getElementById("message-input");
const roomInput = document.getElementById("room-input");
const form = document.getElementById("form");

// handshake koneksi ke server
const socket = io("http://localhost:3000");
console.log("🚀 ~ file: script.js ~ line 9 ~ socket", socket);

socket.on("receive-message", (payload) => {
  console.log("nerima payload", payload);
  displayMessage(payload);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value;
  const room = roomInput.value;

  if (message === "") {
    return;
  }

  //disini ngetrigger event "send-message"
  socket.emit("send-message", message);

  displayMessage(message);

  messageInput.value = "";
});

joinRoomButton.addEventListener("click", (event) => {
  const room = roomInput.value;
});

function displayMessage(message) {
  const div = document.createElement("div");
  div.textContent = message;
  document.getElementById("message-container").append(div);
}