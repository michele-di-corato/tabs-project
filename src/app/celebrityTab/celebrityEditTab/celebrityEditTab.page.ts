import { Component } from '@angular/core';
import { CelebrityService } from 'src/app/shared/services/celebrities.service';
import { CelebrityList } from 'src/app/shared/interfaces/celebrities.interface';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-celebrity-edit',
  templateUrl: 'celebrityEditTab.page.html',
  styleUrls: ['celebrityEditTab.page.scss'],
})
export class CelebrityEditTabPage {
  buttonStart = true;
  celebrity: CelebrityList | undefined;
  formCelebrity: FormGroup | undefined;
  constructor(
    private readonly _celebrityService: CelebrityService,
    private readonly _route: ActivatedRoute,
    private readonly _location: Location
  ) {
    const id = this._route.snapshot.params['id'];
    this._celebrityService
      .getCelebrityById(String(id))
      .subscribe((celebrity: CelebrityList) => {
        this.celebrity = celebrity;
        this._setForm();
      });
  }
  private _setForm() {
    this.formCelebrity = new FormGroup({
      id: new FormControl(this.celebrity?.id),
      name: new FormControl(this.celebrity?.name, Validators.minLength(5)),
      birthYear: new FormControl(
        this.celebrity?.birthYear,
        Validators.compose([Validators.min(1800), Validators.max(2024)])
      ),
      deathYear: new FormControl(
        this.celebrity?.deathYear,
        Validators.compose([Validators.min(1800), Validators.max(2024)])
      ),
    });
  }

  submitForm() {
    if (this.formCelebrity?.valid) {
      this._celebrityService
        .updateCelebrity(this.formCelebrity?.value)
        .subscribe(() => this._location.back());
    }
  }
}
