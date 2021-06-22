import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../../interfaces/book.interface';
import {BooksService} from '../../services/books/books.service';
import {MeCopyService} from '../../../copy/services/me-copy/me-copy.service';

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
  private copyId: string;
  private communityId: string;
  private userId: string;
  private followingId: string;
  private followerId: string;

  constructor(private router: Router,
              private booksService: BooksService,
              private activatedRoute: ActivatedRoute,
              private meCopyService: MeCopyService) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.authorId = this.activatedRoute.snapshot.paramMap.get('authorId');
    this.copyId = this.activatedRoute.snapshot.paramMap.get('copyId');
    this.communityId = this.activatedRoute.snapshot.paramMap.get('communityId');
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.followingId = this.activatedRoute.snapshot.paramMap.get('followingId');
    this.followerId = this.activatedRoute.snapshot.paramMap.get('followerId');
    this.getBook();
  }


  back() {
    if (this.authorId){
      return this.router.navigate(['/world', 'authors', 'view', this.authorId]).then();
    }

    if (this.userId) {
      return this.router.navigate(['/users', 'profile', this.userId]).then();
    }

    if (this.followingId) {
      return this.router.navigate(['/users', 'following', this.followingId]).then();
    }

    if (this.followerId) {
      return this.router.navigate(['/users', 'follower', this.followerId]).then();
    }

    if (this.copyId && !this.communityId){
      return this.router.navigate(['/me', 'library']).then();
    }

    if (this.communityId){
      return this.router.navigate(['/comunidad', 'books']).then();
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


  addCopy( bookId: string ) {
    this.meCopyService.addCopy( bookId ).subscribe();
  }
}
