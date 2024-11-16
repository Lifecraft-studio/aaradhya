import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  
  prefixUrl = '/assets/investors/forms/';
  cards = [
    { name: 'Form ISR-1', url: `${this.prefixUrl}ISR-1.pdf` },
    { name: 'Form ISR-2',  url: `${this.prefixUrl}ISR-2.pdf` },
    { name: 'Form ISR-3',  url: `${this.prefixUrl}ISR-3.pdf` },
    { name: 'SEBI Circular for Investor Service and Simplied Norms',url: `${this.prefixUrl}sebi_circular.pdf` }, 
    { name: 'Self Declaration', url: `${this.prefixUrl}self_declaration.pdf` },
    { name: 'Form SH-13',  url: `${this.prefixUrl}SH-13.pdf` },
    { name: 'Form SH-14',  url: `${this.prefixUrl}SH-14.pdf` },
    ];
}
