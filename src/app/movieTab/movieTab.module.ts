import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieTabPage } from './movieTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MovieTabPageRoutingModule } from './movieTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MovieTabPageRoutingModule,
  ],
  declarations: [MovieTabPage],
})
export class MovieTabPageModule {}
