import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnDashboardComponent } from './asn-dashboard.component';

describe('AsnDashboardComponent', () => {
  let component: AsnDashboardComponent;
  let fixture: ComponentFixture<AsnDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsnDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
