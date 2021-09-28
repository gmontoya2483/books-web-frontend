import {ShortUser} from '../../users/interfaces/user.interface';

export interface LoanHistoryRootResponse {
  ok: boolean;
  loanHistory: LoanHistory[];
}

export interface LoanHistory {
  status: string;
  dateTimeRequested: Date;
  dateTimeAccepted: Date;
  dateTimeRejected: null;
  dateTimeBorrowed: Date;
  dateTimeClaimed: null;
  dateTimeReturned: Date;
  dateTimeReturnedConfirmation: Date;
  _id: string;
  user: ShortUser;
  copyId: string;
  ownerId: string;
  dateTimeCreated: Date;
  dateTimeUpdated: Date;
  __v: number;
}

