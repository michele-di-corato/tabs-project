import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrityTabPage } from './celebrityTab.page';
import { CelebrityDetailTabPage } from './celebrityDetailTab/celebrityDetailTab.page';

const routes: Routes = [
  {
    path: '',
    component: CelebrityTabPage,
  },
  {
    path: 'details/:id',
    component: CelebrityDetailTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebrityTabPageRoutingModule {}
