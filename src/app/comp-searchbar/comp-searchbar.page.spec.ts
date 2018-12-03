import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSearchbarPage } from './comp-searchbar.page';

describe('CompSearchbarPage', () => {
  let component: CompSearchbarPage;
  let fixture: ComponentFixture<CompSearchbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSearchbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSearchbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
