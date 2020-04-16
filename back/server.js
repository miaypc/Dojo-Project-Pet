require("dotenv").config();
const mongoose = require("mongoose");
const UserModel = require("./model/user.model");

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/petdating");
};

connect();

const express = require("express");

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// amaz0n.com => amazon.com // amazonmusic.com // CORS

// find()

app.post("/users", (req, res) => {
  // const req.body = {name:"blob", userName:"dfg"};
  console.log("test");
  UserModel.create(req.body);
  //   UserModel.create({name:"bob"});
  //    req.body.name
});

// // UserModel.findById(id);
// app.get("/user", async (req, res) => {
//   await UserModel.find({});
// });

app.listen(3001, () => {
  console.log("app running on 3001");
});
