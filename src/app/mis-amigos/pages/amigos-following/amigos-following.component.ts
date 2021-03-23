import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../services/me/me.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-amigos-following',
  templateUrl: './amigos-following.component.html',
  styles: [
  ]
})
export class AmigosFollowingComponent implements OnInit {

  public pageSize = 25;
  public search = '';
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

  public followings: any[] = null;

  constructor(public meService: MeService) {
    this.getFollowings();
  }

  ngOnInit(): void {
  }


  getFollowings(page = 1) {

    this.meService.getFollowing(this.pageSize, page )
      .subscribe((resp: { pagination: any, followings: [] }) => {
        this.pagination = resp.pagination;
        this.followings = resp.followings;
        this.pageSize = this.pagination.pageSize;
      });
  }


  confirmFollower(user: any, i: number) {

    this.meService.confirmFollower(user.following).subscribe(( resp: any ) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const follow = resp.follower;

      if (this.followings[i].following._id === follow.follower._id){
        this.followings[i].follower = {_id: follow._id, isConfirmed: follow.isConfirmed};
      }
    });


  }

  deleteFollower(user: any, i: number) {
    this.meService.deleteFollower( user.following ).subscribe( (resp: any) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const follow = resp.follower;

      if (this.followings[i].following._id === follow.follower._id){
        this.followings[i].follower = null;
      }

    });
  }

  followUser(user: any, i: number) {

    this.meService.followUser(user.following).subscribe(( resp: any ) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const follow = resp.follow;

      if (this.followings[i].following._id === follow.following){
        this.followings[i].isConfirmed = follow.isConfirmed;
      }

    });

  }

  unFollowUser(user: any, i: number) {

    this.meService.unFollowUser(user.following).subscribe((resp: any) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const following = resp.following.following;

      if (this.followings[i].following._id === following._id){
        this.followings[i].isConfirmed = null;
      }

    });

  }

  /*********************************************
  * Funciones para manejar la paginación       *
  *********************************************/

  changePageSize() {
    this.getFollowings();
  }

  goToPage(page: number) {
    this.getFollowings(page);
  }

}
