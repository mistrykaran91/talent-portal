import { CandidateStatus } from '../enums/candidate-status.enum';

export interface InterviewRound {
  roundNumber: number;
  status: CandidateStatus;
  scheduledOn: Date;
}
