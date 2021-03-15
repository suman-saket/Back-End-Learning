const express = require("express");
const playList = require("../model/playList");
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

// const getDocument = async () => {
//   try {
//     // const result = await Playlist.find({
//     //   $or: [{ ctype: "Backend" }, { author: "saket" }],
//     // }).select({ name: 1 });
//     const result = await Playlist.find({
//       $and: [{ ctype: "Backend" }, { author: "me" }],
//     }).select({ name: 1 });
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

//Sort Query and Conut query performing in database
// const getDocument = async () => {
//   try {
//     const result = await Playlist.find({
//       author: "notme",
//     })
//       .select({ name: 1 })
//       //.countDocuments() //count query
//       .sort({ name: 1 }); //sort query
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getDocument();

//Update Query in Mongodb
// const updateDocument = async (id) => {
//   try {
//     const result = await Playlist.findByIdAndUpdate(
//       { _id: id },
//       {
//         $set: {
//           name: "React",
//           ctype: "FrontEnd",
//           videos: 55,
//           author: "Saket",
//         },
//       },
//       {
//         new: true,
//         useFindModify: false,
//       }
//     );
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// updateDocument("604dae7bedb1d50ff4f003f5");

//Delete Query
const deleteDocument = async (id) => {
  try {
    //const result = await Playlist.deleteOne({ _id: id });   //it will only show how many document deleted
    const result = await Playlist.findByIdAndDelete({ _id: id }); //it shows which document has been deleted with full details
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
deleteDocument("604db6fe3278821e4842b716");

// module.exports = getDocument;
// module.exports = updateDocument;
module.exports = deleteDocument;
