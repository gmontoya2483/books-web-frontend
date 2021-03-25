import { Injectable } from '@angular/core';
import {SideNavItem} from '../../interfaces/side-nav-bar.interface';

@Injectable({
  providedIn: 'root'
})
export class SideNavBarService {

  private _sideNavBarGeneralItems: SideNavItem[] = [
    {
      description: 'Dashboard',
      path: '/dashboard',
      icon: 'fas fa-tachometer-alt',
      children: []
    },
    {
      description: 'El Mundo',
      path: '/biblioteca',
      icon: 'fas fa-globe-americas',
      children: [
        { description: 'Todos los libros', path: '/biblioteca/books'},
        { description: 'Todos los Autores', path: '/biblioteca/authors'}
      ]
    }
  ];

  private _sideNavBarCommunityItems: SideNavItem[] = [
    {
      description: 'Mi Comunidad',
      path: '/comunidad',
      icon: 'fas fa-hands-helping',
      children: [
        { description: 'Todos los Miembros', path: '/comunidad/users'},
        { description: 'Todos los Ejemplares', path: '/comunidad/books'}
      ]
    },
    {
      description: 'Mis Amigos',
      path: '/amigos',
      icon: 'fas fa-users',
      children: [
        { description: 'Siguiendo', path: '/amigos/following'},
        { description: 'Te Siguen', path: '/amigos/followers'}
      ]
    }
  ];



  public get sideNavBarGeneralItems() {
    return [... this._sideNavBarGeneralItems];
  }

  public get sideNavBarCommunityItems() {
    return [... this._sideNavBarCommunityItems];
  }


  constructor() { }
}
