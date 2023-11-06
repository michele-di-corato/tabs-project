import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  first,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  MovieForm,
  MovieList,
  MoviesResponseDto,
} from '../interfaces/movies.interface';
export interface MovieFilter {
  title?: string;
  orderBy?: string;
  size?: number;
  page?: number;
}
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies$: Observable<MovieList[]>;
  refresh$ = new BehaviorSubject<boolean>(true);
  currentFilters: MovieFilter;
  private _baseUrl = environment.baseUrl;
  set filters(value: MovieFilter) {
    this.currentFilters = value;
    this.refresh();
  }
  constructor(private readonly _http: HttpClient) {
    this.currentFilters = {
      page: 0,
      size: 20,
    };
    this.movies$ = this.refresh$.pipe(
      switchMap(() => {
        const params = this.getFilters();
        return this._http.get<MoviesResponseDto>(`${this._baseUrl}/movies`, {
          params,
        });
      }),
      map((responseMovies) => responseMovies.movies)
    );
  }
  getFilters() {
    let params: HttpParams = new HttpParams();
    if (this.currentFilters.title)
      params = params.set('title', this.currentFilters.title);
    if (this.currentFilters.orderBy)
      params = params.set('order_by', this.currentFilters.orderBy);
    if (this.currentFilters.page)
      params = params.set('page', this.currentFilters.page);
    if (this.currentFilters.size)
      params = params.set('size', this.currentFilters.size);
    return params;
  }
  refresh() {
    this.refresh$.next(true);
  }

  getMovieById(id: string): Observable<MovieList> {
    return this._http.get<MovieList>(`${this._baseUrl}/movies/${id}`);
  }
  updateMovie(editedMovie: MovieList): Observable<MovieList> {
    return this._http.put<MovieList>(
      `${this._baseUrl}/movies/${editedMovie.id}`,
      editedMovie
    );
  }
  deleteMovie(id: string): void {
    this._http
      .delete<MovieList>(`${this._baseUrl}/movies/${id}`)
      .pipe(
        first(),
        tap(() => this.refresh())
      )
      .subscribe();
  }
  addMovie(createdMovie: MovieForm): Observable<MovieList> {
    const movieDto: MovieList = this.formToDto(createdMovie);
    return this._http.post<MovieList>(`${this._baseUrl}/movies`, movieDto);
  }

  // Avere questa funzione mi permette di rimappare i dati del form in un dato passabile al backend
  formToDto(createdMovie: MovieForm): MovieList {
    return {
      id: createdMovie.id,
      title: createdMovie.title,
      rating: {
        averageRating: createdMovie.averageRating,
        numVotes: createdMovie.numVotes,
      },
      runningTime: createdMovie.runningTime,
      year: createdMovie.year,
      genres: createdMovie.genres,
    };
  }
}
