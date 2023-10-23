import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movies.service';
import { MovieList } from 'src/app/shared/interfaces/movies.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-movie',
  templateUrl: 'movieCreateTab.page.html',
  styleUrls: ['movieCreateTab.page.scss'],
})
export class MovieCreateTabPage {
  movie: MovieList | undefined;
  formMovie: FormGroup | undefined;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location
  ) {
    this._setForm();
  }

  private _setForm() {
    this.formMovie = new FormGroup({
      id: new FormControl(this.movie?.id),
      title: new FormControl(
        this.movie?.title,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z ]*'),
        ])
      ),
      director: new FormControl(
        this.movie?.director,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
          Validators.pattern('[a-zA-Z ]*'),
        ])
      ),
      releaseYear: new FormControl(
        this.movie?.releaseYear,
        Validators.compose([
          Validators.required,
          Validators.max(2024),
          Validators.min(1900),
        ])
      ),
      runtimeMinutes: new FormControl(
        this.movie?.runtimeMinutes,
        Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(900),
        ])
      ),
      description: new FormControl(
        this.movie?.description,

        Validators.compose([
          Validators.maxLength(1000),
          Validators.pattern('[a-zA-Z ]*'),
        ])
      ),
      genres: new FormControl(this.movie?.genres),
      celebrities: new FormControl(this.movie?.celebrities),
      countries: new FormControl(this.movie?.countries),
      rating: new FormControl(this.movie?.rating),
    });
  }
  submitForm() {
    if (this.formMovie?.valid) {
      this._movieService.addMovie(this.formMovie?.value);
      this.formMovie?.valueChanges.subscribe((x: FormGroup) => {
        console.log(x);
      });
      this._location.back();
    }
  }
}
