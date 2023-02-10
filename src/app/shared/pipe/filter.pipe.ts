import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    if (!value) return null;
    if (!arg) return value;

    arg = arg.toUpperCase();
    return value.filter((data: any) => {
      return data.fullName.toUpperCase().includes(arg);
    });
  }
}
