import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsnOperationsCenterComponent } from './asn-operations-center.component';

describe('AsnOperationsCenterComponent', () => {
  let component: AsnOperationsCenterComponent;
  let fixture: ComponentFixture<AsnOperationsCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsnOperationsCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsnOperationsCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
