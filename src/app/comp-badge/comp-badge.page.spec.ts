import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBadgePage } from './comp-badge.page';

describe('CompBadgePage', () => {
  let component: CompBadgePage;
  let fixture: ComponentFixture<CompBadgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompBadgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompBadgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
