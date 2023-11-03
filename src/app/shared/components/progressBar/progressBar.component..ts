import { Component, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'app-progress-bar',
  templateUrl: 'progressBar.component.html',
  styleUrls: ['progressBar.component.scss'],
})
export class ProgressBarComponent implements OnChanges {
  @Input() ratingIn = 0;
  color = '';
  constructor() {}
  private _toDecimal(value: number) {
    if (value < 1) {
      return;
    }
    return (this.ratingIn /= 10);
  }
  ngOnChanges() {
    this._toDecimal(this.ratingIn);
    if (this.ratingIn <= 0.4) {
      this.color = 'danger';
    } else if (this.ratingIn > 0.4 && this.ratingIn <= 0.7) {
      this.color = 'warning';
    } else {
      this.color = 'success';
    }
  }
}
