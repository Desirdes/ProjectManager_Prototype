import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ProjectManagerPageRoutingModule } from './project-manager-routing.module';
import { ProjectManagerPage } from './projectManager.page';
import { HomeView } from './components/home';
import { ProjectManagerProvider } from './provider/projectManager.service';
import { NewProjectDialog } from './components/newProjectDialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NewRequirementDialog } from './components/newRequirementDialog';
import { TimeSpentDialog } from './components/timeSpentDialog';
import { AddTimeDialog } from './components/addTimeDialog';
import { EditProjectOrRequirementDialog } from './components/editProjectOrRequirementDialog';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    ProjectManagerPageRoutingModule,
  ],
  declarations: [
    ProjectManagerPage,
    HomeView,
    NewProjectDialog,
    NewRequirementDialog,
    TimeSpentDialog,
    AddTimeDialog,
    EditProjectOrRequirementDialog
  ],
  providers: [
    ProjectManagerProvider
  ]
})
export class ProjectManagerPageModule {}
