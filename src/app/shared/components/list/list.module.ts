import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';
import { ProgressBarComponentModule } from '../progressBar/progressBar.module';
@NgModule({
  imports: [IonicModule, CommonModule, ProgressBarComponentModule],
  declarations: [ListComponent],
  exports: [ListComponent],
})
export class ListComponentModule {}
