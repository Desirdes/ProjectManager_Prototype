import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateHours, ProjectInfo, Requirement } from '../provider/project.model';
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

    // Public Methods

    public onSaveClick(){
        this.dialogRef.close();
    }
    
    public onCloseClick(){
      this.dialogRef.close();
    }

    // Private Methods

}
