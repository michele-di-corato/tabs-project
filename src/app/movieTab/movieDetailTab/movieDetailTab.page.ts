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
  movieId = 1;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _route: ActivatedRoute
  ) {
    this._route.params.subscribe((params) => {
      this.movieId = params['id'];
    });
  }
  movie: MovieList[] | undefined;
  if(movieId: number) {
    this.movie = this._movieService.getMovieById(movieId);
  }
}
