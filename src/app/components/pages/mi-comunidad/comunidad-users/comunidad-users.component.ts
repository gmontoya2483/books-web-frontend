import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../../services/me/me.service';

@Component({
  selector: 'app-comunidad-users',
  templateUrl: './comunidad-users.component.html',
  styles: [
  ]
})



export class ComunidadUsersComponent implements OnInit {


  public pageSize = 25;
  public pagination: {
    previousPage: number,
    currentPage: number,
    nextPage: number,
    totalPages: number,
    pageSize: number,
    pages: number [],
    showing: {
      from: number,
      to: number,
      of: number
    }
  };
  public users: [] = null;



  constructor(public meService: MeService) {
    this.getMembers();
  }

  ngOnInit(): void {
  }


  goToPage(page) {
    console.log(page);
    this.getMembers(page);
  }


  getMembers(page = 1) {
    this.meService.getMyCommunityMembers(this.pageSize, page )
      .subscribe((resp: { pagination: any, users: [] }) => {
        this.pagination = resp.pagination;
        this.users = resp.users;
        console.log(this.users);
        console.log(this.pagination);
        this.pageSize = this.pagination.pageSize;
      });
  }
}
