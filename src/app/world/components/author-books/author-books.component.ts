import {Component, Input, OnInit} from '@angular/core';
import {Book, ShortBook} from '../../interfaces/book.interface';
import {Router} from '@angular/router';
import {AuthorsService} from '../../services/authors/authors.service';
import {ViewBookComponent} from '../../pages/view-book/view-book.component';
import {MeCopyService} from '../../../copy/services/me-copy/me-copy.service';

@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styles: [
  ]
})
export class AuthorBooksComponent implements OnInit {

  @Input() authorId: string;
  @Input() authorName: string;
  @Input() authorLastName: string;

  private _books: ShortBook [] = [];
  get books(): ShortBook[]{
    return [... this._books];
  }

  constructor(private router: Router,
              private authorService: AuthorsService,
              private meCopyService: MeCopyService) { }

  ngOnInit(): void {
    this.getBooks();
  }


  getBooks() {
    this.authorService.getAuthorBooks(this.authorId).subscribe(
      (resp: Book[]) => {
        this._books = resp;
      }
    );
  }

  showBook(bookId: string): void {
    this.router.navigate(['/world', 'authors', 'view', this.authorId, 'books', bookId]).then();
  }

  addCopy(bookId: string) {
    this.meCopyService.addCopy( bookId ).subscribe();
  }
}
