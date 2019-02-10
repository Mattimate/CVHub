import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProjectService } from "app/service";

import {
  AppComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  CvPlusComponent,
  ContentComponent,
  FrontPageComponent,
  ContentEditorComponent,
  ImageEditorComponent,
  AboutMeComponent,
  SkillsComponent,
  ContactComponent,
  VideoProfileComponent,
  SkillsSidenavComponent
} from "app/.";

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, AppRoutingModule, HttpClientModule, MaterialModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CvPlusComponent,
    ContentComponent,
    FrontPageComponent,
    ContentEditorComponent,
    ImageEditorComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    VideoProfileComponent,
    SkillsSidenavComponent
  ],
  entryComponents: [SkillsSidenavComponent],

  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {}
