import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { BehaviorSubject, combineLatest, switchMap } from 'rxjs';
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
  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}
  ionViewWillEnter() {
    // combineLatest({
    //   movieList: this._movieService.getList(),
    //   rating: this.ratingRange$,
    // }).subscribe(({ movieList, rating }) => {
    //   this.unfilteredMovies = movieList.map((element: MovieList) => {
    //     return {
    //       id: element.id,
    //       name: element.title,
    //       rating: element.rating.averageRating / 10,
    //     };
    //   });
    //   this._getMoviesWithAvgRating(rating);
    // });
    this._movieService
      .getList()
      .pipe(
        switchMap((movies) => {
          this.unfilteredMovies = movies.map((movie: MovieList) => {
            return {
              id: movie.id,
              name: movie.title,
              rating: movie.rating.averageRating,
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
  private _getMoviesWithAvgRating(rating: number) {
    this.movies = this.unfilteredMovies.filter(
      (movie) => (movie.rating || 0) > rating
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
