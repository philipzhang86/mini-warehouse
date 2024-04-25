import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAsnComponent } from './delete-asn.component';

describe('DeleteAsnComponent', () => {
  let component: DeleteAsnComponent;
  let fixture: ComponentFixture<DeleteAsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
