import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  cards = [
    { name: 'fgfgf', url: 'https://google.com' },
    { name: 'Card 2', url: 'https://facebook.com' },
    { name: 'Card 3', url: 'https://instagram.com' },
    { name: 'Card 4', url: 'https://example.com/4' },
    
      { name: 'fgfgf', url: 'https://google.com' },
      { name: 'Card 2', url: 'https://facebook.com' },
      { name: 'Card 3', url: 'https://instagram.com' }
  ]
}
