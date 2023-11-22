import { Component } from '@angular/core';
import { MortgageCalculationsService } from '../mortgage-calculations.service';
import { PaymentScheduleTableComponent } from '../payment-schedule-table/payment-schedule-table.component';

@Component({
  selector: 'app-mortgage-calculator',
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {
  loanAmount:number= 1000000;
  years:number = 20;
  interestRate:number = 1.565;
  repaymentType:string = 'interest';
  payments: any[] = [];

  constructor(private mortgageCalcService: MortgageCalculationsService) {


  }

  formatPayment(amount: number): string {
    return new Intl.NumberFormat('zh-TW', {
      style: 'decimal',
      maximumFractionDigits: 2
    }).format(amount);
  }
  

  handleSubmit() {
    if (this.repaymentType === 'interest') {
      const pmt = this.mortgageCalcService.calculatePMT(this.loanAmount, this.years, this.interestRate);
      this.payments = [{ totalPayment: pmt }];
    } else {
      this.payments = this.mortgageCalcService.calculateEqualPrincipal(this.loanAmount, this.years, this.interestRate);
    }
  }

}
