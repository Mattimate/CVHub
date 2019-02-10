import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Project } from "model/.";
import { ProjectService } from "service/.";

@Component({
  selector: "app-image-editor",
  templateUrl: "./image-editor.component.html",
  styleUrls: ["./image-editor.component.css"]
})
export class ImageEditorComponent implements OnInit {
  @Output() uploaded = new EventEmitter<string>();
  @Input() projects: Project[];
  @Input() project: Project;
  private subscription = { updateProjects: null };

  constructor(private projectService: ProjectService) {}

  ngOnInit() {}

  uploadComplete() {}
  move(direction) {
    let cmp = this;
    let currId = this.project.id;
    switch (direction) {
      case "up": {
        let updatedId = this.project.id - 1;
        updateProjects(updatedId);
        break;
      }
      case "down": {
        let updatedId = this.project.id + 1;
        updateProjects(updatedId);
        break;
      }
      case "swap": {
        console.log("test");
        this.project.position = this.project.position === "left" ? "right" : "left";
        cmp.subscription.updateProjects = cmp.projectService.moveTopProjects(this.projects).subscribe(res => {
          cmp.uploaded.emit(res.projects.projects);
        });
        break;
      }
    }

    function updateProjects(updatedId) {
      updateSnipIds(currId, updatedId);
      updateSnipIds(updatedId, currId);
      updateProjectIds(currId, updatedId);

      cmp.subscription.updateProjects = cmp.projectService.moveTopProjects(cmp.projects).subscribe(res => {
        cmp.uploaded.emit(res.projects.projects);
      });
    }

    function updateProjectIds(id1, id2) {
      cmp.projects[id2].id = id1;
      cmp.projects[id1].id = id2;
    }
    function updateSnipIds(id1, id2) {
      for (let snip in cmp.projects[id1].snip) {
        let currSnipId = cmp.projects[id1].snip[snip].id;
        cmp.projects[id1].snip[snip].id = setCharAt(currSnipId, 7, id2);
      }
      function setCharAt(str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
      }
    }
  }
}
