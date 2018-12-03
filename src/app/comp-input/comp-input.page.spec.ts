import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInputPage } from './comp-input.page';

describe('CompInputPage', () => {
  let component: CompInputPage;
  let fixture: ComponentFixture<CompInputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompInputPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
