import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentScheduleTableComponent } from './payment-schedule-table.component';

describe('PaymentScheduleTableComponent', () => {
  let component: PaymentScheduleTableComponent;
  let fixture: ComponentFixture<PaymentScheduleTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentScheduleTableComponent]
    });
    fixture = TestBed.createComponent(PaymentScheduleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
