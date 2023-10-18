import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CelebrityTabPage } from './celebrityTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CelebrityTabPageRoutingModule } from './celebrityTab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CelebrityTabPageRoutingModule,
  ],
  declarations: [CelebrityTabPage],
})
export class CelebrityTabPageModule {}
