import { Component, OnInit } from '@angular/core';
import {MeService} from '../../services/me/me.service';
import {Pagination} from '../../../shared/interfaces/pagination.interface';
import {Book} from '../../../world/interfaces/book.interface';
import {Router} from '@angular/router';
import {PageSizesService} from '../../../shared/services/page-sizes/page-sizes.service';
import {CopyLoanService} from '../../../copy/services/copy-loan/copy-loan.service';
import {MeCopyService} from '../../../copy/services/me-copy/me-copy.service';
import {Copy, currentLoanStatusEnum} from '../../../copy/interfaces/copy.interface';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styles: [
  ]
})
export class LibraryComponent implements OnInit {

  public currentLoanStatus = currentLoanStatusEnum;
  public pageSize = 25;
  public search = '';
  public showDeleted = true;
  public showOnlyBorrowed = false;
  public pagination: Pagination = undefined;

  private _copies: Copy [] = [];
  get copies(): Copy[]{
    return [... this._copies];
  }

  private _pageSizes: number [] = this.pageSizesService.pageSizes;
  public get pageSizes(): number [] {
    return this._pageSizes;
  }




  constructor(public meService: MeService,
              private router: Router,
              private pageSizesService: PageSizesService,
              private meCopyService: MeCopyService,
              private copyLoanService: CopyLoanService) {
    this.meService.getMe().subscribe((resp: any ) => {  });
  }

  ngOnInit(): void {
    this.search = this.meCopyService.search;
    this.pageSize = this.meCopyService.pageSize;
    this.showDeleted = this.meCopyService.showDeleted;
    this.showOnlyBorrowed = this.meCopyService.showOnlyBorrowed;
    this.pagination = this.meCopyService.pagination;
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
    this.meCopyService.getAllMyCopies(this.pageSize, page, this.search, this.showDeleted, this.showOnlyBorrowed )
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

  showCopy( copyId: string, bookId: string): void {
    this.meCopyService.search = this.search;
    this.meCopyService.pageSize = this.pageSize;
    this.meCopyService.showDeleted = this.showDeleted;
    this.meCopyService.showOnlyBorrowed = this.showOnlyBorrowed;
    this.meCopyService.pagination = this.pagination;
    this.router.navigate(['/world', 'copies', 'view', copyId, 'books', bookId]).then();
  }




  /************************************************************
  Badges
  *************************************************************/

  isStatus(currentStatus: currentLoanStatusEnum, isStatus: currentLoanStatusEnum){
    return (currentStatus === isStatus);
  }


  /******************************************************
    Acciones
  ********************************************************/

  addCopy(_id: string) {
    console.log(`Add Copia: ${_id}`);
  }

  setDeleted(copyId: string,  isDeleted: boolean) {
    this.meCopyService.seMyCopyDeleted(copyId, isDeleted)
      .subscribe((resp: any) => {
        if (resp) {
          this.getCopies(this.pagination.currentPage);
        }
      });
  }

  setAccepted(copyId: string) {
    console.log(`Accepted: ${copyId}` );

    this.copyLoanService.setCopyLoanStatusAsAccepted(copyId).pipe(
      catchError((err: any) => {
        this.getCopies(this.pagination.currentPage);
        return of(false);
      })
    ).subscribe(resp => {
      this.getCopies(this.pagination.currentPage);
    });

  }

  setRejected(copyId: string) {
    this.copyLoanService.setCopyLoanStatusAsRejected(copyId).pipe(
      catchError((err: any) => {
        this.getCopies(this.pagination.currentPage);
        return of(false);
      })
    ).subscribe(resp => {
      this.getCopies(this.pagination.currentPage);
    });
  }

  setClaimed(copyId: string) {
    console.log(`Claimed: ${copyId}` );

    this.copyLoanService.setCopyLoanStatusAsClaimed(copyId).pipe(
      catchError((err: any) => {
        this.getCopies(this.pagination.currentPage);
        return of(false);
      })
    ).subscribe(resp => {
      this.getCopies(this.pagination.currentPage);
    });

  }

  setBorrowed(copyId: string) {
    this.copyLoanService.setCopyLoanStatusAsBorrowed(copyId).pipe(
      catchError((err: any) => {
        this.getCopies(this.pagination.currentPage);
        return of(false);
      })
    ).subscribe(resp => {
      this.getCopies(this.pagination.currentPage);
    });
  }





  /*************************************************
   Verificaciones que acciones se pueden realizar
  ***************************************************/

  canBeDeleted(copy: Copy): boolean {
    return !copy.isDeleted.value && !copy.currentLoan;
  }

  canBeRestored(copy: Copy): boolean {
    return copy.isDeleted.value;
  }


  canBeAccepted(copy: Copy): boolean {
    return copy.currentLoan && copy.currentLoan.status === this.currentLoanStatus.requested;
  }


  canBeRejected(copy: Copy): boolean {
    return copy.currentLoan
      && (copy.currentLoan.status === this.currentLoanStatus.requested || copy.currentLoan.status === this.currentLoanStatus.accepted);
  }

  canBeBorrowed(copy: Copy): boolean {
    return copy.currentLoan && copy.currentLoan.status === this.currentLoanStatus.accepted;
  }

  canBeClaimed(copy: Copy): boolean {
    return copy.currentLoan && copy.currentLoan.status === this.currentLoanStatus.borrowed;
  }



}
