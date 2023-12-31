import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemList } from '../shared/interfaces/list.interface';
import { CelebrityService } from '../shared/services/celebrities.service';

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
  ) {
    this._celebrityService.celebrities$.subscribe((celebrities) => {
      this.celebrities = celebrities.map((celebrity) => {
        return {
          id: celebrity.id,
          name: celebrity.name,
        };
      });
    });
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
  goToAddPage(): void {
    this._router.navigate(['create'], { relativeTo: this._route });
  }
}
