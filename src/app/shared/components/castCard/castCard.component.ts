import { Component, Input } from '@angular/core';
import { CastMovie } from '../../interfaces/cast.interface';

@Component({
  selector: 'app-cast-card',
  templateUrl: 'castCard.component.html',
  styleUrls: ['castCard.component.scss'],
})
export class CastCardComponent {
  @Input() page: string = '';
  @Input() list: CastMovie[] = [];
  constructor() {}
}
