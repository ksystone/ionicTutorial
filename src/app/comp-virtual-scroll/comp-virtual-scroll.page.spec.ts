import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompVirtualScrollPage } from './comp-virtual-scroll.page';

describe('CompVirtualScrollPage', () => {
  let component: CompVirtualScrollPage;
  let fixture: ComponentFixture<CompVirtualScrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompVirtualScrollPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompVirtualScrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
