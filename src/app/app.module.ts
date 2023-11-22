import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';
import { PaymentScheduleTableComponent } from './payment-schedule-table/payment-schedule-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MortgageCalculatorComponent,
    PaymentScheduleTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
