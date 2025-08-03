import { Component } from '@angular/core';

@Component({
  selector: 'app-price-band',
  templateUrl: './price-band.component.html',
  styleUrls: ['./price-band.component.scss']
})
export class PriceBandComponent {
cards = [
     { name: 'Pre-Issue cum Price Band Ad', url: '/assets/investors/price-band/pre-issue-cum-price-band-ad.pdf' },
  ]
}
