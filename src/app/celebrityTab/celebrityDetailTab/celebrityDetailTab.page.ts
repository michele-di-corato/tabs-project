import { Component, OnInit } from '@angular/core';
import { CelebrityService } from 'src/app/shared/services/celebrities.service';
import { CelebrityList } from 'src/app/shared/interfaces/celebrities.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-celebrity-detail',
  templateUrl: 'celebrityDetailTab.page.html',
  styleUrls: ['celebrityDetailTab.page.scss'],
})
export class CelebrityDetailTabPage implements OnInit {
  celebrity: CelebrityList | undefined;
  constructor(
    private readonly _celebrityService: CelebrityService,
    private readonly _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this._route.snapshot.params['id'];
    this.celebrity = this._celebrityService.getCelebrityById(String(id));
  }
}
