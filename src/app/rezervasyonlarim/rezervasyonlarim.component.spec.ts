/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RezervasyonlarimComponent } from './rezervasyonlarim.component';

describe('RezervasyonlarimComponent', () => {
  let component: RezervasyonlarimComponent;
  let fixture: ComponentFixture<RezervasyonlarimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervasyonlarimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervasyonlarimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
