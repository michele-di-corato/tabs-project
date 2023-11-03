import { Pipe, PipeTransform } from '@angular/core';
import { MovieList } from '../../interfaces/movies.interface';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: MovieList[], order: 'asc' | 'desc' = 'desc'): MovieList[] {
    return value.sort((a, b) => {
      if (order === 'asc') {
        return (a.rating.averageRating || 0) - (b.rating.averageRating || 0);
      } else if (order === 'desc') {
        return (b.rating.averageRating || 0) - (a.rating.averageRating || 0);
      }
      return 0;
    });
  }
}
