import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Modes } from './menu/menu.component';

@Injectable({
  providedIn: 'root',
})
export class DataGridService {
  constructor(private _http: HttpClient) {}

  getGridData(): Observable<Modes[]> {
    return this._http.get('http://demo7919674.mockable.io/') as Observable<
      Modes[]
    >;
  }
}
