import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Modes } from './menu/menu.component';

@Injectable({
  providedIn: 'root',
})
export class DataGridService {
  constructor(private _http: HttpClient) {}

  getGridData(): Observable<Modes[]> {
    // return this._http.get('http://demo7919674.mockable.io/')

    return of([{ name: 'easy', field: 5 }, { name: 'normal', field: 10 }, { name: 'hard', field: 25 }]) as Observable<Modes[]>;
  }
}
