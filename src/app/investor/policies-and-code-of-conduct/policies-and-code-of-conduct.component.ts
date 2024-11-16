import { Component } from '@angular/core';

@Component({
  selector: 'app-policies-and-code-of-conduct',
  templateUrl: './policies-and-code-of-conduct.component.html',
  styleUrls: ['./policies-and-code-of-conduct.component.scss']
})
export class PoliciesAndCodeOfConductComponent {

  prefixUrl = '/assets/investors/policies/';
  cards = [
    { name: 'Archival Policy', url: `${this.prefixUrl}archival.pdf` },
    { name: 'Code of conduct',  url: `${this.prefixUrl}coc.pdf` },
    { name: 'Code of Practices and Procedures for Fair Disclosure',  url: `${this.prefixUrl}cop.pdf` },
    { name: 'Determination of Materiality Disclosure of event or information',url: `${this.prefixUrl}det_of_material.pdf` }, 
    { name: 'Nomination and Remuneration Policy', url: `${this.prefixUrl}remuneration.pdf` },
    { name: 'Policy on Materiality of RPT',  url: `${this.prefixUrl}policy_material.pdf` },
    { name: 'Preservation of Documents Policy',  url: `${this.prefixUrl}doc_policy.pdf` },
    ];
}
