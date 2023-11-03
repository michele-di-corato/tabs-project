import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-progress-bar',
  templateUrl: 'progressBar.component.html',
  styleUrls: ['progressBar.component.scss'],
})
export class ProgressBarComponent implements OnChanges {
  @Input()
  get ratingIn() {
    return this._ratingIn;
  }
  set ratingIn(value: number) {
    this._ratingIn = this._toDecimal(value);
    this._setColor(this.ratingIn);
  }
  protected _ratingIn = 0;
  color = '';
  constructor() {}
  private _toDecimal(value: number) {
    if (value < 1) {
      return value;
    }
    return value / 10;
  }
  private _setColor(rating: number) {
    if (rating <= 0.4) {
      this.color = 'danger';
    } else if (rating > 0.4 && rating <= 0.7) {
      this.color = 'warning';
    } else {
      this.color = 'success';
    }
  }
  // Si attiva quando qualsiasi parte del componente varia, usando il setter sopra invece applichiamo modifiche solo quando cambia quella componente
  ngOnChanges(changes: SimpleChanges) {
    // this._toDecimal(this.ratingIn);
    // if (this.ratingIn <= 0.4) {
    //   this.color = 'danger';
    // } else if (this.ratingIn > 0.4 && this.ratingIn <= 0.7) {
    //   this.color = 'warning';
    // } else {
    //   this.color = 'success';
    // }
  }
}
