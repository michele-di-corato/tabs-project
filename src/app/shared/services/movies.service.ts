import { Injectable } from '@angular/core';
import { MovieList } from '../interfaces/movies.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _movies: MovieList[] = [
    {
      id: '1',
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      releaseYear: 1972,
      runtimeMinutes: 175,
      genres: 'Crime, Drama',
      rating: 9.2,
    },
    {
      id: '2',
      title: "Schindler's List",
      director: 'Steven Spielberg',
      releaseYear: 1993,
      runtimeMinutes: 195,
      genres: 'Biography, Drama, History',
      rating: 8.9,
    },
    {
      id: '3',
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      releaseYear: 1994,
      runtimeMinutes: 154,
      genres: 'Crime, Drama',
      rating: 8.9,
    },
    {
      id: '4',
      title: "Il Signore degli Anelli: La Compagnia dell'Anello",
      director: 'Peter Jackson',
      releaseYear: 2001,
      runtimeMinutes: 178,
      genres: 'Adventure, Drama, Fantasy',
      rating: 8.8,
    },
    {
      id: '5',
      title: 'Inception',
      director: 'Christopher Nolan',
      releaseYear: 2010,
      runtimeMinutes: 148,
      genres: 'Action, Adventure, Sci-Fi',
      rating: 8.8,
    },
    {
      id: '6',
      title: 'Forrest Gump',
      director: 'Robert Zemeckis',
      releaseYear: 1994,
      runtimeMinutes: 142,
      genres: 'Drama, Romance',
      rating: 8.8,
    },
    {
      id: '7',
      title: 'Matrix',
      director: 'Lana Wachowski, Lilly Wachowski',
      releaseYear: 1999,
      runtimeMinutes: 136,
      genres: 'Action, Sci-Fi',
      rating: 8.7,
    },
    {
      id: '8',
      title: 'Interstellar',
      director: 'Christopher Nolan',
      releaseYear: 2014,
      runtimeMinutes: 169,
      genres: 'Adventure, Drama, Sci-Fi',
      rating: 8.6,
    },
    {
      id: '9',
      title: 'Il Signore degli Anelli: Il Ritorno del Re',
      director: 'Peter Jackson',
      releaseYear: 2003,
      runtimeMinutes: 201,
      genres: 'Adventure, Drama, Fantasy',
      rating: 8.9,
    },
    {
      id: '10',
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      releaseYear: 2008,
      runtimeMinutes: 152,
      genres: 'Action, Crime, Drama',
      rating: 9.0,
    },
    {
      id: '11',
      title: 'Fight Club',
      director: 'David Fincher',
      releaseYear: 1999,
      runtimeMinutes: 139,
      genres: 'Drama',
      rating: 8.8,
    },
    {
      id: '12',
      title: 'Léon: The Professional',
      director: 'Luc Besson',
      releaseYear: 1994,
      runtimeMinutes: 110,
      genres: 'Action, Crime, Drama',
      rating: 8.5,
    },
    {
      id: '13',
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      releaseYear: 1994,
      runtimeMinutes: 142,
      genres: 'Drama',
      rating: 9.3,
    },
    {
      id: '14',
      title: 'The Godfather: Part II',
      director: 'Francis Ford Coppola',
      releaseYear: 1974,
      runtimeMinutes: 202,
      genres: 'Crime, Drama',
      rating: 9.0,
    },
  ];
  private _numId = this._movies.length;
  private _movie$ = new Subject<MovieList[]>();
  movieOb$ = this._movie$.asObservable();
  getList(): void {
    this._movie$.next(this._movies);
  }
  getMovieById(id: string): MovieList | undefined {
    let movie = this._movies.find((m) => m.id == id);
    return movie;
  }
  updateMovie(editedMovie: MovieList): void {
    const i = this._movies.findIndex(
      (movie: MovieList) => movie.id === editedMovie.id
    );
    if (i !== -1) {
      this._movies[i] = editedMovie;
    }
    this._movie$.next(this._movies);
  }
  deleteMovie(id: string): void {
    const i = this._movies.findIndex((movie: MovieList) => movie.id == id);
    if (i !== -1) {
      this._movies.splice(i, 1);
    }
    this._movie$.next(this._movies);
  }
  addMovie(createdMovie: MovieList): void {
    this._numId += 1;
    createdMovie.id = this._numId.toString();
    this._movies.push(createdMovie);
    this._movie$.next(this._movies);
  }
}
