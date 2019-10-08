/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OdaService } from './oda.service';

describe('Service: Oda', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdaService]
    });
  });

  it('should ...', inject([OdaService], (service: OdaService) => {
    expect(service).toBeTruthy();
  }));
});
