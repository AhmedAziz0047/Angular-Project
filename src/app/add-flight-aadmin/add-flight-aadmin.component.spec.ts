import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightAadminComponent } from './add-flight-aadmin.component';

describe('AddFlightAadminComponent', () => {
  let component: AddFlightAadminComponent;
  let fixture: ComponentFixture<AddFlightAadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightAadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightAadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
