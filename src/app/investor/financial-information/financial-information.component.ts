import { Component } from '@angular/core';

@Component({
  selector: 'app-financial-information',
  templateUrl: './financial-information.component.html',
  styleUrls: ['./financial-information.component.scss']
})
export class FinancialInformationComponent {
  prefixUrl = '/assets/investors/financial_stmt/';
  cards=[
    { name: 'Financial Statement 2021-22', url: `${this.prefixUrl}21-22.pdf`},
    { name: 'Financial Statement 2022-23', url: `${this.prefixUrl}22-23.pdf` },
    { name: 'Financial Statement 2023-24',url: `${this.prefixUrl}23-24.pdf` },
  ]
}
