import { Injectable } from '@angular/core';
import { CelebrityList } from '../interfaces/celebrities.interface';

@Injectable({
  providedIn: 'root',
})
export class CelebrityService {
  celebrities: CelebrityList[] = [
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
  getList(): CelebrityList[] {
    return this.celebrities;
  }
  getCelebrityById(id: string): CelebrityList | undefined {
    let celebrity = this.celebrities.find((m) => m.id == id);
    return celebrity;
  }
  updateCelebrity(editedCelebrity: CelebrityList): void {
    const i = this.celebrities.findIndex(
      (celebrity: CelebrityList) => celebrity.id === editedCelebrity.id
    );
    if (i !== -1) {
      this.celebrities[i] = editedCelebrity;
    }
  }
}
