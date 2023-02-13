import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], arg: any): any {
    if (!value) return null;
    if (!arg) return value;

    arg = arg.toUpperCase();
    // console.log(arg);

    return value.filter(
      (data: any) => {
        return arg == data.skills.toString().toUpperCase();
      }
      // console.log(...data.skills);
      // data.skills.forEach((a: any) => {
      //   console.log(a);
      // });
    );
  }
}
