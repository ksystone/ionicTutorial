import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDatetimePage } from './comp-datetime.page';

describe('CompDatetimePage', () => {
  let component: CompDatetimePage;
  let fixture: ComponentFixture<CompDatetimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDatetimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
