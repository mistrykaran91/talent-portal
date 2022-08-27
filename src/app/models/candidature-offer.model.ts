import { JoiningStatus } from '../enums/joining-status.enum';

export interface CandidatureOffer {
  extendedOn: Date;
  acceptedOn: Date;
  dateOfJoining: Date;
  joiningStatus: JoiningStatus;
  bv: JoiningStatus;
}
