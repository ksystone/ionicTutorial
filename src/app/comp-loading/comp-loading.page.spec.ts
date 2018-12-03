import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLoadingPage } from './comp-loading.page';

describe('CompLoadingPage', () => {
  let component: CompLoadingPage;
  let fixture: ComponentFixture<CompLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompLoadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
