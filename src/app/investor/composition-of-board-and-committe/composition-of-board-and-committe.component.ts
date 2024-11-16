import { Component } from '@angular/core';

@Component({
  selector: 'app-composition-of-board-and-committe',
  templateUrl: './composition-of-board-and-committe.component.html',
  styleUrls: ['./composition-of-board-and-committe.component.scss']
})
export class CompositionOfBoardAndCommitteComponent {

  cards=[
    { name: 'List of Directors', url: '/assets/investors/bod/directors.pdf' }
  ]
}
