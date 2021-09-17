import { Injectable } from '@angular/core';
import {Pagination} from '../../../shared/interfaces/pagination.interface';
import {environment} from '../../../../environments/environment';
import {CopyService} from '../copy/copy.service';

@Injectable({
  providedIn: 'root'
})
export class MisAmigosCopyService {

  // Parametros pagina Books
  private _pageSize = 25;
  private _search = '';
  private _showOnlyBorrowedToMe = false;
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

  set showOnlyBorrowedToMe(value: boolean) {
    this._showOnlyBorrowedToMe = value;
  }

  get showOnlyBorrowedToMe() {
    return this._showOnlyBorrowedToMe;
  }

  set pagination( value: Pagination ) {
    this._pagination = value;
  }

  get pagination(): Pagination {
    return this._pagination;
  }

  private baseUrl = `${environment.booksServerUrl}/api/me/copies/following`;


  constructor(private copyService: CopyService) { }


  getAllMyFollowingCopies(pageSize: number,
                          page: number = 1,
                          search: string = null,
                          showOnlyBorrowedToMe: boolean = false) {
    const url = `${this.baseUrl}`;
    return this.copyService.getAllCopies(url, pageSize, page, search, false, false, showOnlyBorrowedToMe);
  }
}
