import { Component, Input } from '@angular/core';
import { Candidature } from '../models/candidature.model';

@Component({
  selector: 'app-offer-extended',
  templateUrl: './offer-extended.component.html',
  styleUrls: ['./offer-extended.component.scss']
})
export class OfferExtendedComponent {
  @Input()
  candidatures: Candidature[];
  
}
