export interface MovieList {
  id: string;
  title: string;
  director: string;
  releaseYear: number;
  runtimeMinutes: number;
  description?: string;
  genres?: string;
  celebrities?: string;
  countries?: string;
  rating?: number;
}
