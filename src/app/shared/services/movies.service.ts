import { Injectable } from '@angular/core';
import { MovieForm, MovieList } from '../interfaces/movies.interface';
import { Observable, Subject, map } from 'rxjs';
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

  getList(): Observable<MovieList[]> {
    return this._http.get<MovieList[]>(`${this._baseUrl}/movies`).pipe(
      map((movie: any) => {
        return movie.movies;
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
  deleteMovie(id: string): Observable<MovieList> {
    return this._http.delete<MovieList>(`${this._baseUrl}/movies/${id}`);
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
