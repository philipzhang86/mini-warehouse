import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProductListComponent } from './display-product-list.component';

describe('DisplayProductListComponent', () => {
  let component: DisplayProductListComponent;
  let fixture: ComponentFixture<DisplayProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
