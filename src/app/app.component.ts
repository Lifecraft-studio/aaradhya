import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aaradhya-disposal';
  showSubMenu = false;

  @ViewChild('navLink') navLink!: ElementRef;

  showHide(event: Event) {
    if (event.target as HTMLInputElement) {
      (this.navLink.nativeElement as HTMLElement).classList.toggle(
        'nav-active'
      );
    }
  }

  hideSideMenu(event: Event) {
    if ((event.target as HTMLElement).closest('.sub-menu')) {
      this.showHide(event);
    }
    if ((event.target as HTMLElement).closest('.menu')) return;
    this.showHide(event);
  }

  toggleSubMenu() {
    (this.navLink.nativeElement as HTMLElement).classList.toggle('show');
  }
}
