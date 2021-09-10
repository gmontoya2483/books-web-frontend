import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../auth/services/auth/auth.service';
import {currentLoanStatusEnum} from '../../interfaces/copy.interface';
import {catchError, map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CopyLoanService {

  private baseUrl = `${environment.booksServerUrl}/api/copies/loans`;

  constructor(private http: HttpClient,
              private authService: AuthService) { }


  private setCopyLoanStatus(copyId: string, setStatus: currentLoanStatusEnum) {

    // Obtener el token para posarlo en el header
    const token = this.authService.getToken();
    if (!token){
      return null;
    }
    const headers = new HttpHeaders().set('x-auth-token', token);

    const url = `${this.baseUrl}/${copyId}`;

    return this.http.put(url, {setStatus}, {headers}).pipe(
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
          text: `No se pudo gentionar el prestamo: ${err.error.mensaje}`,
          icon: 'error'
        }).then();

        return throwError(err);
      })
    );
  }

  setCopyLoanStatusAsRequested(copyId: string){
    return this.setCopyLoanStatus(copyId, currentLoanStatusEnum.requested);
  }

  setCopyLoanStatusAsCancelled(copyId: string){
    return this.setCopyLoanStatus(copyId, currentLoanStatusEnum.cancelled);
  }


}
