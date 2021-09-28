import {Component, Input, OnInit} from '@angular/core';
import {Copy, currentLoanStatusEnum} from '../../../copy/interfaces/copy.interface';
import {CopyService} from '../../../copy/services/copy/copy.service';
import {Book} from '../../interfaces/book.interface';
import {MeService} from '../../../me/services/me/me.service';

@Component({
  selector: 'app-copy-details',
  templateUrl: './copy-details.component.html',
  styles: [
  ]
})
export class CopyDetailsComponent implements OnInit {

  public currentLoanStatus = currentLoanStatusEnum;

  @Input() copyId: string;
  copy: Copy;

  constructor(private copyService: CopyService,
              private meService: MeService) { }

  ngOnInit(): void {
    this.getCopy();
  }


  private getCopy() {
    this.copyService.geSingleCopy(this.copyId).subscribe(
      (resp: Copy) => {
        this.copy = resp;
      }
    );

  }

  isCopyOwner() {
    return this.copy.owner._id === this.meService.me._id;
  }

  isCopyRequester() {
    return this.copy.currentLoan && this.copy.currentLoan.user._id === this.meService.me._id;
  }
}
