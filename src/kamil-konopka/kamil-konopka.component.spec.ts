/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KamilKonopkaComponent } from './kamil-konopka.component';

describe('KamilKonopkaComponent', () => {
  let component: KamilKonopkaComponent;
  let fixture: ComponentFixture<KamilKonopkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamilKonopkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamilKonopkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
