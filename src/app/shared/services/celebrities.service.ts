import { Injectable } from '@angular/core';
import { CelebrityList } from '../interfaces/celebrities.interface';
import { Observable, Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CelebrityService {
  private _baseUrl = environment.baseUrl;

  constructor(private readonly _http: HttpClient) {}

  private _celebrities: CelebrityList[] = [];

  private _numId = this._celebrities.length;

  private _celebrity$ = new Subject<CelebrityList[]>();

  celebrityOb$ = this._celebrity$.asObservable();

  getList(): Observable<CelebrityList[]> {
    return this._http.get<CelebrityList[]>(`${this._baseUrl}/celebrities`).pipe(
      map((celebrity: any) => {
        return celebrity.celebrities;
      })
    );
    // this._celebrity$.next(this._celebrities);
  }
  getCelebrityById(id: string): Observable<CelebrityList> {
    return this._http.get<CelebrityList>(`${this._baseUrl}/celebrities/${id}`);
    // let celebrity = this._celebrities.find((m) => m.id == id);
    // return celebrity;
  }
  updateCelebrity(editedCelebrity: CelebrityList): Observable<CelebrityList> {
    return this._http.put<CelebrityList>(
      `${this._baseUrl}/celebritites/${editedCelebrity.id}`,
      editedCelebrity
    );
    // const i = this._celebrities.findIndex(
    //   (celebrity: CelebrityList) => celebrity.id === editedCelebrity.id
    // );
    // if (i !== -1) {
    //   this._celebrities[i] = editedCelebrity;
    // }
    // this._celebrity$.next(this._celebrities);
  }
  deleteCelebrity(id: string): Observable<CelebrityList> {
    return this._http.delete<CelebrityList>(
      `${this._baseUrl}/celebrities/${id}`
    );
    // const i = this._celebrities.findIndex(
    //   (movie: CelebrityList) => movie.id == id
    // );
    // if (i !== -1) {
    //   this._celebrities.splice(i, 1);
    // }
    // this._celebrity$.next(this._celebrities);
  }
  addCelebrity(createdCelebrity: CelebrityList): Observable<CelebrityList> {
    return this._http.post<CelebrityList>(
      `${this._baseUrl}/celebrities`,
      createdCelebrity
    );
    // this._numId += 1;
    // createdCelebrity.id = this._numId.toString();
    // this._celebrities.push(createdCelebrity);
    // this._celebrity$.next(this._celebrities);
  }
}
