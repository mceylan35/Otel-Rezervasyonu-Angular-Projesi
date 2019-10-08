/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OdaOperationComponent } from './oda-operation.component';

describe('OdaOperationComponent', () => {
  let component: OdaOperationComponent;
  let fixture: ComponentFixture<OdaOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdaOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdaOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
