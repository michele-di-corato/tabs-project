import { Component } from '@angular/core';
import { MovieList } from '../shared/interfaces/movies.interface';
import { MovieService } from '../shared/services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemList } from '../shared/interfaces/list.interface';

@Component({
  selector: 'app-movie-tab',
  templateUrl: 'movieTab.page.html',
  styleUrls: ['movieTab.page.scss'],
})
export class MovieTabPage {
  movies: ItemList[] = [];
  constructor(
    private readonly _movieService: MovieService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {
    this._getMovieList();
  }
  private _getMovieList() {
    this._movieService.movieOb$.subscribe((movieList: MovieList[]) => {
      this.movies = movieList.map((element: MovieList) => {
        return {
          id: element.id,
          name: element.title,
        };
      });
    });
    this._movieService.getList();
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
}
