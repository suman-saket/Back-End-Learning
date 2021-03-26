const express = require("express");
const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: { type: Number, required: true, unique: true },
  event: {
    type: String,
    default: "100m",
  },
});

//creating collection
const Mens = new mongoose.model("MEN", menSchema);

module.exports = Mens;
