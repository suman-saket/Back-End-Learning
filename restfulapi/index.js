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
    useFindAndModify: false,
  })
  .then(() => console.log("connection established to Mongodb"))
  .catch((err) => console.log(err));

//express.json() is a method inbuilt to recognize the incoming request object as a JSON Object.
//This method is called as a middleware in your app using code: app.use(express.json())
app.use(express.json());

//Express Route Setup

//Route to get all the saved data from our database

app.get("/students", async (req, res) => {
  try {
    const userData = await Student.find();
    res.status(200).send(userData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Route to find data of student by id

app.get("/students/:id", async (req, res) => {
  try {
    const student_id = req.params.id;
    const userData = await Student.findById({ _id: student_id });
    console.log(userData);

    if (!userData) {
      return res.status(404).send();
    } else {
      res.status(200).send(userData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//Route to find data of student by his/her Name

app.get("/students/name", async (req, res) => {
  try {
    const student_name = req.params.name;
    const userData = await Student.find({ name: student_name });
    console.log(userData);

    if (!userData) {
      return res.status(404).send();
    } else {
      res.status(200).send(userData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//Route to delete a uder data

app.delete("/students/:id", async (req, res) => {
  try {
    const student_id = req.params.id;
    const deleteuserData = await Student.findByIdAndDelete({ _id: student_id });

    if (!student_id) {
      return res.status(400).send();
    } else {
      res.status(200).send(deleteuserData);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

//Route to update/edit user data
app.patch("/students/:id", async (req, res) => {
  try {
    const student_id = req.params.id;
    const edituserData = await Student.findByIdAndUpdate(
      { _id: student_id },
      req.body,
      { new: true }
    );
    res.status(200).send(edituserData);
  } catch (err) {
    res.status(404).send(err);
  }
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

//Route to post data in our databse using async-await syntax
app.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Server Running on predefined port
app.listen(port, () => {
  console.log(`Server is connected to ${port}`);
});

//YOU don't need express.json() and express.urlencoded() for GET Requests or Delete Requests
//WE only need it for post and put requests
