import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { SharedData } from '..';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly _sharedData$ = new ReplaySubject<SharedData>(1);

  constructor() {}

  get sharedData$(): Observable<SharedData> {
    return this._sharedData$.pipe(
      // map((next) => ({ ...next, inner: { ...next.inner } }))
      map((next) => Object.freeze(next))
    );
  }
  
  updateStore(data: SharedData): void {
    this._sharedData$.next(data);
  }
}
