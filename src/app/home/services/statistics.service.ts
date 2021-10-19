import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthService} from '../../auth/services/auth/auth.service';
import {catchError, map} from 'rxjs/operators';
import {BooksRootResponse} from '../../world/interfaces/book.interface';
import Swal from 'sweetalert2';
import {throwError} from 'rxjs';
import {StatisticsRootResponse} from '../interfaces/statistic.interface';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private baseUrl = `${environment.booksServerUrl}/api/me/statistic`;

  constructor( private http: HttpClient,
               private authService: AuthService ) { }


  getBooksStatistics() {
    let params = new HttpParams();
    params = params.append('showBooksStatistics', 'true');

    return this.getStatistics(params).pipe(
      map( (resp: StatisticsRootResponse) => {
        return resp.booksStatistics;
      })
    );

  }

  getCommunityStatistics() {
    let params = new HttpParams();
    params = params.append('showCommunityStatistics', 'true');

    return this.getStatistics(params).pipe(
      map( (resp: StatisticsRootResponse) => {
        return resp.communityStatistics;
      })
    );

  }


  getFollowStatistics() {
    let params = new HttpParams();
    params = params.append('showFollowStatistics', 'true');

    return this.getStatistics(params).pipe(
      map( (resp: StatisticsRootResponse) => {
        return resp.followStatistics;
      })
    );

  }


  getMyCopiesStatistics() {
    let params = new HttpParams();
    params = params.append('showMyCopiesStatistics', 'true');

    return this.getStatistics(params).pipe(
      map( (resp: StatisticsRootResponse) => {
        return resp.myCopiesStatistics;
      })
    );

  }






  private getStatistics(params: HttpParams){

    // Obtener el token para posarlo en el header
    const token = this.authService.getToken();
    if (!token){
      return null;
    }
    const headers = new HttpHeaders().set('x-auth-token', token);

    return this.http.get(this.baseUrl, {headers, params}).pipe(
      map( (resp: StatisticsRootResponse) => {
        return resp;
      }),
      catchError((err: any) => {
        Swal.fire({
          title: 'Error',
          text: `No se pudo obtener informacion de los libros: ${err.error.mensaje}`,
          icon: 'error'
        }).then();
        return throwError(err);
      })

    );


  }



}
