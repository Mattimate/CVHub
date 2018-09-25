import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Project } from "model/.";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  private projectsUrl = "api/projects";

  constructor(private http: HttpClient) {}

  getFrontPageProjects() {
    return this.http.get<Project[]>(this.projectsUrl);
  }
}
