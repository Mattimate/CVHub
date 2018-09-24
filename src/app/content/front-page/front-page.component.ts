import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { ProjectJson } from "app/content/front-page/project-json";

@Component({
  selector: "app-front-page",
  templateUrl: "./front-page.component.html",
  styleUrls: ["./front-page.component.css"]
})
export class FrontPageComponent implements OnInit {
  private projectData;
  private prevSnip = { 1: "", 2: "", 3: "" };

  constructor(private projectJson: ProjectJson) {}

  ngOnInit() {
    this.projectData = this.projectJson.getProductData();

    setTimeout(() => {
      for (let i = 0; i < Object.keys(this.projectData).length; i++) {
        $("#project" + i).css("background-image", "url(" + this.projectData[i].link[0] + ")");
        $("#project" + i + "_snip0").show();
      }
    }, 1);
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
      $("#project" + project).css("background-image", "url(" + cmp.projectData[project].link[snip] + ")");
    }

    function toggleSnip() {
      $("#" + snipRef).hide();
      $("#btn_" + snipRef).removeClass("btn-active");
      snipRef = "project" + project + "_snip" + 0;
      $("#" + snipRef).fadeIn("slow");
      $("#project" + project).css("background-image", "url(" + cmp.projectData[project].link[0] + ")");
    }
  }

  getElement(ref) {
    return document.getElementById(ref);
  }
}
