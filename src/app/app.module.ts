import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { InfraComponent } from './infra/infra.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products/:productName',
    component: ProductsComponent,
  },
  {
    path: 'infrastructure',
    component: InfraComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    ProductsComponent,
    InfraComponent,
    FooterComponent,
    ProductCardComponent,
    EnquiryFormComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule, NgbModalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
