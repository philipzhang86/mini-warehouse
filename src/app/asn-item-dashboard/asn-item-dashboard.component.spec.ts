import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnItemDashboardComponent } from './asn-item-dashboard.component';

describe('AsnItemDashboardComponent', () => {
  let component: AsnItemDashboardComponent;
  let fixture: ComponentFixture<AsnItemDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsnItemDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnItemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
