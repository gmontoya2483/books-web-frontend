import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {Usuario} from '../../../models/ususario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(private authService: AuthService) {
    this.usuario = authService.getAuthenticatedUser();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
