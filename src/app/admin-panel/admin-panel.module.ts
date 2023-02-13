import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { AdminPanelSidebarComponent } from './admin-panel-sidebar/admin-panel-sidebar.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AdminPanelComponent,
    AdminPanelSidebarComponent,
    AddEmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminPanelRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
})
export class AdminPanelModule {}
