const chat = require("./modles/chat.js");

let allChats = [
  {
    from: "neha",
    to: "preeti",
    msg: "send me notes for the exam",
    created_at: new Date(),
  },
  {
    from: "rohit",
    to: "mohi",
    msg: "teach me js callbacks",
    created_at: new Date(),
  },
  {
    from: "sagar",
    to: "vivek",
    msg: "what to do next?",
    created_at: new Date(),
  },
  {
    from: "aditya",
    to: "druv",
    msg: "Hey buddy",
    created_at: new Date(),
  },
];

chat.insertMany(allChats).then((res) => {
  console.log(res);
});
