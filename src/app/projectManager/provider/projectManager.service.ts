import { Injectable } from "@angular/core";
import { ProjectInfo, UserInfo } from "./project.model";

@Injectable()
export class ProjectManagerProvider {
    constructor(

    ){}

    // Start with some fake users
    public Users: UserInfo[] = [
        {UserID: 1, Name: "Ganesh Kumar Reddy Pyreddy", Username: "user1"},
        {UserID: 2, Name: "Fredy Quaicoe", Username: "user2"},
        {UserID: 3, Name: "Aparna Sykam", Username: "user3"},
        {UserID: 4, Name: "Eddie Scott", Username: "user4"},
        {UserID: 5, Name: "David Sanford", Username: "user4"}
    ];

    public Projects: ProjectInfo[];

}