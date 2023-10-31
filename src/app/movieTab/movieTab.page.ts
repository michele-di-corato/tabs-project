import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ItemList } from '../shared/interfaces/list.interface';
import { MovieList } from '../shared/interfaces/movies.interface';
import { MovieService } from '../shared/services/movies.service';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-movie-tab',
  templateUrl: 'movieTab.page.html',
  styleUrls: ['movieTab.page.scss'],
})
export class MovieTabPage {
  movies: ItemList[] = [];
  ratingRange: number = 0;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}
  ionViewWillEnter() {
    this._getMovieList();
  }
  private _getMovieList() {
    this._movieService.getList().subscribe((movieList: MovieList[]) => {
      this.movies = movieList.map((element: MovieList) => {
        return {
          id: element.id,
          name: `${element.title} (${element.rating.averageRating})`,
        };
      });
    });
  }
  onIonChange(rating: Event) {
    this._getMoviesWithAvgRating(
      Number((rating as RangeCustomEvent).detail.value)
    );
  }
  onIonKnobMoveEnd(rating: Event) {
    this.ratingRange = Number((rating as RangeCustomEvent).detail.value);
  }
  private _getMoviesWithAvgRating(rating: number) {
    this._movieService
      .getList()
      .pipe(
        map((movies) =>
          movies.filter((movie) => movie.rating.averageRating > rating)
        )
      )
      .subscribe((movieList: MovieList[]) => {
        this.movies = movieList.map((element: MovieList) => {
          return {
            id: element.id,
            name: element.title,
            rating: element.rating.averageRating,
          };
        });
      });
  }
  goToDetailPage(id: string): void {
    this._router.navigate(['details', id], { relativeTo: this._route });
  }
  goToEditPage(id: string): void {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }
  deleteMovie(id: string): void {
    this._movieService.deleteMovie(id).subscribe(() => {
      this._getMovieList();
    });
  }
  goToAddPage(): void {
    this._router.navigate(['create'], { relativeTo: this._route });
  }
}
