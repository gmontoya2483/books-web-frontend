import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../../auth/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  private url = `${environment.booksServerUrl}/api/copy`;

  constructor(private http: HttpClient,
              private authService: AuthService ) { }




}
