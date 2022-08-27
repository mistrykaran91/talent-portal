import { CandidateStatus } from '../enums/candidate-status.enum';

export const InterviewRoundIconTextMap: Map<CandidateStatus, { icon: string; label: string }> = new Map([
  [CandidateStatus.SELECTED, { icon: 'like', label: 'Hire' }],
  [CandidateStatus.REJECTED, { icon: 'dislike', label: 'No Hire' }],
  [CandidateStatus.AWAITING_FEEDBACK, { icon: null, label: 'Awaiting Feedback' }],
  [CandidateStatus.ON_HOLD, { icon: 'unselected', label: 'Undecided' }]
]);
