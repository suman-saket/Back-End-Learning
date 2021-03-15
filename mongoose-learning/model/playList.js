const mongoose = require("mongoose");

//Schema
//A mpngoose model is a wrapper on the Mongoose Schema.
//A mongoose schema defines the structure of the document,default values,validators,etc
//wheras a mongoose model provides an interface to the databse for creating,querying,updating,deleting records etc

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: trye,
    lowercase: true,
    trim: true,
    minlength: [2, "minimum 2 letters"],
    maxlength: 30,
  },
  ctype: {
    type: String,
    required: true,
    enum: ["frontend", "backend", "database"],
  },
  vidoes: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

//collection creation
module.exports = new mongoose.model("Playlist", playlistSchema);
