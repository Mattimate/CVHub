import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent, HeroesComponent, HeroDetailComponent, MessagesComponent } from "@app/.";
import { HeroService, MessageService } from "@app/service";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, HeroDetailComponent, MessagesComponent, HeroesComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
