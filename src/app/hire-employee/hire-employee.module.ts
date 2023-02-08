import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireEmployeeRoutingModule } from './hire-employee-routing.module';
import { HireEmployeeComponent } from './hire-employee.component';


@NgModule({
  declarations: [
    HireEmployeeComponent
  ],
  imports: [
    CommonModule,
    HireEmployeeRoutingModule
  ]
})
export class HireEmployeeModule { }
