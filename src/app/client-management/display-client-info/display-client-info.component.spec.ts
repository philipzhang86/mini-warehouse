import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayClientInfoComponent } from './display-client-info.component';

describe('DisplayClientInfoComponent', () => {
  let component: DisplayClientInfoComponent;
  let fixture: ComponentFixture<DisplayClientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayClientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
