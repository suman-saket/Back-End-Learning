const express = require("express");
const Student = require("../models/students-registration");
const router = new express.Router();

//Express Route Setup

//Route to get all the saved data from our database

router.get("/students", async (req, res) => {
  try {
    const userData = await Student.find();
    res.status(200).send(userData);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Route to find data of student by id

router.get("/students/:id", async (req, res) => {
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

router.get("/students/name", async (req, res) => {
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

router.delete("/students/:id", async (req, res) => {
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
router.patch("/students/:id", async (req, res) => {
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
router.post("/students", (req, res) => {
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
router.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
