import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateHours, Goal, MemberInfo, ProjectInfo, Requirement, Risk, UserInfo } from '../provider/project.model';
import { ProjectManagerProvider } from '../provider/projectManager.service';

@Component({
  selector: 'edit-project-or-requirement-dialog',
  templateUrl: './editProjectOrRequirementDialog.html',
  styleUrls: ['../projectManager.page.scss'],
})
export class EditProjectOrRequirementDialog {
    constructor(
      public dialogRef: MatDialogRef<EditProjectOrRequirementDialog>,
      public projectManagerProvider: ProjectManagerProvider,
      @Inject(MAT_DIALOG_DATA) public data: {projectInfo: ProjectInfo, isRequirement: boolean, requirementInfo: Requirement}
    ) { }

    // Public Variables
    public Title = this.data.isRequirement ? this.getValue(this.data.requirementInfo.Title) : '';
    public Description = this.data.isRequirement ? this.getValue(this.data.requirementInfo.Description) : '';
    public Status = this.data.isRequirement ? this.getValue(this.data.requirementInfo.Status) : '';
    public Priority = this.data.isRequirement ? this.getValue(this.data.requirementInfo.Priority) : '';
    public Members = this.data.isRequirement ? this.getValue(this.data.requirementInfo.Members) : [];

    public ProjectTitle = this.getValue(this.data.projectInfo.Title);
    public ProjectDescription = this.getValue(this.data.projectInfo.Description);
    public ProjectStartDate = this.getValue(this.data.projectInfo.StartDate);
    public ProjectEndDate = this.getValue(this.data.projectInfo.EndDate);
    public ProjectStatus = this.getValue(this.data.projectInfo.Status);
    public ProjectPriority = this.getValue(this.data.projectInfo.Priority);
    public ProjectOwner = this.getValue(this.data.projectInfo.Owner);
    public ProjectMembers = this.getValue(this.data.projectInfo.Members);
    public ProjectRisks = this.getValue(this.data.projectInfo.Risks);
    public ProjectGoals = this.getValue(this.data.projectInfo.Goals);

    public PossibleMembers: MemberInfo[] = this._getPossibleMembers();

    // Public Methods

    // This ensures that array data is using the value without actually referenccing the origional data to prevent data from saving even if dialog is cancelled.
    public getValue(valueToGet){
      var value;

      if(Array.isArray(valueToGet)){
        value = Array.from(valueToGet);
      }else{
        value = valueToGet;
      }

      return value;
    }

    public onRemoveItemClick(parentArray, index){
      parentArray.splice(index, 1);
    }

    public onAddRiskClick(){
      var newRisk = new Risk;
      this.ProjectRisks.push(newRisk);
    }

    public onAddGoalClick(){
      var newGoal = new Goal;
      this.ProjectGoals.push(newGoal);
    }

    public onSaveClick(){
      if(this.data.isRequirement){
        this.data.requirementInfo.Title = this.Title;
        this.data.requirementInfo.Description = this.Description;
        this.data.requirementInfo.Status = this.Status;
        this.data.requirementInfo.Priority = this.Priority;
        this.data.requirementInfo.Members = this.Members;
      }else{
        this.data.projectInfo.Title = this.ProjectTitle;
        this.data.projectInfo.Description = this.ProjectDescription;
        this.data.projectInfo.StartDate = this.ProjectStartDate;
        this.data.projectInfo.EndDate = this.ProjectEndDate;
        this.data.projectInfo.Status = this.ProjectStatus;
        this.data.projectInfo.Priority = this.ProjectPriority;
        this.data.projectInfo.Owner = this.ProjectOwner;
        this.data.projectInfo.Members = this.ProjectMembers;
        this.data.projectInfo.Risks = this.ProjectRisks;
        this.data.projectInfo.Goals = this.ProjectGoals;
      }
      this.dialogRef.close();
    }
    
    public onCancelClick(){
      this.dialogRef.close();
    }

    // Private Methods
    private _getPossibleMembers(){
      var returnData = [];

      if(this.data.isRequirement){
        this.projectManagerProvider.Users.forEach(user => {
          var matchingMemberExist = false;

          this.Members.forEach(member => {
            if(member.UserInfo.UserID == user.UserID){
              matchingMemberExist = true;

              returnData.push(member);
            }
          });

          if(!matchingMemberExist){
            var memberInsert: MemberInfo = {
              UserInfo: user,
              Role: 'Member', 
              TotalHoursSpent: 0,
              SpentHoursPerDate: []
            }

            returnData.push(memberInsert);
          }
        });
      }else{
        this.projectManagerProvider.Users.forEach(user => {
          var matchingMemberExist = false;

          this.ProjectMembers.forEach(member => {
            if(member.UserInfo.UserID == user.UserID){
              matchingMemberExist = true;

              returnData.push(member);
            }
          });

          if(!matchingMemberExist){
            var memberInsert: MemberInfo = {
              UserInfo: user,
              Role: 'Member', 
              TotalHoursSpent: 0,
              SpentHoursPerDate: []
            }

            returnData.push(memberInsert);
          }
        });
      }
      
      return returnData;
    }
}
