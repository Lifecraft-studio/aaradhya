import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit {

  @Input() productName = '';
  @Input() styleClass = '';
  contactForm!: FormGroup;
  request: { showWaitMsg: boolean, msg: any[] } = {
    showWaitMsg: false,
    msg: []
  }

  constructor(private service: AppService) { }
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      product: new FormControl({ value: this.productName, disabled: !!this.productName }, Validators.required),
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      contact: new FormControl('', [Validators.required, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
      country: new FormControl('India', [Validators.required, Validators.pattern(/^[A-Za-z\s'-]+$/)]),
      message: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s._-]+$/)])
    })
  }

  enquire() {
    this.request = {
      showWaitMsg: false,
      msg: []
    }
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    };
    this.request.showWaitMsg = true;
    const formData = new FormData();
    const contactDetails = this.contactForm.value;
    formData.append('name', contactDetails['name']);
    formData.append('email', contactDetails['email']);
    formData.append('contact', contactDetails['contact']);
    formData.append('message', contactDetails['message']);
    formData.append('product', contactDetails['product']);
    formData.append('country', contactDetails['country']);
    this.service.sendContactDetails(formData).subscribe({
      next: (resp: any) => {
        this.request.showWaitMsg = false;
        if (resp.status === 'success') {
          this.request.msg = [{
            severity: 'success',
            summary: 'Your message has been sent successfully!! Our team will get back to you'
          }];
        } else {
          this.request.msg = [{
            severity: 'danger',
            summary: 'Your message could not be sent, please try later with valid details'
          }];
        }
      },
      error: error => {
        this.request.showWaitMsg = false;
        this.request.msg = [{
          severity: 'danger',
          summary: 'Your message could not be sent, please try later with valid details'
        }];
      }
    })

  }
}
