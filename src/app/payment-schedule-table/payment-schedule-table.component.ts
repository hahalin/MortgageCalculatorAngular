import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-schedule-table',
  templateUrl: './payment-schedule-table.component.html',
  styleUrls: ['./payment-schedule-table.component.css']
})
export class PaymentScheduleTableComponent {
  @Input() payments: any[] = [];

  
  formatPayment(amount: number): string {
    return new Intl.NumberFormat('zh-TW', {
      style: 'decimal',
      maximumFractionDigits: 2
    }).format(amount);
  }

} 

