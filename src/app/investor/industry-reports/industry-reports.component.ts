import { Component } from '@angular/core';

@Component({
  selector: 'app-industry-reports',
  templateUrl: './industry-reports.component.html',
  styleUrls: ['./industry-reports.component.scss']
})
export class IndustryReportsComponent {
cards = [
     { name: 'Industry Report 21 July 2025', url: '/assets/investors/industry-reports/industry-report-21-july-2025.pdf' },
     { name: 'Industry Report November 29, 2024', url: '/assets/investors/industry-reports/industry-report-november-29-2024.pdf' },
  ]
}
