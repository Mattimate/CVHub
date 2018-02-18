import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from "./app-routing.module";

import { HeroService, MessageService } from "app/service";
import { AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, HeroSearchComponent, MessagesComponent } from "app/.";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, MessagesComponent, HeroSearchComponent],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
