import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReservationAadminComponent } from './add-reservation-aadmin.component';

describe('AddReservationAadminComponent', () => {
  let component: AddReservationAadminComponent;
  let fixture: ComponentFixture<AddReservationAadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReservationAadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReservationAadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
