import { Component } from '@angular/core';

@Component({
  selector: 'app-composition-of-board-and-committe',
  templateUrl: './composition-of-board-and-committe.component.html',
  styleUrls: ['./composition-of-board-and-committe.component.scss']
})
export class CompositionOfBoardAndCommitteComponent {

  cards=[
    { name: 'List of Directors', url: '/assets/investors/bod/list_of_directors.pdf' },
    { name: 'Audit Committee', url: '/assets/investors/bod/audit_committee.pdf' },
    { name: 'CSR Committee', url: '/assets/investors/bod/CSR_committee.pdf' },
    { name: 'Nomination and Remuneration Committee', url: '/assets/investors/bod/nomination_and_remuneration_committee.pdf' },
    { name: 'Stakeholders Relationship Committee', url: '/assets/investors/bod/stakeholders_relationship_committee.pdf' }
  ]
}
