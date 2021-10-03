import { Component, OnInit } from '@angular/core';
import {LoanHistory, MeLoanHistory} from '../../../copy/interfaces/loanHistory.interface';
import {MeCopyService} from '../../../copy/services/me-copy/me-copy.service';
import {MeService} from '../../services/me/me.service';

@Component({
  selector: 'app-requested-loan-history',
  templateUrl: './requested-loan-history.component.html',
  styles: [
  ]
})
export class RequestedLoanHistoryComponent implements OnInit {

  loanHistory: MeLoanHistory[] = [];

  constructor(private meService: MeService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.meService.getMyLoanHistory().subscribe((resp: MeLoanHistory[]) => {
      this.loanHistory = resp;
    });
  }

}
