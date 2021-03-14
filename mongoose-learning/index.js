const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const create = require("./routes/create-and-Insert");
const find = require("./routes/findDocument");

//local Databse connection
mongoose
  .connect("mongodb://localhost:27017/ttchanell", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection established to Mongodb"))
  .catch((err) => console.log(err));

//routes running
//app.use("/", create);
app.use("/", find);

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
