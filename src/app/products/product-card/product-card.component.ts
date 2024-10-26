import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() productDetails: any;
  productsPrefix = '/assets/products';
  selectedProduct = '';

  constructor(private modalService: NgbModal) { }

  openEnquiryModal(content: any, name: string) {
    this.selectedProduct = name;
    this.modalService.open(content, { centered: true });
  }
}
