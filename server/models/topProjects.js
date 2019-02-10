//Require mongoose package
const mongoose = require("mongoose");

const TopProjectsSchema = mongoose.Schema({
  _id: String,
  user: String,
  projects: [
    {
      id: Number,
      position: String,
      title: String,
      subtitle: String,
      snip: [{ id: String, catagory: String, text: String, nbtnNme: String, img: String }]
    }
  ]
});

const TopProjects = (module.exports = mongoose.model("topProjects", TopProjectsSchema, "topProjects"));

module.exports.getUsersTopProjects = (user, callback) => {
  TopProjects.findOne({ user: user }, callback);
};

//Here we need to pass an id parameter to TopProjects.update
module.exports.updateTopProjectContent = (user, project, callback) => {
  let projectQuery = {
    "projects.$.title": project.title,
    "projects.$.subtitle": project.subtitle,
    "projects.$.snip": [
      { id: project.snip[0].id, catagory: project.snip[0].catagory, text: project.snip[0].text, img: project.snip[0].img },
      { id: project.snip[1].id, catagory: project.snip[1].catagory, text: project.snip[1].text, btnName: project.snip[1].btnName, img: project.snip[1].img },
      { id: project.snip[2].id, catagory: project.snip[2].catagory, text: project.snip[2].text, btnName: project.snip[2].btnName, img: project.snip[2].img },
      { id: project.snip[3].id, catagory: project.snip[3].catagory, text: project.snip[3].text, btnName: project.snip[3].btnName, img: project.snip[3].img }
    ]
  };
  TopProjects.collection.updateOne({ user: user, "projects.id": project.id }, { $set: projectQuery }, callback);
};

module.exports.updateTopProjectPosition = (user, projects, callback) => {
  TopProjects.collection.updateOne({ user: user }, { $set: { projects: projects } }, callback);
};
