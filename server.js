const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const HttpError = require("./models/http-error");

app.use(cors());
app.use(express.json());

app.listen(3000);

//404 Error
app.use((req, res, next) => {
  const error = new HttpError("could not find this route", 404);
  throw error;
});

app.get("/", (req, res) => {
  res.send("<p>Home Page</p>");
});
