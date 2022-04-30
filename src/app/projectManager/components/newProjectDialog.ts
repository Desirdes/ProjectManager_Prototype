import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Goal, MemberInfo, ProjectInfo, Requirement, Risk, UserInfo } from '../provider/project.model';
import { ProjectManagerProvider } from '../provider/projectManager.service';

@Component({
  selector: 'new-project-dialog',
  templateUrl: './newProjectDialog.html',
  styleUrls: ['../projectManager.page.scss'],
})
export class NewProjectDialog {
    constructor(
      public dialogRef: MatDialogRef<NewProjectDialog>,
      public projectManagerProvider: ProjectManagerProvider
    ) { }

    // Public Variables
    public Title = '';
    public Description = '';
    public StartDate = '';
    public EndDate = '';
    public Status = '';
    public Priority = '';
    public Owner = new UserInfo();
    public Members: MemberInfo[] = [];
    public Risks = [];
    public FunctionalRequirements = [];
    public NonFunctionalRequirements = [];
    public Goals = [];

    // Public Methods

    public onRemoveItemClick(parentArray, index){
      parentArray.splice(index, 1);
    }
    
    public onAddRiskClick(){
      var newRisk = new Risk;
      this.Risks.push(newRisk);
    }

    public onAddFunctionalRequirementClick(){
      var newReq = new Requirement;
      this.FunctionalRequirements.push(newReq);
    }

    public onAddNonFunctionalRequirementClick(){
      var newReq = new Requirement;
      this.NonFunctionalRequirements.push(newReq);
    }

    public onAddGoalClick(){
      var newGoal = new Goal;
      this.Goals.push(newGoal);
    }

    public onCreateClick(){
      var newProject = new ProjectInfo();
      newProject.Title = this.Title;
      newProject.Description = this.Description;
      newProject.StartDate = new Date(this.StartDate);
      newProject.EndDate = new Date(this.EndDate);
      newProject.Status = this.Title;
      newProject.Priority = this.Priority;
      newProject.Owner = this.Owner;
      newProject.Members = this.Members;
      newProject.Risks = this.Risks;
      newProject.FunctionalRequirements = this.FunctionalRequirements;
      newProject.NonFunctionalRequirements = this.NonFunctionalRequirements;
      newProject.Goals = this.Goals;

      // unshift pushed the new project to the front of the array so it will be displayed on top of the project list
      this.projectManagerProvider.Projects.unshift(newProject);
      this.dialogRef.close();
    }
    
    public onCancelClick(){
      this.dialogRef.close();
    }

    // Private Methods

}
