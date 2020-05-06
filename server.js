const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const socketio = require("socket.io");
const cors = require("cors");
// const socketWeb = require("./server/socket/socket");

const authRoute = require("./server/routers/userRoute/authRoute");
const chatRoute = require("./server/routers/chatRoute/chatRoute");
const userRoute = require("./server/routers/userRoute/userRoute");
// const fileRoute = require("./server/routers/fileRoute/fileRoute");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

mongoose.connect(
  process.env.CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DataBase CONNECTED !!!");
  }
);

io.on("connection", (socket) => {
  socket.on("join", (chatBoxId) => {
    socket.join(chatBoxId);
  });

  socket.on("sendFile", ({ fileName, chatBoxId }) => {
    io.to(chatBoxId).emit("file", fileName);
  });

  socket.on("sendMessage", ({ userId, message, chatBoxId }) => {
    io.to(chatBoxId).emit("message", { id: userId, text: message });
  });
});

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/authentication/user", authRoute);
app.use("/user", userRoute);
app.use("/chat", chatRoute);
// app.use("/file", fileRoute);w

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server started on port ${port}`));
