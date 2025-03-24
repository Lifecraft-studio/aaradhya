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
    { name: 'Determination of Materiality Disclosure of event or information',url: `${this.prefixUrl}det_of_material.pdf` }, 
    { name: 'Nomination and Remuneration Policy', url: `${this.prefixUrl}remuneration.pdf` },
    { name: 'Policy on Materiality of RPT',  url: `${this.prefixUrl}policy_material.pdf` },
    { name: 'Preservation of Documents Policy',  url: `${this.prefixUrl}doc_policy.pdf` },
    { name: 'Code of Practices and Procedures for Fair Disclosure',  url: `${this.prefixUrl}code_of_practices_and_procedures_for_fair_disclosure.pdf` },
    { name: 'CSR Policy',  url: `${this.prefixUrl}csr_policy.pdf` },
    { name: 'Policy on Board Diversity and Director Attributes',  url: `${this.prefixUrl}policy_on_board_diversity_and_director_attributes.pdf` },
    { name: 'Vigil Mechanism Policy',  url: `${this.prefixUrl}vigil_mechanism_policy.pdf` }
  ];
}
