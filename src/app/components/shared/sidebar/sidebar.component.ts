import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../services/me/me.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(public meService: MeService) {
    this.meService.getMe().subscribe((resp: any ) => {  });
  }


  ngOnInit(): void {
  }

}