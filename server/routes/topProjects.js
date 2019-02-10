const express = require("express");
const router = express.Router();
const topProjects = require("../models/topProjects");

router.get("/:user", (req, res) => {
  getUsersTopProjects(res, req.params.user);
});

router.put("/:user", function(req, res) {
  var user = req.params.user;
  topProjects.updateTopProjectContent(user, req.body, (err, response) => {
    !err ? getUsersTopProjects(res, user) : res.json(errorHandler("update", err));
  });
});

router.put("/:user/moveProject", function(req, res) {
  var user = req.params.user;
  topProjects.updateTopProjectPosition(user, req.body, (err, response) => {
    !err ? getUsersTopProjects(res, user) : res.json(errorHandler("update", err));
  });
});

function getUsersTopProjects(res, user) {
  topProjects.getUsersTopProjects(user, (err, projects) => {
    if (!err) {
      res.write(JSON.stringify({ success: true, projects: projects }, null, 2));
      res.end();
    } else {
      res.json(errorHandler("load", err));
    }
  });
}

function errorHandler(message, err) {
  return { success: false, message: "Failed to " + message + " project. Error: " + err };
}

module.exports = router;
