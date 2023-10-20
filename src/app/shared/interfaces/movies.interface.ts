export interface MovieList {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  description?: string;
  genres?: string;
  celebrities?: string;
  countries?: string;
  rating?: number;
}
