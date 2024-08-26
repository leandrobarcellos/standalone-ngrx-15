/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoUserComponent } from './fo-user.component';

describe('FoUserComponent', () => {
  let component: FoUserComponent;
  let fixture: ComponentFixture<FoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
