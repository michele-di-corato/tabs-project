import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingBarComponent } from './ratingBar.component.';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [RatingBarComponent],
  exports: [RatingBarComponent],
})
export class RatingBarComponentModule {}
