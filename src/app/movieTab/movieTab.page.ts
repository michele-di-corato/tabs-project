import { Component } from '@angular/core';
import { MovieList } from '../shared/interfaces/movies.interface';
import { MovieService } from '../shared/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-tab',
  templateUrl: 'movieTab.page.html',
  styleUrls: ['movieTab.page.scss'],
})
export class MovieTabPage {
  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}
  movies: MovieList[] = this._movieService.getList();
  goToDetailPage(id: number): void {
    this._router.navigate(['details', id], { relativeTo: this._route });
  }
  goToEditPage(id: number): void {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }
}
