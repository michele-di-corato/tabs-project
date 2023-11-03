import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-rating-bar',
  templateUrl: 'ratingBar.component.html',
  styleUrls: ['ratingBar.component.scss'],
})
export class RatingBarComponent {
  @Input() ratingIn = 0;
  @Output() ratingOut = new EventEmitter<Event>();
  constructor() {}
  onIonChange(rating: Event) {
    this.ratingOut.emit(rating);
  }
}
