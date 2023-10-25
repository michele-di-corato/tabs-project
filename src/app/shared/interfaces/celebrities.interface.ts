import { CastMovie } from './cast.interface';

export interface CelebrityList {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  movies?: CastMovie[];
}
