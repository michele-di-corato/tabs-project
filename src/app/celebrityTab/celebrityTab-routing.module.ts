import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrityTabPage } from './celebrityTab.page';
import { CelebrityDetailTabPage } from './celebrityDetailTab/celebrityDetailTab.page';
import { CelebrityEditTabPage } from './celebrityEditTab/celebrityEditTab.page';
import { CelebrityCreateTabPage } from './celebrityCreateTab/celebrityCreateTab.page';

const routes: Routes = [
  {
    path: '',
    component: CelebrityTabPage,
  },
  {
    path: 'details/:id',
    component: CelebrityDetailTabPage,
  },
  {
    path: 'edit/:id',
    component: CelebrityEditTabPage,
  },
  {
    path: 'create',
    component: CelebrityCreateTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebrityTabPageRoutingModule {}
