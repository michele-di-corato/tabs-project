import { Injectable } from '@angular/core';
import { CelebrityList } from '../interfaces/celebrities.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CelebrityService {
  private _celebrities: CelebrityList[] = [
    {
      id: '1',
      primaryName: 'Marlon Brando',
      birthYear: 1924,
    },
    {
      id: '2',
      primaryName: 'Liam Neeson',
      birthYear: 1952,
    },
    {
      id: '3',
      primaryName: 'John Travolta',
      birthYear: 1954,
    },
    {
      id: '4',
      primaryName: 'Elijah Wood',
      birthYear: 1981,
    },
    {
      id: '5',
      primaryName: 'Leonardo DiCaprio',
      birthYear: 1974,
    },
    {
      id: '6',
      primaryName: 'Tom Hanks',
      birthYear: 1956,
    },
    {
      id: '7',
      primaryName: 'Keanu Reeves',
      birthYear: 1964,
    },
    {
      id: '8',
      primaryName: 'Matthew McConaughey',
      birthYear: 1969,
    },
    {
      id: '9',
      primaryName: 'Viggo Mortensen',
      birthYear: 1958,
    },
    {
      id: '10',
      primaryName: 'Christian Bale',
      birthYear: 1974,
    },
    {
      id: '11',
      primaryName: 'Brad Pitt',
      birthYear: 1963,
    },
    {
      id: '12',
      primaryName: 'Jean Reno',
      birthYear: 1948,
    },
    {
      id: '13',
      primaryName: 'Tim Robbins',
      birthYear: 1958,
    },
    {
      id: '14',
      primaryName: 'Al Pacino',
      birthYear: 1940,
    },
    {
      id: '15',
      primaryName: 'Robert De Niro',
      birthYear: 1943,
    },
  ];
  private _numId = this._celebrities.length;
  private _celebrity$ = new Subject<CelebrityList[]>();
  celebrityOb$ = this._celebrity$.asObservable();
  getList(): void {
    this._celebrity$.next(this._celebrities);
  }
  getCelebrityById(id: string): CelebrityList | undefined {
    let celebrity = this._celebrities.find((m) => m.id == id);
    return celebrity;
  }
  updateCelebrity(editedCelebrity: CelebrityList): void {
    const i = this._celebrities.findIndex(
      (celebrity: CelebrityList) => celebrity.id === editedCelebrity.id
    );
    if (i !== -1) {
      this._celebrities[i] = editedCelebrity;
    }
    this._celebrity$.next(this._celebrities);
  }
  deleteCelebrity(id: string): void {
    const i = this._celebrities.findIndex(
      (movie: CelebrityList) => movie.id == id
    );
    if (i !== -1) {
      this._celebrities.splice(i, 1);
    }
    this._celebrity$.next(this._celebrities);
  }
  addCelebrity(createdCelebrity: CelebrityList): void {
    this._numId += 1;
    createdCelebrity.id = this._numId.toString();
    this._celebrities.push(createdCelebrity);
    this._celebrity$.next(this._celebrities);
  }
}
