import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompModalPage } from './comp-modal.page';

describe('CompModalPage', () => {
  let component: CompModalPage;
  let fixture: ComponentFixture<CompModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
