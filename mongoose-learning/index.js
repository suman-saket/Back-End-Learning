const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ttchanell", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection established to Mongodb"))
  .catch((err) => console.log(err));

//Schema
//A mpngoose model is a wrapper on the Mongoose Schema.
//A mongoose schema defines the structure of the document,default values,validators,etc
//wheras a mongoose model provides an interface to the databse for creating,querying,updating,deleting records etc

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  vidoes: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);

//create document or insert using older way of writing syntax using promise
// const nodePlaylist = new Playlist({
//   name: "saket",
//   ctype: "Backend",
//   vidoes: 50,
//   author: "me",
//   active: true,
// });

// nodePlaylist.save();

//create document or insert using async await
const createDocument = async () => {
  try {
    const nodePlaylist = new Playlist({
      name: "saket",
      ctype: "Backend",
      vidoes: 50,
      author: "me",
      active: true,
    });

    const result = await nodePlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(error);
  }
};
createDocument();

//local port running
app.listen(8000, () => {
  console.log("App is running at port 8000");
});

//The callback function has 2 parameter, request(req) and response(res)
//the request object(req) represents the HTTP request and
//has properties fpr the request query string,parameters,body,
//HTTP headers,etc.

//Similarly the response object represent the HTTP response
//That the express app sends when it receives an HTTP request.
