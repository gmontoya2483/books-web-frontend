import { Component, OnInit } from '@angular/core';
import {MeService} from '../../../me/services/me/me.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styles: [
  ]
})
export class BibliotecaComponent implements OnInit {

  constructor(public meService: MeService) {
    this.meService.getMe().subscribe((resp: any ) => {  });
  }

  ngOnInit(): void {
  }

}
