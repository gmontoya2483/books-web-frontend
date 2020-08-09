import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from '../../models/ususario.model';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {CountriesService} from '../countries/countries.service';
import {FileUploadService} from '../file-upload/file-upload.service';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(private http: HttpClient,
              private router: Router,
              private authService: AuthService,
              private countriesService: CountriesService,
              private fileUploadService: FileUploadService
  ) {
  }

  private url = `${environment.booksServerUrl}/api/me`;
  public me: Usuario = null;

  public usuarioActulizadoEvent: EventEmitter<any> = new EventEmitter<any>();


  public getMe(){

    const token = this.authService.getToken();
    if (!token){
      this.me = null;
      return null;
    }


    if (this.me){
      return new Observable<true>();
    }

    return this.http.get( this.url, {headers: {'x-auth-token': token}}).pipe(
      map((resp: any) => {
        this.me = resp.me;
        return true;
      }),
      catchError((err: any) => {
        Swal.fire({
          title: 'Error',
          text: `No se pudo obtener informacion del profile: ${err.error.mensaje}`,
          icon: 'error'
        }).then();
        this.me = null;
        this.router.navigate(['/login']).then();
        return throwError(err);
      })
    );
  }

  public SaveMe(){
    const token = this.authService.getToken();
    if (!token){
      this.me = null;
      return null;
    }

    let body;
    if (this.me.paisResidencia._id === ''){
        body = {
          nombre: this.me.nombre,
          apellido: this.me.apellido
        };
    } else {
      body = {
        nombre: this.me.nombre,
        apellido: this.me.apellido,
        paisResidenciaId: this.me.paisResidencia._id
      };
    }


    return this.http.put( this.url, body, {headers: {'x-auth-token': token}}).pipe(
      map((resp: any) => {
        this.me = resp.me;
        this.usuarioActulizadoEvent.emit();
        localStorage.setItem('token', resp.token);
        return true;
      }),
      catchError((err: any) => {
        Swal.fire({
          title: 'Error',
          text: `No se pudo Guardar la información del profile: ${err.error.mensaje}`,
          icon: 'error'
        }).then();
        this.me = null;
        this.router.navigate(['/profile']).then();
        return throwError(err);
      })
    );
  }

  public saveMyCommunity(){
    const token = this.authService.getToken();
    if (!token){
      this.me = null;
      return null;
    }

    let body;
    if (this.me.comunidad._id === ''){
      body = { };
    } else {
      body = {
        comunidadId: this.me.comunidad._id
      };
    }

    return this.http.put( `${this.url}/community`, body, {headers: {'x-auth-token': token}}).pipe(
      map((resp: any) => {
        this.me = resp.me;
        localStorage.setItem('token', resp.token);
        return true;
      }),
      catchError((err: any) => {
        Swal.fire({
          title: 'Error',
          text: `No se pudo suscribir a la comunidad: ${err.error.mensaje}`,
          icon: 'error'
        }).then();
        this.me = null;
        this.router.navigate(['/profile']).then();
        return throwError(err);
      })
    );
  }


  public ChangeMyImage( image: File ){

    const token = this.authService.getToken();
    if (!token){
      this.me = null;
      return null;
    }

    this.fileUploadService.updateProfileImg(image, token, `${this.url}/img`).then(
      (resp: any ) => {
        if (!resp){
          Swal.fire({
            title: 'Error',
            text: `Internal Error - No se pudo actualizar la imagen`,
            icon: 'error'
          }).then();
          return;
        }

        if (!resp.ok){
          Swal.fire({
            title: 'Error',
            text: `${resp.mensaje}`,
            icon: 'error'
          }).then();
          return;
        }

        // console.log(resp);
        this.me.img = resp.img;
        localStorage.setItem('token', resp.token);
      }
    );
  }

}
