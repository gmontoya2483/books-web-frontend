import {ShortUser} from '../../users/interfaces/user.interface';
import {Copy} from './copy.interface';

export interface LoanHistoryRootResponse {
  ok: boolean;
  loanHistory: LoanHistory[];
}

export interface MeLoanHistoryRootResponse {
  ok: boolean;
  loanHistory: MeLoanHistory[];
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

export interface MeLoanHistory {
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
  copyId: Copy;
  ownerId: string;
  dateTimeCreated: Date;
  dateTimeUpdated: Date;
  __v: number;
}

