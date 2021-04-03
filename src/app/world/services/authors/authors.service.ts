import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {Usuario} from '../../../models/ususario.model';
import {catchError, map, tap} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {throwError} from 'rxjs';
import {AuthorErrorResponse, AuthorRootResponse, AuthorsRootResponse, NewAuthor} from '../../interfaces/author.interface';
import {Pagination} from '../../../shared/interfaces/pagination.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  // Parametros pagina authors
  private _pageSize = 25;
  private _search = '';
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

  set pagination( value: Pagination ) {
    this._pagination = value;
  }

  get pagination(): Pagination {
    return this._pagination;
  }

  // Base URL
  private baseUrl = `${environment.booksServerUrl}/api/authors`;


  constructor( private http: HttpClient,
               private authService: AuthService ) { }

  getAllAuthors(pageSize: number, page: number = 1, search: string = null){

    const url = `${this.baseUrl}`;

    // Obtener el token para posarlo en el header
    const token = this.authService.getToken();
    if (!token){
      return null;
    }
    const headers = new HttpHeaders().set('x-auth-token', token);

    // Parametros de paginación y busqueda
    let params = new HttpParams();
    params = params.append('page', String(page));
    params = params.append('pageSize', String(pageSize));
    if (search) {
      params = params.append('search', search);
    }

    return this.http.get(url, {headers, params}).pipe(
      map( (resp: AuthorsRootResponse) => {
        return resp.authors;
      }),
      catchError((err: any) => {
        Swal.fire({
          title: 'Error',
          text: `No se pudo obtener informacion de los autores: ${err.error.mensaje}`,
          icon: 'error'
        }).then();
        return throwError(err);
      })

    );

  }

  saveAuthor({ name, lastName}: NewAuthor) {
    const url = `${this.baseUrl}`;

    // Obtener el token para posarlo en el header
    const token = this.authService.getToken();
    if (!token){
      return null;
    }
    const headers = new HttpHeaders().set('x-auth-token', token);

    return this.http.post<AuthorRootResponse | AuthorErrorResponse>(url, {name, lastName}, {headers}).pipe(
      tap ((resp: AuthorRootResponse | AuthorErrorResponse) => {
        Swal.fire({
          title: 'Nuevo Autor',
          text: resp.mensaje,
          icon: 'success'
        }).then();
      } ),
      map ((resp: AuthorRootResponse | AuthorErrorResponse) => true),
      catchError (err => {
        Swal.fire({
          title: 'Error',
          text: `No se ha podido agregar el autor: ${err.error.mensaje}`,
          icon: 'error'
        }).then();
        return throwError(err);
      })
    );

  }




}
