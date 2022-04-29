import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projectManager/Home',
    pathMatch: 'full'
  },
  {
    path: 'projectManager/:id',
    loadChildren: () => import('./projectManager/projectManager.module').then( m => m.ProjectManagerPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
