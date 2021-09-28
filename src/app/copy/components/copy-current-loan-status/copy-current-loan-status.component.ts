import {Component, Input, OnInit} from '@angular/core';
import {CurrentLoan} from '../../interfaces/copy.interface';

@Component({
  selector: 'app-copy-current-loan-status',
  templateUrl: './copy-current-loan-status.component.html',
  styles: [
  ]
})
export class CopyCurrentLoanStatusComponent implements OnInit {

  @Input() currentLoan: CurrentLoan;

  constructor() { }

  ngOnInit(): void {
  }

}
