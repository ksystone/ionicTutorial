import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRangePage } from './comp-range.page';

describe('CompRangePage', () => {
  let component: CompRangePage;
  let fixture: ComponentFixture<CompRangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompRangePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
