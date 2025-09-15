const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main()
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const chatSchema = new mongoose.Schema({
  from: String,
  to: String,
  msg: String,
  created_at: Date,
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
