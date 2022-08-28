import { CandidateStatus } from '../enums/candidate-status.enum';
import { CandidatureOffer } from './candidature-offer.model';
import { InterviewRound } from './interview-round.model';
import { PersonalInformation } from './personal-information.model';

export interface Candidature {
  id: number;
  personalInformation: PersonalInformation;
  candidateStatus: CandidateStatus;
  interviewRound: InterviewRound[];
  referenceCheck: {
    leads: number;
    captured: number;
  };
  comment: string;
  candidatureOffer: CandidatureOffer;
}
