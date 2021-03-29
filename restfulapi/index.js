const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const mongoose = require("mongoose");
const StudentRouter = require("./routes/students.js");

//local Database connection
mongoose
  .connect("mongodb://localhost:27017/Student-Details", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connection established to Mongodb"))
  .catch((err) => console.log(err));

//express.json() is a method inbuilt to recognize the incoming request object as a JSON Object.
//This method is called as a middleware in your app using code: app.use(express.json())
app.use(express.json());
app.use(StudentRouter);

//Server Running on predefined port
app.listen(port, () => {
  console.log(`Server is connected to ${port}`);
});

//YOU don't need express.json() and express.urlencoded() for GET Requests or Delete Requests
//WE only need it for post and put requests
