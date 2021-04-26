import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../interfaces/book.interface';
import {BooksService} from '../../services/books/books.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styles: [
  ]
})
export class ViewBookComponent implements OnInit {

  book: Book;
  private bookId: string;
  private authorId: string;

  constructor(private router: Router,
              private booksService: BooksService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.authorId = this.activatedRoute.snapshot.paramMap.get('authorId');
    this.getBook();
  }


  back() {
    if (this.authorId){
      return this.router.navigate(['/world', 'authors', 'view', this.authorId]).then();
    }
    return this.router.navigate(['/world', 'books']).then();
  }

  private getBook() {
    this.booksService.getSingleBook(this.bookId).subscribe(
      (resp: Book) => {
        this.book = resp;
      }
    );

  }



}
