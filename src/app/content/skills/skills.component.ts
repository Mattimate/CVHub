import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material";

import { SkillsSidenavComponent } from "./skills-sidenav/skills-sidenav.component";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent implements OnInit {
  ngOnInit() {}
  SkillsSidenavRef: MatDialogRef<SkillsSidenavComponent>;

  constructor(private dialog: MatDialog) {}

  openDialog(side) {
    var left = { width: "400px", height: "100%", position: { left: "0" }, autoFocus: true };
    var right = { width: "400px", height: "100%", position: { right: "0" }, autoFocus: true };
    var position = side === "left" ? left : right;
    this.SkillsSidenavRef = this.dialog.open(SkillsSidenavComponent, position);
  }
}
