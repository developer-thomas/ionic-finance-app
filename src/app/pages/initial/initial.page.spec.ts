import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InitialPage } from './initial.page';

describe('InitialPage', () => {
  let component: InitialPage;
  let fixture: ComponentFixture<InitialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
