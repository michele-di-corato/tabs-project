import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovieTabPage } from './movieTab.page';

import { CastCardComponentModule } from '../shared/components/castCard/castCard.module';
import { HeaderComponentModule } from '../shared/components/header/header.module';
import { RatingBarComponentModule } from '../shared/components/ratingBar/ratingBar.module';
import { MovieListComponentModule } from './components/movieList/movieList.module';
import { MovieCreateTabPage } from './movieCreateTab/movieCreateTab.page';
import { MovieDetailTabPage } from './movieDetailTab/movieDetailTab.page';
import { MovieEditTabPage } from './movieEditTab/movieEditTab.page';
import { MovieTabPageRoutingModule } from './movieTab-routing.module';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MovieTabPageRoutingModule,
    HeaderComponentModule,
    CastCardComponentModule,
    RatingBarComponentModule,
    MovieListComponentModule,
  ],
  declarations: [
    MovieTabPage,
    MovieDetailTabPage,
    MovieEditTabPage,
    MovieCreateTabPage,
  ],
})
export class MovieTabPageModule {}
