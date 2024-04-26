import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAsnItemListComponent } from './display-asn-item-list.component';

describe('DisplayAsnItemListComponent', () => {
  let component: DisplayAsnItemListComponent;
  let fixture: ComponentFixture<DisplayAsnItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayAsnItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAsnItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
