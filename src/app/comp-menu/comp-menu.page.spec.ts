import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMenuPage } from './comp-menu.page';

describe('CompMenuPage', () => {
  let component: CompMenuPage;
  let fixture: ComponentFixture<CompMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
