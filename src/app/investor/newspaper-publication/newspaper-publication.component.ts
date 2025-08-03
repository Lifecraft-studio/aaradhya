import { Component } from '@angular/core';

@Component({
  selector: 'app-newspaper-publication',
  templateUrl: './newspaper-publication.component.html',
  styleUrls: ['./newspaper-publication.component.scss']
})
export class NewspaperPublicationComponent {
cards = [
     
     { name: 'Financial Express', url: '/assets/investors/newspaper-publications/financial-express.pdf' },
     { name: 'Jansatta page No-1', url: '/assets/investors/newspaper-publications/jansatta-page-no-1.pdf' },
     { name: 'Jansatta page No-2', url: '/assets/investors/newspaper-publications/jansatta-page-no-2.pdf' },
     { name: 'Vinay Ujjala', url: '/assets/investors/newspaper-publications/vinay-ujjala.pdf' },
     { name: 'Business remedies', url: '/assets/investors/newspaper-publications/business-remedies.PDF' },
  ]
}
