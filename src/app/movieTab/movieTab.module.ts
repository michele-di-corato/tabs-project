import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieTabPage } from './movieTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MovieTabPageRoutingModule } from './movieTab-routing.module';
import { ListComponent } from '../shared/components/list/list.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MovieTabPageRoutingModule,
  ],
  declarations: [MovieTabPage, ListComponent],
})
export class MovieTabPageModule {}
