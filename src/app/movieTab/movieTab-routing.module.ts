import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTabPage } from './movieTab.page';
import { MovieDetailTabPage } from './movieDetailTab/movieDetailTab.page';
import { MovieEditTabPage } from './movieEditTab/movieEditTab.page';
import { MovieCreateTabPage } from './movieCreateTab/movieCreateTab.page';

const routes: Routes = [
  {
    path: '',
    component: MovieTabPage,
  },
  {
    path: 'details/:id',
    component: MovieDetailTabPage,
  },
  {
    path: 'edit/:id',
    component: MovieEditTabPage,
  },
  {
    path: 'create',
    component: MovieCreateTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieTabPageRoutingModule {}
