import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInventoryItemsListComponent } from './display-inventory-items-list.component';

describe('DisplayInventoryItemsListComponent', () => {
  let component: DisplayInventoryItemsListComponent;
  let fixture: ComponentFixture<DisplayInventoryItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayInventoryItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInventoryItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
