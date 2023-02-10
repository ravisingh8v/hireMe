import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HireEmployeeRoutingModule } from './hire-employee-routing.module';
import { HireEmployeeComponent } from './hire-employee.component';
import { TruncatePipe } from '../shared/pipe/truncate.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HireEmployeeComponent],
  imports: [CommonModule, HireEmployeeRoutingModule, SharedModule],
})
export class HireEmployeeModule {}
