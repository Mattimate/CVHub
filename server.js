// We’ll declare all our dependencies here
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const topProjects = require("./server/routes/topProjects");

mongoose.connect(
  "mongodb://localhost:27017/cvhub",
  { useNewUrlParser: true }
);

const port = 3000;
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
  res.send("Invalid page");
});

server.use("/topProjects", topProjects);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
