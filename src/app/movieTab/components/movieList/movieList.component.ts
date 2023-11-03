import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieList } from 'src/app/shared/interfaces/movies.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: 'movieList.component.html',
  styleUrls: ['movieList.component.scss'],
})
export class MovieListComponent {
  @Input() movieList: MovieList[] = [];
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
