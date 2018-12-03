import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSelectPage } from './comp-select.page';

describe('CompSelectPage', () => {
  let component: CompSelectPage;
  let fixture: ComponentFixture<CompSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSelectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
