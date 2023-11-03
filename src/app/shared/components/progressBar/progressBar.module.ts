import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './progressBar.component.';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ProgressBarComponent],
  exports: [ProgressBarComponent],
})
export class ProgressBarComponentModule {}
