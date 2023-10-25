import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movies.service';
import { MovieList } from 'src/app/shared/interfaces/movies.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { defaultIfEmpty } from 'rxjs';

@Component({
  selector: 'app-create-movie',
  templateUrl: 'movieCreateTab.page.html',
  styleUrls: ['movieCreateTab.page.scss'],
})
export class MovieCreateTabPage {
  buttonStart = true;
  movie: MovieList | undefined;
  formMovie: FormGroup | undefined;
  constructor(
    private readonly _movieService: MovieService,
    private readonly _location: Location
  ) {
    this._setForm();
  }

  private _setForm() {
    this.formMovie = new FormGroup({
      id: new FormControl(
        'tt0000001',
        Validators.compose([Validators.required, Validators.maxLength(9)])
      ),
      title: new FormControl(
        this.movie?.title,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ])
      ),
      year: new FormControl(
        this.movie?.year,
        Validators.compose([
          Validators.required,
          Validators.max(2024),
          Validators.min(1900),
        ])
      ),
      runningTime: new FormControl(
        this.movie?.runningTime,
        Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(900),
        ])
      ),
      genres: new FormControl(this.movie?.genres),
      averageRating: new FormControl(
        0,
        Validators.compose([Validators.max(10), Validators.min(0)])
      ),
      numVotes: new FormControl(0, Validators.compose([Validators.min(0)])),
    });
  }
  submitForm() {
    if (this.formMovie?.valid) {
      this._movieService
        .addMovie(this.formMovie?.value)
        .subscribe(() => this._location.back());
    }
  }
}
