import {Component, Input, OnInit} from '@angular/core';
import {CurrentLoan, currentLoanStatusEnum} from '../../interfaces/copy.interface';

@Component({
  selector: 'app-copy-current-loan-status-owner',
  templateUrl: './copy-current-loan-status-owner.component.html',
  styles: [
  ]
})
export class CopyCurrentLoanStatusOwnerComponent implements OnInit {

  public currentLoanStatus = currentLoanStatusEnum;

  @Input() currentLoan: CurrentLoan;

  constructor() { }

  ngOnInit(): void {
  }


  isStatus(currentStatus: currentLoanStatusEnum, isStatus: currentLoanStatusEnum){
    return (currentStatus === isStatus);
  }

}
