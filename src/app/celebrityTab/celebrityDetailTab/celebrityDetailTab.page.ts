import { Component } from '@angular/core';
import { CelebrityService } from 'src/app/shared/services/celebrities.service';
import { CelebrityList } from 'src/app/shared/interfaces/celebrities.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-celebrity-detail',
  templateUrl: 'celebrityDetailTab.page.html',
  styleUrls: ['celebrityDetailTab.page.scss'],
})
export class CelebrityDetailTabPage {
  buttonStart = true;
  page = 'celebrity';
  celebrity: CelebrityList | undefined;
  constructor(
    private readonly _celebrityService: CelebrityService,
    private readonly _route: ActivatedRoute
  ) {
    const id = this._route.snapshot.params['id'];
    this._celebrityService
      .getCelebrityById(String(id))
      .subscribe((celebrity: CelebrityList) => (this.celebrity = celebrity));
  }
}
