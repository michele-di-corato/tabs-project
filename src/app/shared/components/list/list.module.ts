import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
@NgModule({
  imports: [IonicModule, CommonModule, ExploreContainerComponentModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListComponentModule {}
