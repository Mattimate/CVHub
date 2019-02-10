import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Project } from "model/.";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  private user = "MattGordon";
  private serverApi = "http://localhost:3000";

  constructor(private http: Http) {}

  public getTopProjects(): Observable<Project[]> {
    let URI = this.serverApi + "/topProjects/" + this.user;
    return this.http
      .get(URI)
      .map(res => res.json())
      .map(res => <Project[]>res.projects);
  }

  public updateTopProjects(project: Project) {
    let URI = this.serverApi + "/topProjects/" + this.user;
    return this.http.put(URI, JSON.stringify(project), { headers: this.getHeaders() }).map(res => res.json());
  }

  public moveTopProjects(projects) {
    let URI = this.serverApi + "/topProjects/" + this.user + "/moveProject";
    return this.http.put(URI, JSON.stringify(projects), { headers: this.getHeaders() }).map(res => res.json());
  }

  getHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }
}
