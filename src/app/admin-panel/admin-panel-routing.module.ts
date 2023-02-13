import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { AdminPanelSidebarComponent } from './admin-panel-sidebar/admin-panel-sidebar.component';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      { path: '', redirectTo: 'add-employee-form', pathMatch: 'full' },
      { path: 'add-employee-form', component: AddEmployeeFormComponent },
      { path: 'lm', component: AddEmployeeFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
