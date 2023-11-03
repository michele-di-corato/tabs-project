import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';
import { OrderByPipe } from './order-by.pipe';
import { ToIntPipe } from './to-int.pipe';
import { ProgressBarComponentModule } from '../progressBar/progressBar.module';
@NgModule({
  imports: [IonicModule, CommonModule, ProgressBarComponentModule],
  declarations: [ListComponent, ToIntPipe, OrderByPipe],
  exports: [ListComponent, ToIntPipe, OrderByPipe],
})
export class ListComponentModule {}
