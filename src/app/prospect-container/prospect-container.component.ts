import { Component, Input } from '@angular/core';
import { Candidature } from '../models/candidature.model';

@Component({
  selector: 'app-prospect-container',
  templateUrl: './prospect-container.component.html',
  styleUrls: ['./prospect-container.component.scss']
})
export class ProspectContainerComponent {
  @Input()
  candidatures: Candidature[];
}
