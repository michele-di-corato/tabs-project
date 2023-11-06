import { CastMovie } from './cast.interface';

export interface MovieList {
  id: string;
  title: string;
  year: number;
  runningTime: number;
  genres?: string;
  cast?: CastMovie[];
  rating: Rating;
  country?: Country[];
}

export interface MovieForm {
  id: string;
  title: string;
  year: number;
  runningTime: number;
  genres?: string;
  averageRating: number;
  numVotes: number;
}

export interface Rating {
  averageRating: number;
  numVotes: number;
}

export interface Country {
  title: string;
  region: string;
  language?: string;
}

export interface MoviesResponseDto {
  pagination: any;
  movies: MovieList[];
}
