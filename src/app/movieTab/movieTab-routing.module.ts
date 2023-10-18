import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieTabPage } from './movieTab.page';

const routes: Routes = [
  {
    path: '',
    component: MovieTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieTabPageRoutingModule {}
