import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { BehaviorSubject, map, switchMap } from 'rxjs';
import { ItemList } from '../shared/interfaces/list.interface';
import { MovieList } from '../shared/interfaces/movies.interface';
import { MovieService } from '../shared/services/movies.service';

@Component({
  selector: 'app-movie-tab',
  templateUrl: 'movieTab.page.html',
  styleUrls: ['movieTab.page.scss'],
})
export class MovieTabPage {
  movies: ItemList[] = [];
  unfilteredMovies: ItemList[] = [];
  ratingRange$ = new BehaviorSubject<number>(0);
  titleFilter$ = new BehaviorSubject<string>('');
  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}
  ionViewWillEnter() {
    this.titleFilter$
      .pipe(
        switchMap((title) => {
          return this._movieService.getList(title);
        }),
        switchMap((movies) => {
          this.unfilteredMovies = movies.map((movie: MovieList) => {
            return {
              id: movie.id,
              name: movie.title,
              rating: movie.rating.averageRating / 10,
            };
          });
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
  ionInput(title: Event) {
    this.titleFilter$.next((title.target as HTMLInputElement).value.toString());
  }
  private _getMoviesWithAvgRating(rating: number) {
    this.movies = this.unfilteredMovies.filter(
      (movie) => (movie.rating || 0) > rating / 10
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
