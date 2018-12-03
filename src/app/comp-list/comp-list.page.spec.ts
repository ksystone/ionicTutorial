import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompListPage } from './comp-list.page';

describe('CompListPage', () => {
  let component: CompListPage;
  let fixture: ComponentFixture<CompListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
