import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastCardComponent } from './castCard.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [CastCardComponent],
  exports: [CastCardComponent],
})
export class CastCardComponentModule {}
