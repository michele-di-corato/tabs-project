import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appTextHighlight]',
})
export class TextHighlightDirective {
  @Input()
  get appTextHighlight() {
    return this._number;
  }
  set appTextHighlight(value: number) {
    this._number = value;
    this._setColor(this.appTextHighlight);
  }
  @Input() maxRating = 4;
  protected _number = 0;
  constructor(private _eleRef: ElementRef) {}
  protected _setColor(value: number) {
    if (value <= this.maxRating) {
      this._eleRef.nativeElement.style.color = 'saddlebrown';
    }
  }
}
