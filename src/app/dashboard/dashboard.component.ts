import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { CandidateStatus } from '../enums/candidate-status.enum';
import { CandidatureService } from '../services/candidature.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  allCandidature$ = this.candidatureService.allCandidature$;

  offerExtendedCandidature$ = this.allCandidature$.pipe(
    map(allCandidature => allCandidature.filter(c => c.candidateStatus === CandidateStatus.HIRED))
  );

  prospectCandidature$ = this.allCandidature$.pipe(
    map(allCandidature => allCandidature.filter(c => c.candidateStatus === CandidateStatus.IN_PROGRESS))
  );

  constructor(private candidatureService: CandidatureService) {}
}
