const express = require('express');
const sqlite = require('sqlite3');

//modules

const users = require("./routes/users");
const notes = require("./routes/notes");
const channels = require("./routes/channels");

const app = express();

app.use(express.json());
app.use("/api/users", users );
app.use("/api/notes", notes );
app.use("/api/channels", channels );

const PORT = 9001;
const URL = "127.0.0.1";

app.listen(PORT, URL, () => {
  console.log("Bulletin Loaded!");
});