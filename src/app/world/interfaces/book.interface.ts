import {Pagination} from '../../shared/interfaces/pagination.interface';
import {ShortAuthor} from './author.interface';
import {ShortGenre} from './genre.interface';
import {IsDeleted} from '../../shared/interfaces/is-deleted.interface';

export interface BooksRootResponse {
  ok: boolean;
  books: Books;
}

export interface Books {
  pagination: Pagination;
  books: Book[];
}

export interface Book {
  isDeleted: IsDeleted;
  img: null;
  _id: string;
  title: string;
  description: string;
  author: ShortAuthor;
  genre: ShortGenre;
  dateTimeCreated: Date;
  dateTimeUpdated: Date;
  __v: number;
}








