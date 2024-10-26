import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { indianClients, internationalClients } from './clients';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements AfterViewInit {

  counter = 1;
  @ViewChildren('slide') slides!: QueryList<ElementRef>;
  timer: any;
  indianClients = indianClients;
  internationalClients = internationalClients;

  ngAfterViewInit(): void {
    let timer = setInterval(() => {
      this.autoSlide();
    }, 1500);
    this.slidefun(this.counter);
  }

  autoSlide() {
    this.counter += 1;
    this.slidefun(this.counter);
  }

  slidefun(n: number) {
    let i;
    for (i = 0; i < this.slides.length; i++) {
      (this.slides.get(i) as ElementRef).nativeElement.style.display = 'none';
    }
    if (n > this.slides.length) {
      this.counter = 1;
    }
    if (n < 1) {
      this.counter = this.slides.length;
    }
    (
      this.slides.get(this.counter - 1) as ElementRef
    ).nativeElement.style.display = 'block';
  }
}
