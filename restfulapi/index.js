const express = require("express");
const app = express();
const Student = require("./models/students-registration");
const port = process.env.PORT || 9000;
const mongoose = require("mongoose");

//local Database connection
mongoose
  .connect("mongodb://localhost:27017/Student-Details", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connection established to Mongodb"))
  .catch((err) => console.log(err));

//express.json() is a method inbuilt to recognize the incoming request object as a JSON Object.
//This method is called as a middleware in your app using code: app.use(express.json())
app.use(express.json());

//Express Route Setup
app.get("/", (req, res) => {
  res.send("Hello from client side");
});
//Route to post data in our databse using promise syntax
app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`Server is connected to ${port}`);
});

//YOU don't need express.json() and express.urlencoded() for GET Requests or Delete Requests
//WE only need it for post and put requests
