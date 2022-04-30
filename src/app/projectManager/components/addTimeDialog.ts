import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivityHours, DateHours, MemberInfo, ProjectInfo, Requirement } from '../provider/project.model';
import { ProjectManagerProvider } from '../provider/projectManager.service';

@Component({
  selector: 'add-time-dialog',
  templateUrl: './addTimeDialog.html',
  styleUrls: ['../projectManager.page.scss'],
})
export class AddTimeDialog {
    constructor(
      public dialogRef: MatDialogRef<AddTimeDialog>,
      public projectManagerProvider: ProjectManagerProvider,
      @Inject(MAT_DIALOG_DATA) public data: {projectInfo: ProjectInfo, requirement: Requirement}
    ) { }

    // Public Variables
    public Member: MemberInfo;
    public Date: string = '';
    public ActivityHoursArray: ActivityHours[] = [{Hours: 0, ActivityType: ''}];

    // Public Methods
    public onAddHoursTypeClick(){
        var newTime = new ActivityHours;
        this.ActivityHoursArray.push(newTime);
      }

    public onAddTimeClick(){
        this.data.requirement.Members.forEach(member => {
            if(member.UserInfo.UserID == this.Member.UserInfo.UserID){
                var totalHours = 0;
                this.ActivityHoursArray.forEach(activityHours => {
                    totalHours = +totalHours + +activityHours.Hours;
                });
                member.TotalHoursSpent = +member.TotalHoursSpent + +totalHours;

                var dateHours = new DateHours();
                dateHours.Date = new Date(this.Date);
                dateHours.Hours = this.ActivityHoursArray;

                member.SpentHoursPerDate.push(dateHours);

                this.data.projectInfo.Members.forEach(projMember => {
                    if(projMember.UserInfo.UserID == member.UserInfo.UserID){
                        projMember.TotalHoursSpent = +projMember.TotalHoursSpent + +totalHours;
                        projMember.SpentHoursPerDate.push(dateHours);
                    };
                });

                this.data.projectInfo.TotalHoursSpent = +this.data.projectInfo.TotalHoursSpent + +totalHours;
            };
        });
        this.dialogRef.close();
    }
    
    public onCancelClick(){
      this.dialogRef.close();
    }

    // Private Methods

}
