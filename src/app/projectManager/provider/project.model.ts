export class ProjectInfo{
    ProjectID: number;
    Title: string;
    Description: string;
    FunctionalRequirements: Requirement[];
    NonFunctionalRequirements: Requirement[];
    Goals: Goal[];
    Risks: Risk[];
    Owner: UserInfo;
    Members: MemberInfo[];
    StartDate: Date;
    EndDate: Date;
    Status: string;
    Priority: string;
    TotalHoursSpent: number = 0;

    // IsExpanded is used in order to expand or collapse the card info for a project
    IsExpanded: boolean;
}

export class MemberInfo{
    UserInfo: UserInfo;
    Role: string;
    TotalHoursSpent: number = 0;
    SpentHoursPerDate: DateHours[];
}

export class DateHours{
    Date: Date;
    Hours: ActivityHours[];
}

export class ActivityHours{
    Hours: number = 0;
    ActivityType: string;
}

export class UserInfo{
    UserID: number;
    Name: string;
    Username: string;
}

export class Risk{
    Description: string;
    Probability: string;
    Status: string;
}


export class Goal{
    Description: string;
    Priority: string;
}

export class Requirement{
    Title: string;
    Description: string;
    Status: string;
    Priority: string;
    Members: MemberInfo[];
    TotalHoursSpent: number = 0;
    Comments: [];

    // IsExpanded is used in order to expand or collapse the card info for a task
    IsExpanded: boolean;
}

export class Comment{
    Poster: UserInfo;
    Text: string;
    TimeOfPost: Date;
}