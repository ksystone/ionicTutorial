import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompTabsPage } from './comp-tabs.page';

describe('CompTabsPage', () => {
  let component: CompTabsPage;
  let fixture: ComponentFixture<CompTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
