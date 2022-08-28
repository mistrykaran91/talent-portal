import { Component, Input } from '@angular/core';
import { PersonalInformation } from '../models/personal-information.model';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent {
  @Input()
  personalInformation: PersonalInformation;

  get candidateName() {
    return this.personalInformation
      ? `${this.personalInformation.firstName} ${this.personalInformation.lastName}`
      : null;
  }
}
