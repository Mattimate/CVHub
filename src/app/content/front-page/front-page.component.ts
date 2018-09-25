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
  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.getFrontPageProjects();
  }

  getFrontPageProjects() {
    this.subscription.getProjects = this.projectService.getFrontPageProjects().subscribe(projects => {
      this.projects = projects;
      console.log("1", this.projects);

      setTimeout(() => {
        for (let i = 0; i < Object.keys(this.projects).length; i++) {
          $("#project" + i).css("background-image", "url(" + this.projects[i].img[0]["link"] + ")");
          $("#project" + i + "_snip0").show();
        }
      }, 0);
    });
  }

  view(project, snip) {
    let cmp = this;
    let snipRef = "project" + project + "_snip" + snip;
    this.prevSnip[project] != snipRef ? switchSnip() : toggleSnip();
    this.prevSnip[project] = snipRef;

    function switchSnip() {
      cmp.prevSnip[project] ? $("#" + cmp.prevSnip[project]).hide() : $("#project" + project + "_snip0").hide();
      $("#btn_" + cmp.prevSnip[project]).removeClass("btn-active");
      $("#" + snipRef).fadeIn("slow");
      $("#btn_" + snipRef).addClass("btn-active");
      $("#project" + project).css("background-image", "url(" + cmp.projects[project].img[snip]["link"] + ")");
    }

    function toggleSnip() {
      $("#" + snipRef).hide();
      $("#btn_" + snipRef).removeClass("btn-active");
      snipRef = "project" + project + "_snip" + 0;
      $("#" + snipRef).fadeIn("slow");
      $("#project" + project).css("background-image", "url(" + cmp.projects[project].img[0]["link"] + ")");
    }
  }
}
