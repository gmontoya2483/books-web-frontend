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

  // book: Book;
  public bookId: string;
  private authorId: string;
  public copyId: string;
  private communityId: string;
  public userId: string;
  private followingId: string;
  private followerId: string;
  private amigoId: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bookId = this.activatedRoute.snapshot.paramMap.get('bookId');
    this.authorId = this.activatedRoute.snapshot.paramMap.get('authorId');
    this.copyId = this.activatedRoute.snapshot.paramMap.get('copyId');
    this.communityId = this.activatedRoute.snapshot.paramMap.get('communityId');
    this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
    this.followingId = this.activatedRoute.snapshot.paramMap.get('followingId');
    this.followerId = this.activatedRoute.snapshot.paramMap.get('followerId');
    this.amigoId = this.activatedRoute.snapshot.paramMap.get('amigoId');
    // this.getBook();
  }


  back() {

    console.log(this.amigoId);

    if (this.amigoId){
      return this.router.navigate(['/amigos', 'following', 'copies']).then();
    }

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

  // private getBook() {
  //   this.booksService.getSingleBook(this.bookId).subscribe(
  //     (resp: Book) => {
  //       this.book = resp;
  //     }
  //   );
  //
  // }
  //
  //
  // addCopy( bookId: string ) {
  //   this.meCopyService.addCopy( bookId ).subscribe();
  // }
}
