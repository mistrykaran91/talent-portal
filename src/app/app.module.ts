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
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './db';
import { OfferExtendedComponent } from './offer-extended/offer-extended.component';
import { ProspectComponent } from './prospect-container/prospect/prospect.component';
import { ProspectContainerComponent } from './prospect-container/prospect-container.component';
import { InterviewRoundComponent } from './interview-round/interview-round.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PersonalInformationComponent,
    ProspectComponent,
    ProspectContainerComponent,
    OfferExtendedComponent,
    InterviewRoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(AppData, { passThruUnknownUrl: true, delay: 100 })
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
      .addSvgIcon('like', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/like.svg'))
      .addSvgIcon('dislike', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/dislike.svg'))
      .addSvgIcon('unselected', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/unselected.svg'))
      .addSvgIcon('more', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/more.svg'))
      .addSvgIcon('calendar', sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/calendar.svg'));
  }
}
