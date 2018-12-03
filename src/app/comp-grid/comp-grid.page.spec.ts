import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGridPage } from './comp-grid.page';

describe('CompGridPage', () => {
  let component: CompGridPage;
  let fixture: ComponentFixture<CompGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
