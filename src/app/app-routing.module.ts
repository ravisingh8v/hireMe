import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:"hire-employee",pathMatch:'full'},
  { path: 'hire-employee', loadChildren: () => import('./hire-employee/hire-employee.module').then(m => m.HireEmployeeModule) },
  { path: 'admin-panel', loadChildren: () => import('./admin-panel/admin-panel.module').then(m => m.AdminPanelModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
