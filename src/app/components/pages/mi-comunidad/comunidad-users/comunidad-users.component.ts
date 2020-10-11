import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../../services/me/me.service';
import Swal from 'sweetalert2';

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
  public members: [] = null;



  constructor(public meService: MeService) {
    this.getMembers();
  }

  ngOnInit(): void {
  }


  goToPage(page) {
    this.getMembers(page);
  }


  getMembers(page = 1) {
    this.meService.getMyCommunityMembers(this.pageSize, page )
      .subscribe((resp: { pagination: any, users: [] }) => {
        this.pagination = resp.pagination;
        this.members = resp.users;
        this.pageSize = this.pagination.pageSize;
      });
  }

  followUser(user: any, i: number) {

    this.meService.followUser(user).subscribe(( resp: any ) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const follow = resp.follow;

      // @ts-ignore
      if (this.members[i]._id === follow.following){
        // @ts-ignore
        this.members[i].following = {_id: follow._id, isConfirmed: follow.isConfirmed};
      }

    });
  }

  unFollowUser(user: any, i: number) {

    this.meService.unFollowUser(user).subscribe((resp: any) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const following = resp.following.following;

      // @ts-ignore
      if (this.members[i]._id === following._id){
        // @ts-ignore
        this.members[i].following = null;
      }

    });

  }


}
