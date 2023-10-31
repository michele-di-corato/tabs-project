import { Pipe, PipeTransform } from '@angular/core';
import { ItemList } from '../../interfaces/list.interface';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: ItemList[], order: 'asc' | 'desc' = 'asc'): ItemList[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return (a.rating || 0) - (b.rating || 0);
      } else if (order === 'desc') {
        return (b.rating || 0) - (a.rating || 0);
      }
      return 0;
    });
  }
}
