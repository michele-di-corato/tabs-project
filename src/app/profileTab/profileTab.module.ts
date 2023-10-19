import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfileTabPage } from './profileTab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfileTabPageRoutingModule } from './profileTab-routing.module';
import { DetailsPage } from './components/details.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfileTabPageRoutingModule,
  ],
  declarations: [ProfileTabPage, DetailsPage],
})
export class ProfileTabPageModule {}
