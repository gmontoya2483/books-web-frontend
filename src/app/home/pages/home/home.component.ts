import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../me/services/me/me.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(public meService: MeService) { }

  ngOnInit(): void {
  }

}
