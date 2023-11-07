import { CelebrityList } from './celebrities.interface';
import { MovieList } from './movies.interface';

export interface MoviesResponseDto {
  pagination: Pagination;
  movies: MovieList[];
}

export interface CelebritiesResponseDto {
  pagination: Pagination;
  celebrities: CelebrityList[];
}

export interface Pagination {
  currentPage: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}
