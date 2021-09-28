import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from '../../services/books/books.service';
import {MeCopyService} from '../../../copy/services/me-copy/me-copy.service';
import {Book} from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: [
  ]
})
export class BookDetailsComponent implements OnInit {

  @Input() bookId: string;
  book: Book;

  constructor(private booksService: BooksService,
              private meCopyService: MeCopyService
              ) { }

  ngOnInit(): void {
    this.getBook();
  }

  private getBook() {
    this.booksService.getSingleBook(this.bookId).subscribe(
      (resp: Book) => {
        this.book = resp;
      }
    );

  }


  addCopy( bookId: string ) {
    this.meCopyService.addCopy( bookId ).subscribe();
  }

}
