import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieTabPage } from './movieTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MovieTabPageRoutingModule } from './movieTab-routing.module';
import { MovieDetailTabPage } from './movieDetailTab/movieDetailTab.page';
import { MovieEditTabPage } from './movieEditTab/movieEditTab.page';
import { ListComponentModule } from '../shared/components/list/list.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    MovieTabPageRoutingModule,
    ListComponentModule,
  ],
  declarations: [MovieTabPage, MovieDetailTabPage, MovieEditTabPage],
})
export class MovieTabPageModule {}
