import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.css"]
})
export class AboutMeComponent implements OnInit {
  private aboutMain;
  private selectedTopic;
  private backToMain;
  constructor() {}

  ngOnInit() {
    this.aboutMain = this.getElement("about-main");
    this.backToMain = this.getElement("back");
  }
  view(topic) {
    this.selectedTopic = this.getElement("about-" + topic);

    this.aboutMain.style.display = "none";
    this.selectedTopic.style.display = "block";
    this.backToMain.style.display = "block";
  }

  back() {
    this.aboutMain.style.display = "block";
    this.selectedTopic.style.display = "none";
    this.backToMain.style.display = "none";
  }
  getElement(ref) {
    return document.getElementById(ref);
  }
}
