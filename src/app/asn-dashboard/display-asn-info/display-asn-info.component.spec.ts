import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAsnInfoComponent } from './display-asn-info.component';

describe('DisplayAsnInfoComponent', () => {
  let component: DisplayAsnInfoComponent;
  let fixture: ComponentFixture<DisplayAsnInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAsnInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAsnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
