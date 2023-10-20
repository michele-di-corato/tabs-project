import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movies.service';
import { MovieList } from 'src/app/shared/interfaces/movies.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: 'movieDetailTab.page.html',
  styleUrls: ['movieDetailTab.page.scss'],
})
export class MovieDetailTabPage implements OnInit {
  movie: MovieList | undefined;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.movie = this._movieService.getMovieById(Number(id));
  }
}
