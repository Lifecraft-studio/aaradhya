import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss']
})
export class InvestorComponent {

 

  navItems = [
    { label: 'General Details', route: 'general-details' },
    { label: 'General Meeting Notice', route: 'general-meeting-notice' },
    { label: 'Policies and Codes of Conduct', route: 'policies-and-codes-of-conduct' },
    { label: 'Initial Public Offer', route: 'initial-public-offer' },
    { label: 'Annual Report', route: 'annual-report' },
    { label: 'Article of Association', route: 'article-of-association' },
    { label: 'Financial Information', route: 'financial-information' },
    { label: 'Newspaper Publication', route: 'newspaper-publication' },
    { label: 'Materiality Policy', route: 'materiality-policy' },
    { label: 'Composition Of Board And Committee', route: 'composition-of-board-and-committee' },
    {label: 'Details Of Key Managerial Personnel', route:'details-of-key-managerial-personnel'},
    {
      label: 'Corporate Announcement' , route:'corporate-announcement'
    },
    {
      label:'Forms' , route:'forms'
    },
    {
      label: 'Disclosure' , route:'disclosure'
    },
    {
      label:'Dividend' , route:'dividend'
    }
  ];

  selectedItem = this.navItems[0];


  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate(['investor', route]);
  }
}


