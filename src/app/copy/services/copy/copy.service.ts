import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {catchError, map} from 'rxjs/operators';
import {CopiesRootResponse} from '../../interfaces/copy.interface';
import Swal from 'sweetalert2';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  private url = `${environment.booksServerUrl}/api/copy`;

  constructor(private http: HttpClient,
              private authService: AuthService ) { }



  getAllCopies(url: string,
               pageSize: number,
               page: number = 1,
               search: string = null,
               showDeleted: boolean = false,
               showOnlyBorrowed: boolean = false,
               showOnlyBorrowedToMe: boolean = false){

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
    if (showDeleted){
      params = params.append('showDeleted', 'true');
    }

    if (showOnlyBorrowed) {
      params = params.append('showOnlyBorrowed', 'true');
    }

    if (showOnlyBorrowedToMe) {
      params = params.append('showOnlyBorrowedToMe', 'true');
    }

    return this.http.get(url, {headers, params}).pipe(
      map( (resp: CopiesRootResponse) => {
        return resp.copies;
      }),
      catchError((err: any) => {
        Swal.fire({
          title: 'Error',
          text: `No se pudo obtener informacion de los ejemplares: ${err.error.mensaje}`,
          icon: 'error'
        }).then();
        return throwError(err);
      })

    );
  }


  addCopy(url: string, bookId: string){

    // Obtener el token para posarlo en el header
    const token = this.authService.getToken();
    if (!token) {
      return null;
    }
    const headers = new HttpHeaders().set('x-auth-token', token);
    return this.http.post(url, {bookId}, {headers}).pipe(
      map( (resp: any) => {
        Swal.fire({
          title: 'Ejemplar',
          text: resp.mensaje,
          icon: 'success'
        }).then();
        return true;
      }),
      catchError((err: any) => {
        Swal.fire({
          title: 'Error',
          text: `No se ha podido agregar el ejemplar a la biblioteca: ${err.error.mensaje}`,
          icon: 'error'
        }).then();

        return throwError(err);
      })
    );
  }


  setDeleted(baseUrl: string, copyId: string, isDeleted: boolean): Observable<any> {

    const url = `${baseUrl}/${copyId}/delete`;

    // Obtener el token para posarlo en el header
    const token = this.authService.getToken();
    if (!token) {
      return null;
    }
    const headers = new HttpHeaders().set('x-auth-token', token);

    return this.http.put(url, {isDeleted}, {headers}).pipe(
      map( (resp: any) => {
        Swal.fire({
          title: 'Ejemplar',
          text: resp.mensaje,
          icon: 'success'
        }).then();
        return true;
      }),
      catchError((err: any) => {
        const errorMessage = (isDeleted) ? 'No se pudo marcar la copia como eliminada' : 'No se pudo desmarcar la copia como eliminada';
        Swal.fire({
          title: 'Error',
          text: `${errorMessage}: ${err.error.mensaje}`,
          icon: 'error'
        }).then();

        return throwError(err);
      })
    );



  }




}
