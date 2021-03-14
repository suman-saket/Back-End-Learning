const express = require("express");
const Playlist = require("../model/playList");

//Route to get saved data from database

// const getDocument = async () => {
//   try {
//     //const result = await Playlist.find();   //query to get all the data
//     const result = await Playlist.find({ ctype: "frontend" }) //query to get specific data like ciurse type:front end with limit and other filteration
//       .select({ name: 1 })
//       .limit(3);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

//performing comparison opeartator ($in,$nin etc..)

// const getDocument = async () => {
//   try {
//     const result = await Playlist
//       //.find({ vidoes: { $lt: 60 } }); //query to get specific data like ciurse type:front end with limit and other filteration
//       //.find({ ctype: { $in: ["Backend", "Database"] } })
//       .find({ ctype: { $nin: ["Backend", "Database"] } })
//       .select({ name: 1 });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

//performing Logical opearator $and,$or,$not,$nor

const getDocument = async () => {
  try {
    // const result = await Playlist.find({
    //   $or: [{ ctype: "Backend" }, { author: "saket" }],
    // }).select({ name: 1 });
    const result = await Playlist.find({
      $and: [{ ctype: "Backend" }, { author: "me" }],
    }).select({ name: 1 });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

getDocument();

module.exports = getDocument;
