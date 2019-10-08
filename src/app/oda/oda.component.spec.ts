/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OdaComponent } from './oda.component';

describe('OdaComponent', () => {
  let component: OdaComponent;
  let fixture: ComponentFixture<OdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
