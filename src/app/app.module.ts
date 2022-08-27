import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { MatIconRegistry } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProspectComponent } from './prospect/prospect.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './db';
import { OfferExtendedComponent } from './offer-extended/offer-extended.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PersonalInformationComponent,
    ProspectComponent,
    OfferExtendedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(AppData, { passThruUnknownUrl: true, delay: 500 })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon('back', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/back.svg'))
      .addSvgIcon('average', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/average.svg'))
      .addSvgIcon('good', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/good.svg'))
      .addSvgIcon('rework', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/rework.svg'))
      .addSvgIcon('dropdown', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dropdown.svg'))
      .addSvgIcon('calendar', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dropdown.svg'));
  }
}
