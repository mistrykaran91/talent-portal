import { Component, Input } from '@angular/core';
import { Candidature } from 'src/app/models/candidature.model';

@Component({
  selector: 'app-prospect',
  templateUrl: './prospect.component.html',
  styleUrls: ['./prospect.component.scss']
})
export class ProspectComponent {
  @Input()
  candidature: Candidature;
}
