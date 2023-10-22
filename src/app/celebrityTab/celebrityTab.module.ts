import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebrityTabPage } from './celebrityTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CelebrityTabPageRoutingModule } from './celebrityTab-routing.module';
import { ListComponent } from '../shared/components/list/list.component';
import { ListComponentModule } from '../shared/components/list/list.module';
import { CelebrityDetailTabPage } from './celebrityDetailTab/celebrityDetailTab.page';
import { CelebrityEditTabPage } from './celebrityEditTab/celebrityEditTab.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    CelebrityTabPageRoutingModule,
    ListComponentModule,
  ],
  declarations: [
    CelebrityTabPage,
    CelebrityDetailTabPage,
    CelebrityEditTabPage,
  ],
})
export class CelebrityTabPageModule {}
