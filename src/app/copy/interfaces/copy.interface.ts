import {IsDeleted} from '../../shared/interfaces/is-deleted.interface';
import {ReferencedBook} from '../../world/interfaces/book.interface';
import {Pagination} from '../../shared/interfaces/pagination.interface';

export interface CopiesRootResponse {
  ok: boolean;
  copies: Copies;
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
  dateTimeCreated: Date;
  dateTimeUpdated: Date;
  __v: number;
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

