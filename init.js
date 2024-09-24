const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main().then(()=>{
    console.log("mongoose connected");
  })
  
  .catch(err => console.log(err));
  
  async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
  }
    let allChats = [
    {
    from :"shristy gour",
    to:"ragini ",
    msg:"missing u ...",
    created_at:new Date()
  },
  {
    from :"shristy",
    to:"akku ",
    msg:"coming soon ",
    created_at:new Date()
  },
  {
    from :"ragini",
    to:"shristy  ",
    msg:"okkk shristy",
    created_at:new Date()
  },
  {
    from :"aastha",
    to:"akku  ",
    msg:"we are here",
    created_at:new Date()
  }
]

Chat.insertMany(allChats);