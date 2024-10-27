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
import { InvestorComponent } from './investor/investor.component';
import { GeneralDetailsComponent } from './general-details/general-details.component';
import { GeneralMeetingNoticeComponent } from './general-meeting-notice/general-meeting-notice.component';
import { PoliciesAndCodeOfConductComponent } from './policies-and-code-of-conduct/policies-and-code-of-conduct.component';
import { InitialPublicOfferComponent } from './initial-public-offer/initial-public-offer.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { ArticleOfAssociationComponent } from './article-of-association/article-of-association.component';
import { FinancialInformationComponent } from './financial-information/financial-information.component';
import { NewspaperPublicationComponent } from './newspaper-publication/newspaper-publication.component';
import { MaterialityPolicyComponent } from './materiality-policy/materiality-policy.component';
import { CompositionOfBoardAndCommitteComponent } from './composition-of-board-and-committe/composition-of-board-and-committe.component';
import { DetailsOfKeyManagerialPersonnelComponent } from './details-of-key-managerial-personnel/details-of-key-managerial-personnel.component';
import { CorporateAnnouncementComponent } from './corporate-announcement/corporate-announcement.component';
import { FormsComponent } from './forms/forms.component';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { DividendComponent } from './dividend/dividend.component';
import { CardComponent } from './card/card.component';

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
  {
    path:'investor',
    component:InvestorComponent,
    children:[
      { path: 'general-details', component: GeneralDetailsComponent },
      { path: 'general-meeting-notice', component: GeneralMeetingNoticeComponent },
      { path: 'policies-and-codes-of-conduct', component: PoliciesAndCodeOfConductComponent },
      { path: 'initial-public-offer', component: InitialPublicOfferComponent },
      { path: 'annual-report', component: AnnualReportComponent },
      { path: 'article-of-association', component: ArticleOfAssociationComponent },
      { path: 'financial-information', component: FinancialInformationComponent },
      { path: 'newspaper-publication', component: NewspaperPublicationComponent },
      { path: 'materiality-policy', component: MaterialityPolicyComponent },
      { path: 'composition-of-board-and-committee', component: CompositionOfBoardAndCommitteComponent },
      {path: 'details-of-key-managerial-personnel', component:DetailsOfKeyManagerialPersonnelComponent},
      {path: 'corporate-announcement', component:CorporateAnnouncementComponent},
      {path:'forms', component:FormsComponent},
      {path:'disclosure', component:DisclosureComponent},
      {path:'dividend', component:DividendComponent}
      
    ]
     
  }
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
    InvestorComponent,
    GeneralDetailsComponent,
    GeneralMeetingNoticeComponent,
    PoliciesAndCodeOfConductComponent,
    InitialPublicOfferComponent,
    AnnualReportComponent,
    ArticleOfAssociationComponent,
    FinancialInformationComponent,
    NewspaperPublicationComponent,
    MaterialityPolicyComponent,
    CompositionOfBoardAndCommitteComponent,
    DetailsOfKeyManagerialPersonnelComponent,
    CorporateAnnouncementComponent,
    FormsComponent,
    DisclosureComponent,
    DividendComponent,
    CardComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), ReactiveFormsModule, NgbModalModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
