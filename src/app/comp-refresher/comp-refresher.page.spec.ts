import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRefresherPage } from './comp-refresher.page';

describe('CompRefresherPage', () => {
  let component: CompRefresherPage;
  let fixture: ComponentFixture<CompRefresherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompRefresherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
