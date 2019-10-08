/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OdaAddComponent } from './oda-add.component';

describe('OdaAddComponent', () => {
  let component: OdaAddComponent;
  let fixture: ComponentFixture<OdaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
