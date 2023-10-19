import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTabPage } from './movieTab.page';
import { MovieDetailTabPage } from './movieDetailTab/movieDetailTab.page';

const routes: Routes = [
  {
    path: '',
    component: MovieTabPage,
  },
  {
    path: 'details/:id',
    component: MovieDetailTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieTabPageRoutingModule {}
