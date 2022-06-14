import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // this is used to show filtered data while inserting new one
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter: string, propertyName: string) {
    if (value.length == 0 || filter.length == 0) {
      return value;
    }
    const arr = [];
    for (const item of value) {
      if (item[propertyName] === filter) {
        arr.push(item);
      }
    }
    return arr;
  }
}
