import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movies',
        loadChildren: () =>
          import('../movieTab/movieTab.module').then(
            (m) => m.MovieTabPageModule
          ),
      },
      {
        path: 'celebrities',
        loadChildren: () =>
          import('../celebrityTab/celebrityTab.module').then(
            (m) => m.CelebrityTabPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profileTab/profileTab.module').then(
            (m) => m.ProfileTabPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/movies',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/movies',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
