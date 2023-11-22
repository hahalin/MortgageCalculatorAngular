import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculationsService {

  constructor() { }

  calculatePMT(loanAmount: number, years: number, interestRate: number): number {
    const principal = loanAmount;
    const calculateRate = interestRate / 100 / 12;
    const nper = years * 12;
    const pvif = Math.pow(1 + calculateRate, nper);
    return (calculateRate / (pvif - 1)) * (principal * pvif);
  }

  calculateEqualPrincipal(loanAmount: number, years: number, interestRate: number): any[] {
    const monthlyPrincipal = loanAmount / (years * 12);
    let balance = loanAmount;
    let paymentSchedule = [];

    for (let month = 1; month <= years * 12; month++) {
        let monthlyInterest = balance * (interestRate / 100 / 12);
        let totalPayment = monthlyPrincipal + monthlyInterest;
        paymentSchedule.push({ month, principal: monthlyPrincipal, interest: monthlyInterest, totalPayment });
        balance -= monthlyPrincipal;
    }

    return paymentSchedule;

  }

}
