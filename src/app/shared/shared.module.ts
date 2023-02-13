import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './pipe/truncate.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [TruncatePipe, FilterPipe, SortPipe],
  imports: [CommonModule],
  exports: [TruncatePipe, FilterPipe, SortPipe],
})
export class SharedModule {}
