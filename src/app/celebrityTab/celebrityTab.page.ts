import { Component } from '@angular/core';
import { CelebrityList } from '../shared/interfaces/celebrities.interface';
import { CelebrityService } from '../shared/services/celebrities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemList } from '../shared/interfaces/list.interface';

@Component({
  selector: 'app-celebrity-tab',
  templateUrl: 'celebrityTab.page.html',
  styleUrls: ['celebrityTab.page.scss'],
})
export class CelebrityTabPage {
  celebrities: ItemList[] = [];
  constructor(
    private readonly _celebrityService: CelebrityService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}
  ionViewWillEnter() {
    this._getCelebrityList();
  }
  private _getCelebrityList() {
    this._celebrityService.celebrityOb$.subscribe(
      (celebrityList: CelebrityList[]) => {
        this.celebrities = celebrityList.map((element: CelebrityList) => {
          return {
            id: element.id,
            name: element.primaryName,
          };
        });
      }
    );
    this._celebrityService.getList();
  }
  goToDetailPage(id: string): void {
    this._router.navigate(['details', id], { relativeTo: this._route });
  }
  goToEditPage(id: string): void {
    this._router.navigate(['edit', id], { relativeTo: this._route });
  }
  deleteCelebrity(id: string): void {
    this._celebrityService.deleteCelebrity(id);
  }
}
