import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Pagination} from '../../../shared/interfaces/pagination.interface';

import {CopyService} from '../copy/copy.service';

@Injectable({
  providedIn: 'root'
})
export class MeCopyService {

  // Parametros pagina Books
  private _pageSize = 25;
  private _search = '';
  private _showDeleted = true;
  private _showOnlyBorrowed = false;
  private _pagination: Pagination = undefined;

  set pageSize( value: number ) {
    this._pageSize = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set search( value: string ) {
    this._search = value;
  }

  get search(): string {
    return this._search;
  }

  set showDeleted(value: boolean) {
    this._showDeleted = value;
  }

  get showDeleted(): boolean {
    return  this._showDeleted;
  }

  set showOnlyBorrowed(value: boolean) {
    this._showOnlyBorrowed = value;
  }

  get showOnlyBorrowed() {
    return this._showOnlyBorrowed;
  }

  set pagination( value: Pagination ) {
    this._pagination = value;
  }

  get pagination(): Pagination {
    return this._pagination;
  }


  private baseUrl = `${environment.booksServerUrl}/api/me/copies`;

  constructor(private copyService: CopyService) { }


  getAllMyCopies(pageSize: number,
                 page: number = 1,
                 search: string = null,
                 showDeleted: boolean = false,
                 showOnlyBorrowed: boolean = false) {
    const url = `${this.baseUrl}`;
    return this.copyService.getAllCopies(url, pageSize, page, search, showDeleted, showOnlyBorrowed);
  }


  addCopy(bookId: string){
    const url = `${this.baseUrl}`;
    return this.copyService.addCopy(url, bookId);
  }

  seMyCopyDeleted(copyId: string, isDeleted: boolean) {
    const url = `${this.baseUrl}`;
    return this.copyService.setDeleted(url, copyId, isDeleted);
  }


}
