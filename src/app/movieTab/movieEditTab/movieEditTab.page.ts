import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movies.service';
import { MovieList } from 'src/app/shared/interfaces/movies.interface';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: 'movieEditTab.page.html',
  styleUrls: ['movieEditTab.page.scss'],
})
export class MovieEditTabPage {
  movie: MovieList | undefined;
  formMovie: FormGroup | undefined;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location
  ) {
    const id = this._route.snapshot.params['id'];
    this.movie = this._movieService.getMovieById(String(id));
    this._setForm();
  }

  private _setForm() {
    this.formMovie = new FormGroup({
      id: new FormControl(this.movie?.id),
      title: new FormControl(this.movie?.title, Validators.minLength(5)),
      director: new FormControl(this.movie?.director, Validators.minLength(5)),
      releaseYear: new FormControl(this.movie?.releaseYear),
      description: new FormControl(
        this.movie?.description,
        Validators.maxLength(1000)
      ),
      genres: new FormControl(this.movie?.genres),
      celebrities: new FormControl(this.movie?.celebrities),
      countries: new FormControl(this.movie?.countries),
      rating: new FormControl(this.movie?.rating),
    });
  }

  submitForm() {
    if (this.formMovie?.valid) {
      this._movieService.updateMovie(this.formMovie?.value);
    }
    this._location.back();
  }
}
