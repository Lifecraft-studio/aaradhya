import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  sendContactDetails(contactDetails: any) {
    return this.http.post('/php/sendMail.php', contactDetails);
  }
}
