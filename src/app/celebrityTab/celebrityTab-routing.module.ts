import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelebrityTabPage } from './celebrityTab.page';

const routes: Routes = [
  {
    path: '',
    component: CelebrityTabPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CelebrityTabPageRoutingModule {}
