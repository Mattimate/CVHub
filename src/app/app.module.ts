import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from "./app-routing.module";

import {} from "app/service";
import { AppComponent, HomeComponent, HeaderComponent, FooterComponent } from "app/.";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, HomeComponent, HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
