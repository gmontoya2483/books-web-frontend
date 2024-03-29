import { Component, OnInit } from '@angular/core';
import {Pagination} from '../../../shared/interfaces/pagination.interface';
import {Copy, currentLoanStatusEnum} from '../../../copy/interfaces/copy.interface';
import {Router} from '@angular/router';
import {PageSizesService} from '../../../shared/services/page-sizes/page-sizes.service';
import {MisAmigosCopyService} from '../../../copy/services/mis-amigos-copy/mis-amigos-copy.service';
import {CopyLoanService} from '../../../copy/services/copy-loan/copy-loan.service';
import {MeService} from '../../../me/services/me/me.service';
import {catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Component({
  selector: 'app-amigos-books',
  templateUrl: './amigos-books.component.html',
  styles: [
  ]
})
export class AmigosBooksComponent implements OnInit {

  public currentLoanStatus = currentLoanStatusEnum;
  public pageSize = 25;
  public search = '';
  public showOnlyBorrowedToMe = false;
  public pagination: Pagination = undefined;

  private _copies: Copy [] = [];
  get copies(): Copy[]{
    return [... this._copies];
  }

  private _pageSizes: number [] = this.pageSizesService.pageSizes;
  public get pageSizes(): number [] {
    return this._pageSizes;
  }

  constructor(private router: Router,
              private pageSizesService: PageSizesService,
              private misAmigosCopyService: MisAmigosCopyService,
              private copyLoanService: CopyLoanService,
              private meService: MeService
  ) { }

  ngOnInit(): void {
    this.search = this.misAmigosCopyService.search;
    this.showOnlyBorrowedToMe = this.misAmigosCopyService.showOnlyBorrowedToMe;
    this.pageSize = this.misAmigosCopyService.pageSize;
    this.pagination = this.misAmigosCopyService.pagination;
    if ( this.pagination) {
      this.getCopies(this.pagination.currentPage);
    } else {
      this.getCopies();
    }
  }


  getCopies(page = 1) {
    if (this.search.length < 3){
      this.search =  '';
    }

    this.misAmigosCopyService.getAllMyFollowingCopies(this.pageSize, page, this.search, this.showOnlyBorrowedToMe )
      .subscribe((resp: { pagination: Pagination, copies: Copy [] }) => {
        this.pagination = resp.pagination;
        this._copies = resp.copies;
        this.pageSize = this.pagination.pageSize;
      });

  }

  goToPage(page) {
    this.getCopies(page);
  }

  searchBooks() {
    this.getCopies();
  }

  changePageSize() {
    this.getCopies();
  }

  showCopy(amigoId: string, copyId: string, bookId: string) {
    this.misAmigosCopyService.search = this.search;
    this.misAmigosCopyService.showOnlyBorrowedToMe = this.showOnlyBorrowedToMe;
    this.misAmigosCopyService.pageSize = this.pageSize;
    this.misAmigosCopyService.pagination = this.pagination;
    this.router.navigate(['/world', 'amigos', amigoId, 'copies', 'view', copyId, 'books', bookId]).then();
    console.log(`Ir a Copia: ${copyId}`);

  }

  addCopy(_id: string) {
    console.log(`Add Copia: ${_id}`);

  }

  borrowCopy(copyId: string) {
    this.copyLoanService.setCopyLoanStatusAsRequested(copyId).pipe(
      catchError((err: any) => {
        this.getCopies(this.pagination.currentPage);
        return of(false);
      })
    ).subscribe(resp => {
      this.getCopies(this.pagination.currentPage);
    });
  }

  cancelBorrow(copyId: string) {
    this.copyLoanService.setCopyLoanStatusAsCancelled(copyId).pipe(
      catchError((err: any) => {
        this.getCopies(this.pagination.currentPage);
        return of(false);
      })
    ).subscribe(resp => {
      this.getCopies(this.pagination.currentPage);
    });
  }

  returnCopy(copyId: string) {
    this.copyLoanService.setCopyLoanStatusAsReturned(copyId).pipe(
      catchError((err: any) => {
        this.getCopies(this.pagination.currentPage);
        return of(false);
      })
    ).subscribe(resp => {
      this.getCopies(this.pagination.currentPage);
    });
  }

  /************************************************************
   Badges
   *************************************************************/

  isCopyOwner(copy: Copy) {
    return copy.owner._id === this.meService.me._id;
  }

  isCopyRequester(copy: Copy) {
    return copy.currentLoan && copy.currentLoan.user._id === this.meService.me._id;
  }



  /******************************************************
   Acciones
   ********************************************************/

  canBeCancelled(copy: Copy) {
    if (copy.currentLoan) {
      if (copy.currentLoan.user._id !== this.meService.me._id){
        return false;
      } else {
        return copy.currentLoan.status === this.currentLoanStatus.requested;
      }
    }
  }


  canBeReturned(copy: Copy) {
    if (copy.currentLoan) {
      if (copy.currentLoan.user._id !== this.meService.me._id){
        return false;
      } else {
         return copy.currentLoan.status === this.currentLoanStatus.borrowed ||  copy.currentLoan.status === this.currentLoanStatus.claimed;
      }
    }
  }



}
