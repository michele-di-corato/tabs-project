import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebrityTabPage } from './celebrityTab.page';

import { CelebrityTabPageRoutingModule } from './celebrityTab-routing.module';
import { ListComponentModule } from '../shared/components/list/list.module';
import { CelebrityDetailTabPage } from './celebrityDetailTab/celebrityDetailTab.page';
import { CelebrityEditTabPage } from './celebrityEditTab/celebrityEditTab.page';
import { CelebrityCreateTabPage } from './celebrityCreateTab/celebrityCreateTab.page';
import { HeaderComponentModule } from '../shared/components/header/header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CelebrityTabPageRoutingModule,
    ListComponentModule,
    HeaderComponentModule,
  ],
  declarations: [
    CelebrityTabPage,
    CelebrityDetailTabPage,
    CelebrityEditTabPage,
    CelebrityCreateTabPage,
  ],
})
export class CelebrityTabPageModule {}
