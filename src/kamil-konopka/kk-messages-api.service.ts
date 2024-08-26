import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KkMessagesApiService {
  private readonly http = inject(HttpClient);

  deleteMessage(id: string): Observable<void> {
    return this.http.delete<void>(`/${id}`);
  }
}
