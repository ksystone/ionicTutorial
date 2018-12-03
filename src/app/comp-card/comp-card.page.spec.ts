import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCardPage } from './comp-card.page';

describe('CompCardPage', () => {
  let component: CompCardPage;
  let fixture: ComponentFixture<CompCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
