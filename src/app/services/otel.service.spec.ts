/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OtelService } from './otel.service';

describe('Service: Otel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtelService]
    });
  });

  it('should ...', inject([OtelService], (service: OtelService) => {
    expect(service).toBeTruthy();
  }));
});
