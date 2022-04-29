import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateHours, ProjectInfo, Requirement } from '../provider/project.model';
import { ProjectManagerProvider } from '../provider/projectManager.service';

@Component({
  selector: 'time-spent-dialog',
  templateUrl: './timeSpentDialog.html',
  styleUrls: ['../projectManager.page.scss'],
})
export class TimeSpentDialog {
    constructor(
      public dialogRef: MatDialogRef<TimeSpentDialog>,
      public projectManagerProvider: ProjectManagerProvider,
      @Inject(MAT_DIALOG_DATA) public data: {projectInfo: ProjectInfo, isRequirement: boolean, requirementInfo: Requirement}
    ) { }

    // Public Variables

    // Public Methods

    public getActivityTypeBasedOffIndex(index){
        var activityName = '';
        switch(index){
            case 0: {
                activityName = 'Requirements Analysis';
                break;
            }
            case 1: {
                activityName = 'Designing';
                break;
            }
            case 2: {
                activityName = 'Coding';
                break;
            }
            case 3: {
                activityName = 'Testing';
                break;
            }
            case 4: {
                activityName = 'Project Management';
                break;
            }
            default: { 
                break; 
            } 
        }

        return activityName;
    }

    public determineActivityTimeSplit(dateHoursArray: DateHours[]){
        var timeArray = [];

        // Get all the activity hours fr each day and push them into timeArray
        dateHoursArray.forEach(dateHours => {
            dateHours.Hours.forEach(hours => {
                timeArray.push(hours);
            });
        });

        /**
         * activityTimeArray[0] = "Requirements Analysis"
         * activityTimeArray[1] = "Designing"
         * activityTimeArray[2] = "Coding"
         * activityTimeArray[3] = "Testing"
         * activityTimeArray[4] = "Project Management"
         */
        var activityTimeArray = [0,0,0,0,0];

        timeArray.forEach(activityTime => {
            switch(activityTime.ActivityType){
                case 'Requirements Analysis': {
                    activityTimeArray[0] = +activityTimeArray[0] + +activityTime.Hours;
                    break;
                }
                case 'Designing': {
                    activityTimeArray[1] = +activityTimeArray[1] + +activityTime.Hours;
                    break;
                }
                case 'Coding': {
                    activityTimeArray[2] = +activityTimeArray[2] + +activityTime.Hours;
                    break;
                }
                case 'Testing': {
                    activityTimeArray[3] = +activityTimeArray[3] + +activityTime.Hours;
                    break;
                }
                case 'Project Management': {
                    activityTimeArray[4] = +activityTimeArray[4] + +activityTime.Hours;
                    break;
                }
                default: { 
                    break; 
                } 
            }
        });

        return activityTimeArray;
    }
    
    public onCloseClick(){
      this.dialogRef.close();
    }

    // Private Methods

}
