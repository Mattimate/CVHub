import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ProjectService } from "service/.";
import { Project } from "model/.";
import * as $ from "jquery";

@Component({
  selector: "app-content-editor",
  templateUrl: "./content-editor.component.html",
  styleUrls: ["./content-editor.component.css"]
})
export class ContentEditorComponent implements OnInit {
  private subscription = { updateProjects: null };
  @Input() projects: Project[];
  @Input() project: Project;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    for (let project in this.projects) {
      this.projects[project]["editor"] = false;
    }
  }

  edit(project) {
    project["editor"] = true;
    this.isEditingContent(true);
  }

  save(project) {
    project["editor"] = false;
    this.isEditingContent(false);
    this.updateProject();
  }

  cancel(project) {
    project["editor"] = false;
    this.isEditingContent(false);
    this.undoChanges();
  }

  isEditingContent(isEditing) {
    $("#title" + this.project.id).attr("contenteditable", isEditing);
    $("#subtitle" + this.project.id).attr("contenteditable", isEditing);
    for (const snip in this.project.snip) {
      $("#" + this.project.snip[snip].id + "_catagory").attr("contenteditable", isEditing);
      $("#" + this.project.snip[snip].id + "_text").attr("contenteditable", isEditing);
    }
  }

  undoChanges() {
    $("#title" + this.project.id).text(this.project.title);
    $("#subtitle" + this.project.id).text(this.project.subtitle);
    for (const snip in this.project.snip) {
      $("#" + this.project.snip[snip].id + "_catagory").text(this.project.snip[snip].catagory);
      $("#" + this.project.snip[snip].id + "_text").text(this.project.snip[snip].text);
    }
  }

  updateProject() {
    this.project.title = $("#title" + this.project.id).text();
    this.project.subtitle = $("#subtitle" + this.project.id).text();
    for (const snip in this.project.snip) {
      this.project.snip[snip].catagory = $("#" + this.project.snip[snip].id + "_catagory").text();
      this.project.snip[snip].text = $("#" + this.project.snip[snip].id + "_text").text();
    }
    this.subscription.updateProjects = this.projectService.updateTopProjects(this.project).subscribe(res => {
      // this.frontPageComponent.getTopProjects();
    });
  }
}
