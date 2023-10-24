import { Component } from '@angular/core';
import { CelebrityService } from 'src/app/shared/services/celebrities.service';
import { CelebrityList } from 'src/app/shared/interfaces/celebrities.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-celebrity-create',
  templateUrl: 'celebrityCreateTab.page.html',
  styleUrls: ['celebrityCreateTab.page.scss'],
})
export class CelebrityCreateTabPage {
  buttonStart = true;
  celebrity: CelebrityList | undefined;
  formCelebrity: FormGroup | undefined;
  constructor(
    private readonly _celebrityService: CelebrityService,
    private readonly _location: Location
  ) {
    this._setForm();
  }
  private _setForm() {
    this.formCelebrity = new FormGroup({
      id: new FormControl(this.celebrity?.id),
      primaryName: new FormControl(
        this.celebrity?.primaryName,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ])
      ),
      birthYear: new FormControl(
        this.celebrity?.birthYear,
        Validators.compose([
          Validators.required,
          Validators.min(1900),
          Validators.max(2024),
        ])
      ),
      deathYear: new FormControl(
        this.celebrity?.deathYear,
        Validators.compose([Validators.min(1900), Validators.max(2024)])
      ),
      nationality: new FormControl(this.celebrity?.nationality),
    });
  }

  submitForm() {
    if (this.formCelebrity?.valid) {
      this._celebrityService.addCelebrity(this.formCelebrity?.value);
    }
    this.formCelebrity?.valueChanges.subscribe((x: FormGroup) => {
      console.log(x);
    });
    this._location.back();
  }
}
