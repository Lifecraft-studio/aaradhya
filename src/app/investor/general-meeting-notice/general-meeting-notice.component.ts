import { Component } from '@angular/core';

@Component({
  selector: 'app-general-meeting-notice',
  templateUrl: './general-meeting-notice.component.html',
  styleUrls: ['./general-meeting-notice.component.scss']
})
export class GeneralMeetingNoticeComponent {
  cards = [
    { name: 'fgfgf', url: 'https://google.com' },
    { name: 'Card 2', url: 'https://facebook.com' },
    { name: 'Card 3', url: 'https://instagram.com' },
    { name: 'Card 4', url: 'https://example.com/4' }
  ];
}
