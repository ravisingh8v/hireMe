import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipe/truncate.pipe';
import { FilterPipe } from './pipe/filter.pipe';

@NgModule({
  declarations: [TruncatePipe, FilterPipe],
  imports: [CommonModule],
  exports: [TruncatePipe, FilterPipe],
})
export class SharedModule {}
