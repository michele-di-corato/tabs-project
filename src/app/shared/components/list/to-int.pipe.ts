import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toInt',
})
export class ToIntPipe implements PipeTransform {
  transform(value: number, fixValue: number): string {
    return (value * 10).toFixed(fixValue);
  }
}
