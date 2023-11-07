import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { MovieList } from '../shared/interfaces/movies.interface';
import { MovieService } from '../shared/services/movies.service';

@Component({
  selector: 'app-movie-tab',
  templateUrl: 'movieTab.page.html',
  styleUrls: ['movieTab.page.scss'],
})
export class MovieTabPage {
  movies: MovieList[] = [];
  filteredMovies: MovieList[] = [];
  ratingRange$ = new BehaviorSubject<number>(0);
  selectedId$ = new BehaviorSubject<string>('');
  selectedMovie: MovieList | undefined;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    this._movieService.movies$.subscribe((movies) => {
      this.movies = movies;
      this.filteredMovies = movies;
    });
    this.selectedId$.subscribe((id) => {
      let movie = this.filteredMovies.find((movie) => movie.id === id);
      if (movie) this.selectedMovie = movie;
    });
  }
  onRatingIonChange(event: Event) {
    const rating = Number((event as RangeCustomEvent).detail.value);
    this.filteredMovies = this.movies.filter(
      (movie) => (movie.rating.averageRating || 0) > rating
    );
  }
  onTitleIonChange(event: Event) {
    this._movieService.filters = {
      ...this._movieService.currentFilters,
      title: (event as CustomEvent).detail.value,
    };
  }
  loadMovie(id: string): void {
    this.selectedId$.next(id);
  }
  goToDetailPage(id: string): void {
    this._router.navigate(['details', id], { relativeTo: this._route });
  }
  goToEditPage(id: string): void {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }
  deleteMovie(id: string): void {
    this._movieService.deleteMovie(id);
  }
  goToAddPage(): void {
    this._router.navigate(['create'], { relativeTo: this._route });
  }
}
