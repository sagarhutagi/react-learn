const express = require("express");
const app = express();
const path = require("path");
const chat = require("./modles/chat.js");
var methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 8080;

app.listen(port, () => {
  console.log("The Website is running on http://localhost:8080");
});

app.get("/", (req, res) => {
  res.send("Website is Working");
});

app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  // console.log(chats);
  res.render("chats", { chats });
});

app.get("/chats/new", (req, res) => {
  res.render("newchat");
});

app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  // console.log(newChat);
  chat
    .insertOne({ from, to, msg, created_at: new Date() })
    .then(() => {
      console.log("Msg Added");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("New Message Sent");
});
