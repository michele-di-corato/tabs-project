import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { BehaviorSubject, combineLatest } from 'rxjs';
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
  filteredMoviesByTitle: ItemList[] = [];
  unfilteredMovies: ItemList[] = [];
  ratingRange$ = new BehaviorSubject<number>(0);
  titleFilter$ = new BehaviorSubject<string>('');
  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}
  ionViewWillEnter() {
    combineLatest({
      movieList: this._movieService.getList(),
      rating: this.ratingRange$,
      title: this.titleFilter$,
    }).subscribe(({ movieList, rating, title }) => {
      this.unfilteredMovies = movieList.map((element: MovieList) => {
        return {
          id: element.id,
          name: element.title,
          rating: element.rating.averageRating / 10,
        };
      });
      this._getMoviesByTitle(title);
      this._getMoviesWithAvgRating(rating);
    });
  }
  onIonChange(rating: Event) {
    this.ratingRange$.next(Number((rating as RangeCustomEvent).detail.value));
  }
  private _getMoviesWithAvgRating(rating: number) {
    this.movies = this.filteredMoviesByTitle.filter(
      (movie) => (movie.rating || 0) > rating / 10
    );
  }
  ionInput(title: Event) {
    this.titleFilter$.next((title.target as HTMLInputElement).value.toString());
  }
  private _getMoviesByTitle(title: string) {
    this.filteredMoviesByTitle = this.unfilteredMovies.filter((movie) =>
      movie.name.toLowerCase().includes(title.toLowerCase())
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
