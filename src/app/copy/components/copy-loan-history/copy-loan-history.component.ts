import {Component, Input, OnInit} from '@angular/core';
import {CopyService} from '../../services/copy/copy.service';
import {LoanHistory} from '../../interfaces/loanHistory.interface';

@Component({
  selector: 'app-copy-loan-history',
  templateUrl: './copy-loan-history.component.html',
  styles: [
  ]
})
export class CopyLoanHistoryComponent implements OnInit {

   @Input() copyId: string;
   loanHistory: LoanHistory[] = [];

  constructor(private copyService: CopyService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory() {
    this.copyService.getCopyLoanHistory(this.copyId).subscribe((resp: LoanHistory[]) => {
      this.loanHistory = resp;
    });
  }



}
