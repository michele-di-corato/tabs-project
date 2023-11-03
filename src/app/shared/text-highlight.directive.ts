import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[textHighlight]',
})
export class TextHighlightDirective {
  @Input()
  get number() {
    return this._number;
  }
  set number(value: number) {
    this._number = value;
    this._setColor(this._number);
  }
  protected _number = 0;
  constructor(private _eleRef: ElementRef) {}
  protected _setColor(value: number) {
    if (value <= 4) {
      this._eleRef.nativeElement.style.color = 'brown';
    }
  }
}
