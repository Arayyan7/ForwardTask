var express = require("express");
var https = require("https");
var app = express();
var bodyParser = require("body-parser");
var message = require("./models/message");
var latestmessages = require("./models/latestmessages");
app.use(bodyParser.json());
app.use(express.json());

var port = 2000;

//this the object which supposed to be provided by UI
let Mobj = {
  user: {
    id: 123,
    msg: {
      senderid: 123,
      receiverid: 1234,
      encmsg: "xyz",
    },
  },
};



//this to decrypt the mesgs
async function decrypt() {}
//this to encrypt the mesgs
async function encrypt() {}



app.post("/", (obj, res) => {
  obj.forEach((o) => {
    socket.broadcast
      .to(o.msg.senderid)
      .emit("send msg", { message: decrypt(o.msg.encmsg) });

    savemsgobj(o.msg);
  });

  res.send("done").status(200);
});

async function savemsgobj(obj) {
  //saving the new messages
  message.save(obj, (err) => {
    if (err) console.log("error while saving the new message");
    else {
      console.log("message inserted successfuly");
      //update latest message
      latestmessages.save(obj, (err) => {
        if (err) console.log("error while updating latest message");
        else console.log("latest message updated successfuly");
      });
    }
  });
}

app.listen(port, (res, err) => {
  if (err) console.log(err);
  else console.log("listing on port" + port);
});
