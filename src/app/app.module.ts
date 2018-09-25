import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { MaterialModule } from "./material.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {} from "app/service";
import {
  AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  CvPlusComponent,
  ContentComponent,
  FrontPageComponent,
  AboutMeComponent,
  SkillsComponent,
  ContactComponent,
  VideoProfileComponent,
  BlogComponent,
  SkillsSidenavComponent
} from "app/.";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CvPlusComponent,
    ContentComponent,
    FrontPageComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    VideoProfileComponent,
    BlogComponent,
    SkillsSidenavComponent
  ],
  entryComponents: [SkillsSidenavComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
