import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAsnListComponent } from './display-asn-list.component';

describe('DisplayAsnListComponent', () => {
  let component: DisplayAsnListComponent;
  let fixture: ComponentFixture<DisplayAsnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAsnListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAsnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
