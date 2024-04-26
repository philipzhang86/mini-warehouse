import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAsnItemComponent } from './update-asn-item.component';

describe('UpdateAsnItemComponent', () => {
  let component: UpdateAsnItemComponent;
  let fixture: ComponentFixture<UpdateAsnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAsnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAsnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
