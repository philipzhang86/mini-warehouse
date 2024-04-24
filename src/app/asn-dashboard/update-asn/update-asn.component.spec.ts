import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAsnComponent } from './update-asn.component';

describe('UpdateAsnComponent', () => {
  let component: UpdateAsnComponent;
  let fixture: ComponentFixture<UpdateAsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
