import { Injectable } from '@angular/core';
import { MovieList } from '../interfaces/movies.interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _baseUrl = environment.baseUrl;
  private _movies: MovieList[] = [];
  constructor(private readonly _http: HttpClient) {}
  private _numId = this._movies.length;
  private _movie$ = new Subject<MovieList[]>();
  movieOb$ = this._movie$.asObservable();
  getList(): void {
    this._http.get<MovieList[]>(
      `${this._baseUrl}/movies?order_by=id&page=0&size=25`
    );
    // this._movie$.next(this._movies);
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
