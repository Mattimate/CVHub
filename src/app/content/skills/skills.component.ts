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

  openDialog() {
    this.SkillsSidenavRef = this.dialog.open(SkillsSidenavComponent, {
      width: "350px",
      height: "100%",
      position: { right: "0" },
      autoFocus: true
    });
  }
}
