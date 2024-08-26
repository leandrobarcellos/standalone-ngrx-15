/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KkMessagesApiService } from './kk-messages-api.service';

describe('Service: KkMessagesApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KkMessagesApiService]
    });
  });

  it('should ...', inject([KkMessagesApiService], (service: KkMessagesApiService) => {
    expect(service).toBeTruthy();
  }));
});
