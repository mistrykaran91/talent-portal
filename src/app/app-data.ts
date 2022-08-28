import { CandidateStatus } from './enums/candidate-status.enum';
import { JoiningStatus } from './enums/joining-status.enum';
import { Candidature } from './models/candidature.model';

export class CandidatureData {
  static candidates: Candidature[] = [
    {
      id: 1,
      personalInformation: {
        firstName: 'Anil',
        lastName: 'Kapoor',
        designation: 'Director, Piramal Enterprises',
        location: 'Kolkatta'
      },
      candidateStatus: CandidateStatus.HIRED,
      candidatureOffer: {
        extendedOn: new Date(2020, 8, 21),
        acceptedOn: new Date(2020, 8, 23),
        dateOfJoining: new Date(2020, 10, 1),
        joiningStatus: JoiningStatus.GOOD,
        bv: JoiningStatus.GOOD
      },
      comment: `Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame`,
      interviewRound: null,
      referenceCheck: null
    },

    {
      id: 2,
      personalInformation: {
        firstName: 'Ankit',
        lastName: 'Joshi',
        designation: 'Director, Piramal Enterprises',
        location: 'Mumbai'
      },
      candidateStatus: CandidateStatus.IN_PROGRESS,
      candidatureOffer: null,
      comment: `Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame`,
      interviewRound: [
        {
          roundNumber: 1,
          status: CandidateStatus.SELECTED,
          scheduledOn: new Date(2020, 8, 1)
        },
        {
          roundNumber: 2,
          status: CandidateStatus.AWAITING_FEEDBACK,
          scheduledOn: null
        },
        {
          roundNumber: 3,
          status: CandidateStatus.ON_HOLD,
          scheduledOn: new Date(2018, 6, 1)
        },
        {
          roundNumber: 4,
          status: null,
          scheduledOn: new Date(2018, 6, 1)
        }
      ],
      referenceCheck: {
        leads: 7,
        captured: 3
      }
    },

    {
      id: 3,
      personalInformation: {
        firstName: 'Kunjan',
        lastName: 'Kumar',
        designation: 'Director, Housing and Development…',
        location: 'New Delhi'
      },
      candidateStatus: CandidateStatus.IN_PROGRESS,
      candidatureOffer: null,
      comment: `No Comment`,
      interviewRound: [
        {
          roundNumber: 1,
          status: CandidateStatus.SELECTED,
          scheduledOn: new Date(2020, 8, 1)
        },
        {
          roundNumber: 2,
          status: CandidateStatus.AWAITING_FEEDBACK,
          scheduledOn: null
        },
        {
          roundNumber: 3,
          status: CandidateStatus.REJECTED,
          scheduledOn: new Date(2020, 8, 1)
        },
        {
          roundNumber: 4,
          status: null,
          scheduledOn: null
        }
      ],
      referenceCheck: {
        leads: 7,
        captured: 3
      }
    },

    {
      id: 4,
      personalInformation: {
        firstName: 'Kunal',
        lastName: 'Kamra',
        designation: 'Director, Piramal Enterprises',
        location: 'Mumbai'
      },
      candidateStatus: CandidateStatus.IN_PROGRESS,
      candidatureOffer: null,
      comment: `Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame`,
      interviewRound: [
        {
          roundNumber: 1,
          status: CandidateStatus.SELECTED,
          scheduledOn: new Date(2020, 8, 1)
        },
        {
          roundNumber: 2,
          status: CandidateStatus.AWAITING_FEEDBACK,
          scheduledOn: null
        },
        {
          roundNumber: 3,
          status: CandidateStatus.REJECTED,
          scheduledOn: new Date(2020, 8, 1)
        },
        {
          roundNumber: 4,
          status: null,
          scheduledOn: new Date(2020, 8, 1)
        }
      ],
      referenceCheck: {
        leads: 7,
        captured: 3
      }
    },

    {
      id: 5,
      personalInformation: {
        firstName: 'Ankit',
        lastName: 'Joshi',
        designation: 'Director, Piramal Enterprises',
        location: 'Mumbai'
      },
      candidateStatus: CandidateStatus.REJECTED,
      candidatureOffer: null,
      comment: `Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame`,
      interviewRound: [
        {
          roundNumber: 1,
          status: CandidateStatus.REJECTED,
          scheduledOn: new Date(2020, 8, 1)
        },
        {
          roundNumber: 2,
          status: CandidateStatus.REJECTED,
          scheduledOn: null
        },
        {
          roundNumber: 3,
          status: null,
          scheduledOn: new Date(2020, 8, 1)
        },
        {
          roundNumber: 4,
          status: null,
          scheduledOn: new Date(2020, 8, 1)
        }
      ],
      referenceCheck: {
        leads: 7,
        captured: 3
      }
    }
  ];
}
