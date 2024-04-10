import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayClientsListComponent } from './display-clients-list.component';

describe('DisplayClientsListComponent', () => {
  let component: DisplayClientsListComponent;
  let fixture: ComponentFixture<DisplayClientsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayClientsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
