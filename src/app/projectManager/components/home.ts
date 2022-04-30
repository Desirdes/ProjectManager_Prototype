import { Component, OnInit } from '@angular/core';
import { ProjectInfo } from '../provider/project.model';
import { ProjectManagerProvider } from '../provider/projectManager.service';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectDialog } from './newProjectDialog';
import { NewRequirementDialog } from './newRequirementDialog';
import { TimeSpentDialog } from './timeSpentDialog';
import { AddTimeDialog } from './addTimeDialog';
import { EditProjectOrRequirementDialog } from './editProjectOrRequirementDialog';

@Component({
  selector: 'home-view',
  templateUrl: './home.html',
  styleUrls: ['../projectManager.page.scss'],
})
export class HomeView implements OnInit {

    constructor(
        public projectManagerProvider: ProjectManagerProvider,
        public dialog: MatDialog
    ) { }

    // Public Variables
    public initialized: boolean;

    // Public Methods

    public onNewProjectClick(){
        var dialogRef = this.dialog.open(NewProjectDialog,{
            disableClose: true
        });
    }

    public onNewRequirementClick(projectInfo, requirementType){
        var dialogRef = this.dialog.open(NewRequirementDialog,{
            disableClose: true,
            data: {
                projectInfo: projectInfo,
                requirementType: requirementType
            }
        });
    }

    public onViewTimeSpentClick(projectInfo, isRequirement, requirementInfo){
        var dialogRef = this.dialog.open(TimeSpentDialog,{
            disableClose: true,
            data: {
                projectInfo: projectInfo,
                isRequirement: isRequirement,
                requirementInfo: requirementInfo
            }
        });
    }

    public onAddTimeSpentClick(projectInfo, requirement){
        var dialogRef = this.dialog.open(AddTimeDialog,{
            disableClose: true,
            data: {
                projectInfo: projectInfo,
                requirement: requirement
            }
        });
    }

    public onEditClick(event, projectInfo, isRequirement, requirementInfo){
        event.stopPropagation();
        var dialogRef = this.dialog.open(EditProjectOrRequirementDialog,{
            disableClose: true,
            data: {
                projectInfo: projectInfo,
                isRequirement: isRequirement,
                requirementInfo: requirementInfo
            }
        });
    }

    // Private Methods

    private _getExistingProjects(){
        // For now simply get a hardcoded project for now, any created ones will be temporarely stored on the provider.
        this.projectManagerProvider.Projects = [];

        var fakeProject = new ProjectInfo();
        fakeProject.ProjectID = 1;
        fakeProject.Title = "Example Project";
        fakeProject.Description = "This is an example project that is loaded automatically when viewing the project manager.";
        fakeProject.Owner = this.projectManagerProvider.Users[0];
        fakeProject.TotalHoursSpent = 200;
        fakeProject.Members = [
            {
                UserInfo: this.projectManagerProvider.Users[0],
                Role: "owner",
                TotalHoursSpent: 40,
                SpentHoursPerDate: [{
                    Date: new Date(2022, 0, 15),
                    Hours: [{Hours: 20, ActivityType: "Project Management"}]
                },{
                    Date: new Date(2022, 0, 16),
                    Hours: [{Hours: 20, ActivityType: "Designing"}]
                }]
            },
            {
                UserInfo: this.projectManagerProvider.Users[1],
                Role: "admin",
                TotalHoursSpent: 40,
                SpentHoursPerDate: [{
                    Date: new Date(2022, 0, 15),
                    Hours: [{Hours: 20, ActivityType: "Coding"}]
                },{
                    Date: new Date(2022, 0, 16),
                    Hours: [{Hours: 20, ActivityType: "Testing"}]
                }]
            },
            {
                UserInfo: this.projectManagerProvider.Users[2],
                Role: "member",
                TotalHoursSpent: 40,
                SpentHoursPerDate: [{
                    Date: new Date(2022, 0, 15),
                    Hours: [{Hours: 20, ActivityType: "Requirements Analysis"}]
                },{
                    Date: new Date(2022, 0, 16),
                    Hours: [{Hours: 20, ActivityType: "Designing"}]
                }]
            },
            {
                UserInfo: this.projectManagerProvider.Users[3],
                Role: "member",
                TotalHoursSpent: 40,
                SpentHoursPerDate: [{
                    Date: new Date(2022, 0, 15),
                    Hours: [{Hours: 20, ActivityType: "Coding"}]
                },{
                    Date: new Date(2022, 0, 16),
                    Hours: [{Hours: 20, ActivityType: "Testing"}]
                }]
            },
            {
                UserInfo: this.projectManagerProvider.Users[4],
                Role: "member",
                TotalHoursSpent: 40,
                SpentHoursPerDate: [{
                    Date: new Date(2022, 0, 15),
                    Hours: [{Hours: 20, ActivityType: "Coding"}]
                },{
                    Date: new Date(2022, 0, 16),
                    Hours: [{Hours: 20, ActivityType: "Coding"}]
                }]
            }
        ];
        fakeProject.StartDate = new Date(2022, 0, 15);
        fakeProject.EndDate = new Date(2022, 8, 21);
        fakeProject.Status = "In Progress";
        fakeProject.Priority = "Low";
        fakeProject.Goals = [{Description: "An example goal.", Priority: "Low"}];
        fakeProject.Risks = [{
            Description: "An example risk.",
            Probability: "Likely",
            Status: "Open"
        }];
        fakeProject.FunctionalRequirements = [
            {
                Title: "Functional Requirement 1",
                Description: "An example of a task for a project that is meant to deal with the first functional requirement.",
                Status: "In Progress",
                Priority: "Low",
                TotalHoursSpent: 100,
                Members: [
                    {
                        UserInfo: this.projectManagerProvider.Users[0],
                        Role: "admin",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Project Management"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Designing"}]
                        }]
                    },
                    {
                        UserInfo: this.projectManagerProvider.Users[1],
                        Role: "member",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Coding"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Testing"}]
                        }]
                    },
                    {
                        UserInfo: this.projectManagerProvider.Users[2],
                        Role: "member",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Requirements Analysis"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Designing"}]
                        }]
                    },
                    {
                        UserInfo: this.projectManagerProvider.Users[3],
                        Role: "member",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Coding"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Testing"}]
                        }]
                    },
                    {
                        UserInfo: this.projectManagerProvider.Users[4],
                        Role: "member",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Coding"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Coding"}]
                        }]
                    }
                ],
                Comments: [],
                IsExpanded: false
            }
        ];
        fakeProject.NonFunctionalRequirements = [
            {
                Title: "Non-Functional Requirement 1",
                Description: "An example of a task for a project that is meant to deal with the first non-functional requirement.",
                Status: "In Progress",
                Priority: "Low",
                TotalHoursSpent: 100,
                Members: [
                    {
                        UserInfo: this.projectManagerProvider.Users[0],
                        Role: "admin",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Project Management"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Designing"}]
                        }]
                    },
                    {
                        UserInfo: this.projectManagerProvider.Users[1],
                        Role: "member",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Coding"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Testing"}]
                        }]
                    },
                    {
                        UserInfo: this.projectManagerProvider.Users[2],
                        Role: "member",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Requirements Analysis"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Designing"}]
                        }]
                    },
                    {
                        UserInfo: this.projectManagerProvider.Users[3],
                        Role: "member",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Coding"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Testing"}]
                        }]
                    },
                    {
                        UserInfo: this.projectManagerProvider.Users[4],
                        Role: "member",
                        TotalHoursSpent: 20,
                        SpentHoursPerDate: [{
                            Date: new Date(2022, 0, 15),
                            Hours: [{Hours: 10, ActivityType: "Coding"}]
                        },{
                            Date: new Date(2022, 0, 16),
                            Hours: [{Hours: 10, ActivityType: "Coding"}]
                        }]
                    }
                ],
                Comments: [],
                IsExpanded: false
            }
        ];

        this.projectManagerProvider.Projects.push(fakeProject);
    }

    // Initialization
    _init(){
        this._getExistingProjects();
        this.initialized = true;
    }

    ngOnInit() {
        this._init();
    }
}
