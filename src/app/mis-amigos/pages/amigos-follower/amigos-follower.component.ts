import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../services/me/me.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-amigos-follower',
  templateUrl: './amigos-follower.component.html',
  styles: [
  ]
})
export class AmigosFollowerComponent implements OnInit {


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

  public followers: any[] = null;

  constructor(public meService: MeService) {
    this.getFollowers();
  }

  ngOnInit(): void {
  }

  getFollowers(page = 1) {

    this.meService.getFollowers(this.pageSize, page )
      .subscribe((resp: { pagination: any, followers: [] }) => {
        this.pagination = resp.pagination;
        this.followers = resp.followers;
        this.pageSize = this.pagination.pageSize;
      });
  }



  confirmFollower(user: any, i: number) {

    this.meService.confirmFollower(user.follower).subscribe(( resp: any ) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const follow = resp.follower;

      if (this.followers[i].follower._id === follow.follower._id){
        this.followers[i].isConfirmed = follow.isConfirmed;
      }
    });



  }

  deleteFollower(user: any, i: number) {

    this.meService.deleteFollower( user.follower ).subscribe( (resp: any) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const follow = resp.follower;


      if (this.followers[i].follower._id === follow.follower._id){
        this.followers[i].isConfirmed = null;
      }

    });

  }

  followUser(user: any, i: number) {
    this.meService.followUser(user.follower).subscribe(( resp: any ) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const follow = resp.follow;


      if (this.followers[i].follower._id === follow.following){
        this.followers[i].following = follow;
      }

    });

  }

  unFollowUser(user: any, i: number) {

    this.meService.unFollowUser(user.follower).subscribe((resp: any) => {
      if (!resp.ok){
        Swal.fire({
          title: 'Error',
          text: `${ resp.mensaje }`,
          icon: 'error'
        }).then();
      }

      const following = resp.following.following;

      if (this.followers[i].follower._id === following._id){
        this.followers[i].following = null;
      }

    });






  }


  /*********************************************
   * Funciones para manejar la paginación       *
   *********************************************/

  changePageSize() {
    this.getFollowers();
  }

  goToPage(page: number) {
    this.getFollowers(page);
  }


}
