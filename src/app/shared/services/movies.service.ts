import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, first, map, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieForm, MovieList } from '../interfaces/movies.interface';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private _baseUrl = environment.baseUrl;

  constructor(private readonly _http: HttpClient) {}

  private _movie$ = new Subject<MovieList[]>();

  movieOb$ = this._movie$.asObservable();

  getList(title?: string | null): Observable<MovieList[]> {
    return this._http
      .get<MovieList[]>(
        `${this._baseUrl}/movies${title ? '?title=' + title.toLowerCase() : ''}`
      )
      .pipe(
        map((movies: any) => {
          return movies.movies;
        })
      );
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
  deleteMovie(id: string): Observable<MovieList[]> {
    return this._http.delete<MovieList>(`${this._baseUrl}/movies/${id}`).pipe(
      first(),
      switchMap(() => this.getList())
    );
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
