require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 5000;

app.use(cors());

// const allowedOrigins = [
//   "https://crud-using-mern.netlify.app/",
//   `https://crudusingmern.onrender.com/`,
// ];
// app.use(
//   cors({
//     origin: allowedOrigins,
//   })
// );

app.use(express.json()); //our data will be in json format that's why

app.get("/", (req, res) => {
  res.json("server start");
});

app.use(router);

app.listen(port, () => {
  console.log(`server is start port number ${port}`);
});
