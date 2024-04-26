import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAsnItemComponent } from './delete-asn-item.component';

describe('DeleteAsnItemComponent', () => {
  let component: DeleteAsnItemComponent;
  let fixture: ComponentFixture<DeleteAsnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAsnItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAsnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
