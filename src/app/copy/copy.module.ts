import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CopyCurrentLoanStatusOwnerComponent} from './components/copy-current-loan-status-owner/copy-current-loan-status-owner.component';
import {CopyCurrentLoanStatusRequesterComponent} from './components/copy-current-loan-status-requester/copy-current-loan-status-requester.component';
import {CopyCurrentLoanStatusComponent} from './components/copy-current-loan-status/copy-current-loan-status.component';
import {CopyLoanHistoryComponent} from './components/copy-loan-history/copy-loan-history.component';



@NgModule({
  declarations: [
    CopyCurrentLoanStatusOwnerComponent,
    CopyCurrentLoanStatusRequesterComponent,
    CopyCurrentLoanStatusComponent,
    CopyLoanHistoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CopyCurrentLoanStatusOwnerComponent,
    CopyCurrentLoanStatusRequesterComponent,
    CopyCurrentLoanStatusComponent,
    CopyLoanHistoryComponent
  ]
})
export class CopyModule { }
