import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movies.service';
import { MovieList } from 'src/app/shared/interfaces/movies.interface';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-movie-edit',
  templateUrl: 'movieEditTab.page.html',
  styleUrls: ['movieEditTab.page.scss'],
})
export class MovieEditTabPage {
  buttonStart = true;
  movie: MovieList | undefined;
  formMovie: FormGroup | undefined;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location
  ) {
    const id = this._route.snapshot.params['id'];
    this._movieService
      .getMovieById(String(id))
      .subscribe((movie: MovieList) => {
        this.movie = movie;
        this._setForm();
      });
  }

  private _setForm() {
    this.formMovie = new FormGroup({
      id: new FormControl(this.movie?.id),
      title: new FormControl(this.movie?.title, Validators.minLength(5)),
      year: new FormControl(this.movie?.year),
      runningTime: new FormControl(this.movie?.runningTime),
      genres: new FormControl(this.movie?.genres),
      // averageRating: new FormControl(this.movie?.rating.averageRating),
      // numVotes: new FormControl(this.movie?.rating.numVotes),
    });
  }

  submitForm() {
    if (this.formMovie?.valid) {
      this._movieService
        .updateMovie(this.formMovie?.value)
        .subscribe(() => this._location.back());
    }
  }
}
