import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductInfoComponent } from './display-product-info.component';

describe('DisplayProductInfoComponent', () => {
  let component: DisplayProductInfoComponent;
  let fixture: ComponentFixture<DisplayProductInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProductInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
