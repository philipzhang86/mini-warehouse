import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAsnItemComponent } from './create-asn-item.component';

describe('CreateAsnItemComponent', () => {
  let component: CreateAsnItemComponent;
  let fixture: ComponentFixture<CreateAsnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAsnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAsnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
