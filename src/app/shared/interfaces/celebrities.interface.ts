export interface CelebrityList {
  id: string;
  name: string;
  birthYear: number;
  deathYear?: number;
  movies?: Movies[];
}

export interface Movies {
  celebrityId: string;
  celebrityName: string;
  movieId: string;
  movieTitle: string;
  category: string;
  characters?: string;
}
