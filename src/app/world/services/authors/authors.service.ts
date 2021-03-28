import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {Usuario} from '../../../models/ususario.model';
import {catchError, map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {throwError} from 'rxjs';
import {AuthorRootResponse} from '../../../shared/interfaces/author.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

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
      map( (resp: AuthorRootResponse) => {
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


}
