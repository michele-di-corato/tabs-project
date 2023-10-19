import { Component } from '@angular/core';
import { MovieList } from '../shared/interfaces/movies.interface';
import { MovieService } from '../shared/services/movies.service';

@Component({
  selector: 'app-movie-tab',
  templateUrl: 'movieTab.page.html',
  styleUrls: ['movieTab.page.scss'],
})
export class MovieTabPage {
  constructor(private readonly _movieService: MovieService) {}
  movies: MovieList[] = this._movieService.getList();
}
