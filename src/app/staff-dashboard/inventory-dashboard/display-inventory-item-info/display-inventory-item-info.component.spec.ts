import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInventoryItemInfoComponent } from './display-inventory-item-info.component';

describe('DisplayInventoryItemInfoComponent', () => {
  let component: DisplayInventoryItemInfoComponent;
  let fixture: ComponentFixture<DisplayInventoryItemInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayInventoryItemInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInventoryItemInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
