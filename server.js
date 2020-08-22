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
const relationshipRoute = require("./server/routers/relationshipRoute/relationshipRoute");
const fileRoute = require("./server/routers/fileRoute/fileRoute");
const postRoute = require("./server/routers/userRoute/postRoute");
const notiRoute = require("./server/routers/notiRoute/notiRoute");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

mongoose.connect(
  process.env.CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("DataBase CONNECTED !!!");
  }
);

io.on("connection", (socket) => {
  socket.on("join", (chatBoxId) => {
    socket.join(chatBoxId);
  });

  socket.on("request", (id) => {
    socket.join(id);
  });

  socket.on("sendRequest", ({ id, type, data }) => {
    if (type === "acceptFriend") {
      io.to(id).emit(type, data);
    } else io.to(id).emit(type);
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
app.use("/relationship", relationshipRoute);
app.use("/chat", chatRoute);
app.use("/file", fileRoute);
app.use("/post", postRoute);
app.use("/notification", notiRoute);

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server started on port ${port}`));

//File

const fs = require("fs");
const { google } = require("googleapis");

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/drive"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = "token.json";

const OAuth2Data = require("./credentials.json");
const { client_secret, client_id, redirect_uris } = OAuth2Data.installed;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

fs.readFile("credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize();
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the

*/

function authorize() {
  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
}

app.get("/google/callback", (req, res) => {
  const code = req.query.code;
  if (code) {
    oAuth2Client.getToken(code, function (err, tokens) {
      if (err) return console.error("Error retrieving access token", err);
      console.log("Successfully authenticated!");
      console.log(tokens);
      oAuth2Client.setCredentials(tokens);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(tokens), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });

      res.status(200).json("OK!");
    });
  }
});

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listFiles(auth) {
  const drive = google.drive({ version: "v3", auth });
  drive.files.list(
    {
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const files = res.data.files;
      if (files.length) {
        console.log("Files:");
        files.map((file) => {
          console.log(`${file.name} (${file.id})`);
        });
      } else {
        console.log("No files found.");
      }
    }
  );
}
