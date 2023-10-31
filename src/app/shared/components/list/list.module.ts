import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';
import { OrderByPipe } from './order-by.pipe';
import { ToIntPipe } from './to-int.pipe';
@NgModule({
  imports: [IonicModule, CommonModule],
  declarations: [ListComponent, ToIntPipe, OrderByPipe],
  exports: [ListComponent, ToIntPipe, OrderByPipe],
})
export class ListComponentModule {}
