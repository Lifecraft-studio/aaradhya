import { Component } from '@angular/core';

@Component({
  selector: 'app-annual-report',
  templateUrl: './annual-report.component.html',
  styleUrls: ['./annual-report.component.scss']
})
export class AnnualReportComponent {
  prefixUrl = '/assets/investors/annual_report/';
  cards=[
    { name: 'Annual Report 2019', url: `assets/investors/annual_reports/Annual_Report_2019.pdf`},
    { name: 'Annual Report 2020', url: `assets/investors/annual_reports/Annual_Report_2020.pdf` },
    { name: 'Annual Report 2021', url: `assets/investors/annual_reports/Annual_Report_2021.pdf` },
    { name: 'Annual Report 2022', url: `assets/investors/annual_reports/Annual_Report_2022.pdf`},
    { name: 'Annual Report 2023', url: `assets/investors/annual_reports/Annual_Report_2023.pdf`},
    { name: 'Annual Report 2024', url: `assets/investors/annual_reports/Annual_Report_2024.pdf`},
  ]

}
