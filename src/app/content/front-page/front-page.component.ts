import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-front-page",
  templateUrl: "./front-page.component.html",
  styleUrls: ["./front-page.component.css"]
})
export class FrontPageComponent implements OnInit {
  private selectedProject;
  private frontPageMain;
  private backToMain;
  private continue;

  constructor() {}

  ngOnInit() {
    this.frontPageMain = this.getElement("front-page-main");
    this.backToMain = this.getElement("front-page-back");
    this.continue = this.getElement("front-page-continue");
  }

  view(project) {
    this.selectedProject = this.getElement("project-" + project);
    this.frontPageMain.style.display = "none";
    this.selectedProject.style.display = "block";
    this.backToMain.style.display = "block";
    this.continue.style.display = "block";
  }

  back() {
    this.frontPageMain.style.display = "block";
    this.selectedProject.style.display = "none";
    this.backToMain.style.display = "none";
    this.continue.style.display = "none";
  }

  getElement(ref) {
    return document.getElementById(ref);
  }
}
