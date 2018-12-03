import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSlidesPage } from './comp-slides.page';

describe('CompSlidesPage', () => {
  let component: CompSlidesPage;
  let fixture: ComponentFixture<CompSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSlidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
