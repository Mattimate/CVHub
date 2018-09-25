import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        id: 0,
        position: "right",
        left: "",
        right: "right",
        offset: "col-md-offset-6",
        name: "Team Health Check",
        subtitle: "Questionnaire to monitor health of team",
        img: [
          { link: "assets/images/placeholders/Gaming1.jpg" },
          { link: "assets/images/placeholders/chart1.jpeg" },
          { link: "assets/images/placeholders/chart2.jpeg" },
          { link: "assets/images/placeholders/chart3.jpeg" }
        ],
        snip: [
          { id: "project0_snip0", catagory: "Catagory: project0_snip0", text: "text: project0_snip0" },
          { id: "project0_snip1", catagory: "Catagory: project0_snip1", text: "text: project0_snip1" },
          { id: "project0_snip2", catagory: "Catagory: project0_snip2", text: "text: project0_snip2" },
          { id: "project0_snip3", catagory: "Catagory: project0_snip3", text: "text: project0_snip3" }
        ],
        btn: [
          { id: "project0_snip1", name: "proj1_snip1", snip: "1", delay: "one" },
          { id: "project0_snip2", name: "proj1_snip2", snip: "2", delay: "two" },
          { id: "project0_snip3", name: "proj1_snip3", snip: "3", delay: "three" }
        ]
      },
      {
        id: 1,
        position: "left",
        left: "left",
        right: "",
        offset: "",
        name: "Health Checker",
        subtitle: "Questionnaire to monitor health of team",
        img: [
          { link: "assets/images/placeholders/Gaming2.jpg" },
          { link: "assets/images/placeholders/chart1.jpeg" },
          { link: "assets/images/placeholders/chart2.jpeg" },
          { link: "assets/images/placeholders/chart3.jpeg" }
        ],
        snip: [
          { id: "project1_snip0", catagory: "Catagory: project1_snip0", text: "text: project1_snip0" },
          { id: "project1_snip1", catagory: "Catagory: project1_snip1", text: "text: project1_snip1" },
          { id: "project1_snip2", catagory: "Catagory: project1_snip2", text: "text: project1_snip2" },
          { id: "project1_snip3", catagory: "Catagory: project1_snip3", text: "text: project1_snip3" }
        ],
        btn: [
          { id: "project1_snip1", name: "proj2_snip1", snip: "1", delay: "one" },
          { id: "project1_snip2", name: "proj2_snip2", snip: "2", delay: "two" },
          { id: "project1_snip3", name: "proj2_snip3", snip: "3", delay: "three" }
        ]
      },
      {
        id: 2,
        position: "right",
        left: "",
        right: "right",
        offset: "col-md-offset-6",
        name: "Custom Build",
        subtitle: "A custom build of my >pc",
        img: [
          { link: "assets/images/placeholders/Gaming4.jpg" },
          { link: "assets/images/placeholders/chart1.jpeg" },
          { link: "assets/images/placeholders/chart2.jpeg" },
          { link: "assets/images/placeholders/chart3.jpeg" }
        ],

        snip: [
          { id: "project2_snip0", catagory: "Catagory: project3_snip0", text: "text: project3_snip0" },
          { id: "project2_snip1", catagory: "Catagory: project3_snip1", text: "text: project3_snip1" },
          { id: "project2_snip2", catagory: "Catagory: project3_snip2", text: "text: project3_snip2" },
          { id: "project2_snip3", catagory: "Catagory: project3_snip3", text: "text: project3_snip3" }
        ],
        btn: [
          { id: "project2_snip1", name: "proj3_snip1", snip: "1", delay: "one" },
          { id: "project2_snip2", name: "proj3_snip2", snip: "2", delay: "two" },
          { id: "project2_snip3", name: "proj3_snip3", snip: "3", delay: "three" }
        ]
      }
    ];
    return { projects };
  }
}
