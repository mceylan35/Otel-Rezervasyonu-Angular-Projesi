/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RezervasyonlarimService } from './rezervasyonlarim.service';

describe('Service: Rezervasyonlarim', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RezervasyonlarimService]
    });
  });

  it('should ...', inject([RezervasyonlarimService], (service: RezervasyonlarimService) => {
    expect(service).toBeTruthy();
  }));
});
