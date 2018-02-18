import { Component, OnInit, Injectable } from "@angular/core";
import { MessageService } from "@app/service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
@Injectable()
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
