import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieList } from '../../interfaces/movies.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  @Input() list: any = [];
  @Output() id: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}
  addId(id: number) {
    this.id.emit(id);
  }
}
