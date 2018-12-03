import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSpinnerPage } from './comp-spinner.page';

describe('CompSpinnerPage', () => {
  let component: CompSpinnerPage;
  let fixture: ComponentFixture<CompSpinnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSpinnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSpinnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
