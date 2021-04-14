import { Component, OnInit } from '@angular/core';
import {Pagination} from '../../../shared/interfaces/pagination.interface';
import {Author} from '../../interfaces/author.interface';
import {Book} from '../../interfaces/book.interface';
import {BooksService} from '../../services/books/books.service';
import {Router} from '@angular/router';
import {PageSizesService} from '../../../shared/services/page-sizes/page-sizes.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: [
  ]
})
export class BooksComponent implements OnInit {

  public pageSize = 25;
  public search = '';
  public pagination: Pagination = undefined;

  private _books: Book [] = [];
  get books(): Book[]{
    return [... this._books];
  }

  private _pageSizes: number [] = this.pageSizesService.pageSizes;
  public get pageSizes(): number [] {
    return this._pageSizes;
  }



  constructor( private bookService: BooksService,
               private router: Router,
               private pageSizesService: PageSizesService) { }

  ngOnInit(): void {
    this.search = this.bookService.search;
    this.pageSize = this.bookService.pageSize;
    this.pagination = this.bookService.pagination;
    if ( this.pagination) {
      this.getBooks(this.pagination.currentPage);
    } else {
      this.getBooks();
    }
  }

  getBooks(page = 1) {
    if (this.search.length < 3){
      this.search =  '';
    }
    this.bookService.getAllBooks(this.pageSize, page, this.search )
      .subscribe((resp: { pagination: Pagination, books: Book [] }) => {
        this.pagination = resp.pagination;
        this._books = resp.books;
        this.pageSize = this.pagination.pageSize;
      });
  }

  goToPage(page) {
    this.getBooks(page);
  }

  searchBooks() {
    this.getBooks();
  }

  changePageSize() {
    this.getBooks();
  }

  showBook(_id: string): void {
    console.log(`Ir al Libro: ${_id}`);

  }

  newBook(): void {
    this.bookService.search = this.search;
    this.bookService.pageSize = this.pageSize;
    this.bookService.pagination = this.pagination;
    this.router.navigate(['/world', 'books', 'new']).then();
  }



}
