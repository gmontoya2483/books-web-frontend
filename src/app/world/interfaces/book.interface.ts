import {Pagination} from '../../shared/interfaces/pagination.interface';
import { ShortAuthor} from './author.interface';
import {ShortGenre} from './genre.interface';
import {IsDeleted} from '../../shared/interfaces/is-deleted.interface';


export interface BooksRootResponse {
  ok: boolean;
  books: Books;
}

export interface BookRootResponse {
  ok: boolean;
  book: Book;
  mensaje: string;
}

export interface BookErrorResponse {
  ok: boolean;
  mensaje: string;
}

export interface Books {
  pagination: Pagination;
  books: Book[];
}

export interface Book {
  isDeleted: IsDeleted;
  img: string | null;
  _id: string;
  title: string;
  description: string;
  author: ShortAuthor;
  genre: ShortGenre;
  dateTimeCreated: Date;
  dateTimeUpdated: Date;
  __v: number;
}


export interface ShortBook {
  isDeleted: IsDeleted;
  img: string | null;
  _id: string;
  title: string;
  description: string;
  author: ShortAuthor;
  genre: ShortGenre;
}

export interface ReferencedBook {
  _id: string;
  title: string;
  description: string;
  author: ShortAuthor;
  genre: ShortGenre;
}

export interface NewBook{
  title: string;
  description: string;
  authorId: string;
  genreId: string;
}










