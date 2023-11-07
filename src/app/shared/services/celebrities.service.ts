import { Injectable } from '@angular/core';
import { CelebrityList } from '../interfaces/celebrities.interface';
import {
  BehaviorSubject,
  Observable,
  Subject,
  first,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CelebritiesResponseDto } from '../interfaces/responses.interface';
export interface CelebrityFilter {
  name?: string;
  orderBy?: string;
  size?: number;
  page?: number;
}
@Injectable({
  providedIn: 'root',
})
export class CelebrityService {
  private _baseUrl = environment.baseUrl;
  celebrities$: Observable<CelebrityList[]>;
  refresh$ = new BehaviorSubject<boolean>(true);
  currentFilters: CelebrityFilter;

  constructor(private readonly _http: HttpClient) {
    this.currentFilters = {
      page: 0,
      size: 20,
    };
    this.celebrities$ = this.refresh$.pipe(
      switchMap(() => {
        const params = this.getFilters();
        return this._http.get<CelebritiesResponseDto>(
          `${this._baseUrl}/movies`,
          {
            params,
          }
        );
      }),
      map((response) => response.celebrities)
    );
  }
  getFilters() {
    let params: HttpParams = new HttpParams();
    if (this.currentFilters.name)
      params = params.set('name', this.currentFilters.name);
    if (this.currentFilters.orderBy)
      params = params.set('order_by', this.currentFilters.orderBy);
    if (this.currentFilters.page)
      params = params.set('page', this.currentFilters.page);
    if (this.currentFilters.size)
      params = params.set('size', this.currentFilters.size);
    return params;
  }
  refresh() {
    this.refresh$.next(true);
  }

  getCelebrityById(id: string): Observable<CelebrityList> {
    return this._http.get<CelebrityList>(`${this._baseUrl}/celebrities/${id}`);
  }
  updateCelebrity(editedCelebrity: CelebrityList): Observable<CelebrityList> {
    return this._http
      .put<CelebrityList>(
        `${this._baseUrl}/celebritites/${editedCelebrity.id}`,
        editedCelebrity
      )
      .pipe(tap(() => this.refresh()));
  }
  deleteCelebrity(id: string): void {
    this._http
      .delete<CelebrityList>(`${this._baseUrl}/celebrities/${id}`)
      .pipe(
        first(),
        tap(() => this.refresh())
      )
      .subscribe();
  }
  addCelebrity(createdCelebrity: CelebrityList): Observable<CelebrityList> {
    return this._http
      .post<CelebrityList>(`${this._baseUrl}/celebrities`, createdCelebrity)
      .pipe(tap(() => this.refresh()));
  }
}
