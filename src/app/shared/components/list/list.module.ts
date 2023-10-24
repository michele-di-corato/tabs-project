import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListComponentModule {}
