import { Component } from '@angular/core';
import { CandidatureService } from '../services/candidature.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  allCandidature$ = this.candidatureService.allCandidature$;

  constructor(private candidatureService: CandidatureService) {}
}
