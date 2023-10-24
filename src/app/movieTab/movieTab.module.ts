import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieTabPage } from './movieTab.page';

import { MovieTabPageRoutingModule } from './movieTab-routing.module';
import { MovieDetailTabPage } from './movieDetailTab/movieDetailTab.page';
import { MovieEditTabPage } from './movieEditTab/movieEditTab.page';
import { ListComponentModule } from '../shared/components/list/list.module';
import { MovieCreateTabPage } from './movieCreateTab/movieCreateTab.page';
import { HeaderComponentModule } from '../shared/components/header/header.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MovieTabPageRoutingModule,
    ListComponentModule,
    HeaderComponentModule,
  ],
  declarations: [
    MovieTabPage,
    MovieDetailTabPage,
    MovieEditTabPage,
    MovieCreateTabPage,
  ],
})
export class MovieTabPageModule {}
