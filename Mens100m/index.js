const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const MensRanking = require("./model/mens-Schema.js");

//local Database connection
mongoose
  .connect("mongodb://localhost:27017/Athlete-Details", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connection established to Mongodb"))
  .catch((err) => console.log(err));

app.post("/mens", async (req, res) => {
  try {
    const addMensRecords = new MensRanking(req.body);
    await addMensRecords.save();
    res.status(201).json(addMensRecords);
  } catch (err) {
    res.status(400).send(err);
  }
});

//getting request of by top ranking
app.get("/mens", async (req, res) => {
  try {
    const getMen = await MensRanking.find({}).sort({ ranking: 1 });
    res.status(201).json(getMen);
  } catch (err) {
    res.status(400).send(err);
  }
});

//we will get individual get request
app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById({ _id });
    res.status(201).json(getMen);
  } catch (err) {
    res.status(400).send(err);
  }
});

//express.json() is a method inbuilt to recognize the incoming request object as a JSON Object.
//This method is called as a middleware in your app using code: app.use(express.json())
app.use(express.json());
//app.use(StudentRouter);

//Server Running on predefined port
app.listen(port, () => {
  console.log(`Server is connected to ${port}`);
});

//YOU don't need express.json() and express.urlencoded() for GET Requests or Delete Requests
//WE only need it for post and put requests
