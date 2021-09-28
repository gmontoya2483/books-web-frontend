import {IsDeleted} from '../../shared/interfaces/is-deleted.interface';
import {Book, ReferencedBook} from '../../world/interfaces/book.interface';
import {Pagination} from '../../shared/interfaces/pagination.interface';
import {ShortUser} from '../../users/interfaces/user.interface';

export interface CopiesRootResponse {
  ok: boolean;
  copies: Copies;
  mensaje?: string | undefined;
}

export interface CopyRootResponse {
  ok: boolean;
  copy: Copy;
  mensaje?: string | undefined;
}

export interface Copies {
  pagination: Pagination;
  copies: Copy[];
}

export interface Copy {
  isDeleted: IsDeleted;
  isPublic: boolean;
  _id: string;
  book: ReferencedBook;
  owner: Owner;
  currentLoan?: CurrentLoan | null | undefined;
  dateTimeCreated: Date;
  dateTimeUpdated: Date;
  isOwnerFollowedByMe?: boolean;
  __v: number;
}


export enum currentLoanStatusEnum  {
  requested = 'Requerido',
  cancelled = 'Cancelado',
  accepted = 'Aceptado',
  rejected =  'Rechazado',
  borrowed = 'Prestado',
  claimed = 'Reclamado',
  returned = 'Devuelto',
  returnedConfirmation =  'Confirmado'
}

export interface CurrentLoan {
  user: ShortUser;
  status: currentLoanStatusEnum;
  dateTimeRequested: Date | null;
  dateTimeAccepted: Date | null;
  dateTimeRejected: Date | null;
  dateTimeBorrowed: Date | null;
  dateTimeClaimed: Date | null;
  dateTimeReturned: Date | null;
  dateTimeReturnedConfirmation: Date | null;
}

export interface ShortCommunity {
  _id: string;
  name: string;
}


export interface Owner {
  comunidad: ShortCommunity;
  _id: string;
  email: string;
  nombre: string;
  apellido: string;
}

