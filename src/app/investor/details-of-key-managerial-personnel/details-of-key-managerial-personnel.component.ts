import { Component } from '@angular/core';

@Component({
  selector: 'app-details-of-key-managerial-personnel',
  templateUrl: './details-of-key-managerial-personnel.component.html',
  styleUrls: ['./details-of-key-managerial-personnel.component.scss']
})
export class DetailsOfKeyManagerialPersonnelComponent {

  cards=[
    { name: 'List of Key Managerial Personnel', url: '/assets/investors/kmp/list_of_KMP.pdf' }
  ]

}
