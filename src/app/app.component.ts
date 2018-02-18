import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Logger } from "@app/service";

const log = new Logger("APP");

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CVHub";

  ngOnInit() {}
}
