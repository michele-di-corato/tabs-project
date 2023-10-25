export interface MovieList {
  id: string;
  title: string;
  year: number;
  runningTime: number;
  genres?: string;
  cast?: Cast[];
  rating: Rating;
  country?: Country[];
}

export interface Cast {
  celebrityId: string;
  celebrityName: string;
  movieId: string;
  movieTitle: string;
  category: string;
  characters?: string;
}

export interface Rating {
  averageRating?: number;
  numVotes?: number;
}

export interface Country {
  title: string;
  region: string;
  language?: string;
}
