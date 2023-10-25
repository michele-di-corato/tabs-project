import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastCardComponent } from './castCard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [IonicModule, CommonModule, RouterModule],
  declarations: [CastCardComponent],
  exports: [CastCardComponent],
})
export class CastCardComponentModule {}
