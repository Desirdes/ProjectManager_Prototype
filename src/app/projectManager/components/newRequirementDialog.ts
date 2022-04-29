import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Goal, MemberInfo, ProjectInfo, Requirement } from '../provider/project.model';
import { ProjectManagerProvider } from '../provider/projectManager.service';

@Component({
  selector: 'new-task-dialog',
  templateUrl: './newRequirementDialog.html',
  styleUrls: ['../projectManager.page.scss'],
})
export class NewRequirementDialog {
    constructor(
      public dialogRef: MatDialogRef<NewRequirementDialog>,
      public projectManagerProvider: ProjectManagerProvider,
      @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    // Public Variables
    public Title = '';
    public Description = '';
    public Status = '';
    public Priority = '';
    public Members: MemberInfo[] = [];

    // Public Methods

    public onCreateClick(){
      var newRequirement = new Requirement();
      newRequirement.Title = this.Title;
      newRequirement.Description = this.Description;
      newRequirement.Status = this.Title;
      newRequirement.Priority = this.Description;
      newRequirement.Members = this.Members;
      newRequirement.Comments = [];

      // unshift pushed the new project to the front of the array so it will be displayed on top of the project list
      if(this.data.requirementType == "Functional"){
        this.data.projectInfo.FunctionalRequirements.unshift(newRequirement);
      }else if(this.data.requirementType == "Non-Functional"){
        this.data.projectInfo.NonFunctionalRequirements.unshift(newRequirement);
      }
      
      this.dialogRef.close();
    }
    
    public onCancelClick(){
      this.dialogRef.close();
    }

    // Private Methods

}
