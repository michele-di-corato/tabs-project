import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movies.service';
import { MovieList } from 'src/app/shared/interfaces/movies.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: 'movieDetailTab.page.html',
  styleUrls: ['movieDetailTab.page.scss'],
})
export class MovieDetailTabPage {
  buttonStart = true;
  movie: MovieList | undefined;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _route: ActivatedRoute
  ) {
    const id = this._route.snapshot.params['id'];
    this._movieService
      .getMovieById(String(id))
      .subscribe((movie: MovieList) => (this.movie = movie));
  }
}
