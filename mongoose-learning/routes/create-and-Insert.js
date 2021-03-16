const express = require("express");
const Playlist = require("../model/playList");

//create document or insert using older way of writing syntax using promise
// const nodePlaylist = new Playlist({
//   name: "saket",
//   ctype: "Backend",
//   vidoes: 50,
//   author: "me",
//   active: true,
// });

// nodePlaylist.save();

//create document or insert single document in database using async await
const createDocument = async () => {
  try {
    const nodePlaylist = new Playlist({
      name: "Love with Physics",
      ctype: "frontend",
      vidoes: 400,
      author: "Walter",
      email: "walter@gmail.com",
      active: true,
    });

    const result = await nodePlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();

//create multiple document and insert multiple document in database using async await
// const createDocument = async () => {
//   try {
//     const nodePlaylist = new Playlist({
//       name: "saket",
//       ctype: "Backend",
//       vidoes: 50,
//       author: "me",
//       active: true,
//     });
//     const databasePlaylist = new Playlist({
//       name: "rohan",
//       ctype: "Database",
//       vidoes: 50,
//       author: "not me",
//       active: true,
//     });
//     const frontendPlaylist = new Playlist({
//       name: "prince",
//       ctype: "frontend",
//       vidoes: 60,
//       author: "someone else",
//       active: true,
//     });

//     const result = await Playlist.insertMany([
//       nodePlaylist,
//       databasePlaylist,
//       frontendPlaylist,
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(error);
//   }
// };
//createDocument();

module.exports = createDocument;
