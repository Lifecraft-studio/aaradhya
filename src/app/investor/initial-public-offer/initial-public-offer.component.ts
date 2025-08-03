import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-public-offer',
  templateUrl: './initial-public-offer.component.html',
  styleUrls: ['./initial-public-offer.component.scss']
})
export class InitialPublicOfferComponent {
  cards = [
     { name: 'DRHP', url: '/assets/investors/ipo/DRHP.pdf' },
     { name: 'Addendum to DRHP', url: '/assets/investors/ipo/Addendum_to_DRHP.pdf' },
     { name: 'Red Herring Prospectus', url: '/assets/investors/ipo/red_herring_prospectus.pdf' }
  ]

}
