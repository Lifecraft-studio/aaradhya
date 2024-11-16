import { Component } from '@angular/core';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrls: ['./annual-report.component.scss']
})
export class AnnualReportComponent {
  prefixUrl = '/assets/investors/annual_report/';
  cards=[
    { name: 'Annual Report 2021-22', url: `${this.prefixUrl}21-22.pdf`},
    { name: 'Annual Report 2022-23', url: `${this.prefixUrl}22-23.pdf` },
    { name: 'Annual Report 2023-24',url: `${this.prefixUrl}23-24.pdf` },
  ]

}
