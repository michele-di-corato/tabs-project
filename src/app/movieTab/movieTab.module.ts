import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieTabPage } from './movieTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MovieTabPageRoutingModule } from './movieTab-routing.module';
import { ListComponent } from '../shared/components/list/list.component';
import { MovieDetailTabPage } from './movieDetailTab/movieDetailTab.page';
import { MovieEditTabPage } from './movieEditTab/movieEditTab.page';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    MovieTabPageRoutingModule,
  ],
  declarations: [
    MovieTabPage,
    ListComponent,
    MovieDetailTabPage,
    MovieEditTabPage,
  ],
})
export class MovieTabPageModule {}
