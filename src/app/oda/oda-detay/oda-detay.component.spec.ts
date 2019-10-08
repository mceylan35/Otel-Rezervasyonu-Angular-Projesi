/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OdaDetayComponent } from './oda-detay.component';

describe('OdaDetayComponent', () => {
  let component: OdaDetayComponent;
  let fixture: ComponentFixture<OdaDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdaDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdaDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
