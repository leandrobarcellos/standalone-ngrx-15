/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FunOfheuristicComponent } from './fun-ofheuristic.component';

describe('FunOfheuristicComponent', () => {
  let component: FunOfheuristicComponent;
  let fixture: ComponentFixture<FunOfheuristicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunOfheuristicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunOfheuristicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
