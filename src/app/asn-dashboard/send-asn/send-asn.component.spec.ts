import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAsnComponent } from './send-asn.component';

describe('SendAsnComponent', () => {
  let component: SendAsnComponent;
  let fixture: ComponentFixture<SendAsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendAsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
