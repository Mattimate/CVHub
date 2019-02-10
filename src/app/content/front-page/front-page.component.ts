import { Component, OnInit, Sanitizer } from "@angular/core";
import * as $ from "jquery";
import { ProjectService } from "service/.";
import { Project } from "model/.";

@Component({
  selector: "app-front-page",
  templateUrl: "./front-page.component.html",
  styleUrls: ["./front-page.component.css"]
})
export class FrontPageComponent implements OnInit {
  private subscription = { getProjects: null };
  private projects: Project[];
  private prevSnip = { 1: "", 2: "", 3: "" };
  private editor = {};

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getTopProjects();
  }

  getTopProjects() {
    this.subscription.getProjects = this.projectService.getTopProjects().subscribe(topProjects => {
      console.log("projects", topProjects);
      this.projects = topProjects["projects"];
      this.projectSetup();
    });
  }

  view(project, snip) {
    let cmp = this;
    let num = project.id;
    let snipRef = "project" + num + "_snip" + snip;
    this.prevSnip[num] != snipRef ? switchSnip() : toggleSnip();
    this.prevSnip[num] = snipRef;

    function switchSnip() {
      cmp.prevSnip[num] ? $("#" + cmp.prevSnip[num]).hide() : $("#project" + num + "_snip0").hide();
      $("#btn_" + cmp.prevSnip[num]).removeClass("btn-active");
      $("#" + snipRef).fadeIn("slow");
      $("#btn_" + snipRef).addClass("btn-active");
      $("#project" + num).css("background-image", "url(" + project.snip[snip]["img"] + ")");
    }

    function toggleSnip() {
      $("#" + snipRef).hide();
      $("#btn_" + snipRef).removeClass("btn-active");
      snipRef = "project" + num + "_snip" + 0;
      $("#" + snipRef).fadeIn("slow");
      $("#project" + num).css("background-image", "url(" + project.snip[0]["img"] + ")");
    }
  }

  projectSetup() {
    let cmp = this;
    loadImages();
    sortProjectOrder();
    for (let project in this.projects) {
      this.projects[project].position == "left" ? createAttrs(project, "right", "") : createAttrs(project, "left", "col-md-offset-6");
    }

    function createAttrs(project, opposite, offset) {
      cmp.projects[project]["opposite"] = opposite;
      cmp.projects[project]["offset"] = offset;
    }
    function sortProjectOrder() {
      cmp.projects = cmp.projects.sort(function(a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
    }
    function loadImages() {
      setTimeout(() => {
        for (let project in cmp.projects) {
          $("#project" + cmp.projects[project].id).css("background-image", "url(" + cmp.projects[project].snip[0]["img"] + ")");
          $("#project" + cmp.projects[project].id + "_snip0").show();
        }
      }, 0);
    }
  }

  reload(topProjects) {
    this.projects = topProjects;
    this.projectSetup();
  }

  isEditing(project) {
    return this.editor[project];
  }
}
