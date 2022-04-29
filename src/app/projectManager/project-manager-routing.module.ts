import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectManagerPage } from './projectManager.page';


const routes: Routes = [
  {
    path: '',
    component: ProjectManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectManagerPageRoutingModule {}
