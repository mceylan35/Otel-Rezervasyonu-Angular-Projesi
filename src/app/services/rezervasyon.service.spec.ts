/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RezervasyonService } from './rezervasyon.service';

describe('Service: Rezervasyon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RezervasyonService]
    });
  });

  it('should ...', inject([RezervasyonService], (service: RezervasyonService) => {
    expect(service).toBeTruthy();
  }));
});
