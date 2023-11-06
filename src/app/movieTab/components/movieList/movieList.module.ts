import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OrderByPipe } from 'src/app/shared/components/list/order-by.pipe';
import { ProgressBarComponentModule } from 'src/app/shared/components/progressBar/progressBar.module';
import { TextHighlightDirective } from 'src/app/shared/text-highlight.directive';
import { MovieListComponent } from './movieList.component';

@NgModule({
  imports: [IonicModule, CommonModule, ProgressBarComponentModule],
  declarations: [MovieListComponent, OrderByPipe, TextHighlightDirective],
  exports: [MovieListComponent, OrderByPipe],
})
export class MovieListComponentModule {}
