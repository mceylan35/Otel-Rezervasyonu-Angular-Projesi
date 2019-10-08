/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OtelComponent } from './otel.component';

describe('OtelComponent', () => {
  let component: OtelComponent;
  let fixture: ComponentFixture<OtelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
