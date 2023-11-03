import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { BehaviorSubject, debounceTime, startWith, switchMap } from 'rxjs';
import { ItemList } from '../shared/interfaces/list.interface';
import { MovieList } from '../shared/interfaces/movies.interface';
import { MovieService } from '../shared/services/movies.service';

@Component({
  selector: 'app-movie-tab',
  templateUrl: 'movieTab.page.html',
  styleUrls: ['movieTab.page.scss'],
})
export class MovieTabPage {
  movies: MovieList[] = [];
  unfilteredMovies: MovieList[] = [];
  ratingRange$ = new BehaviorSubject<number>(0);
  title = new FormControl<string>('');
  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    this.title.valueChanges
      .pipe(
        startWith(''),
        debounceTime(500),
        switchMap((title) => {
          return this._movieService.getList(title);
        }),
        switchMap((movies) => {
          this.unfilteredMovies = movies;
          return this.ratingRange$;
        })
      )
      .subscribe((value) => {
        this._getMoviesWithAvgRating(value);
      });
  }
  onIonChange(rating: Event) {
    this.ratingRange$.next(Number((rating as RangeCustomEvent).detail.value));
  }
  private _getMoviesWithAvgRating(rating: number) {
    this.movies = this.unfilteredMovies.filter(
      (movie) => (movie.rating.averageRating || 0) > rating
    );
  }
  goToDetailPage(id: string): void {
    this._router.navigate(['details', id], { relativeTo: this._route });
  }
  goToEditPage(id: string): void {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }
  deleteMovie(id: string): void {
    // TODO: Da correggere dopo il nuovo metodo di chiamata
    this._movieService.deleteMovie(id);
  }
  goToAddPage(): void {
    this._router.navigate(['create'], { relativeTo: this._route });
  }
}
