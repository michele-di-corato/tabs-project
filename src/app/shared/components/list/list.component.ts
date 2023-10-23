import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemList } from '../../interfaces/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  @Input() list: ItemList[] = [];
  @Output() idToSelect: EventEmitter<string> = new EventEmitter<string>();
  @Output() idToEdit: EventEmitter<string> = new EventEmitter<string>();
  @Output() idToDelete: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  selectById(id: string) {
    this.idToSelect.emit(id);
  }
  editById(id: string) {
    this.idToEdit.emit(id);
  }
  deleteById(id: string) {
    this.idToDelete.emit(id);
  }
}
