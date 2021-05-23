import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {catchError, map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeCopyService {

  private baseUrl = `${environment.booksServerUrl}/api/me/copy`;

  constructor(private http: HttpClient,
              private authService: AuthService ) { }

  addCopy(bookId: string){
    const url = `${this.baseUrl}`;

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


}
