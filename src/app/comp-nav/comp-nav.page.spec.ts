import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNavPage } from './comp-nav.page';

describe('CompNavPage', () => {
  let component: CompNavPage;
  let fixture: ComponentFixture<CompNavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompNavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
