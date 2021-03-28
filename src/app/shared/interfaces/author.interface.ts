import {Pagination} from './pagination.interface';

export interface AuthorRootResponse {
  ok: boolean;
  authors: Authors;
}

export interface Authors {
  pagination: Pagination;
  authors: Author[];
}

export interface Author {
  isDeleted: IsDeleted;
  _id: string;
  name: string;
  lastName: string;
  dateTimeCreated: Date;
  dateTimeUpdated: Date;
  __v: number;
}

export interface IsDeleted {
  value: boolean;
  deletedDateTime: null;
}


