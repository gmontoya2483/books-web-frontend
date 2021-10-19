import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';
import {BooksStatistics} from '../../interfaces/statistic.interface';

@Component({
  selector: 'app-books-statistics',
  templateUrl: './books-statistics.component.html',
  styles: [
  ]
})
export class BooksStatisticsComponent implements OnInit {

  public booksStatistics: BooksStatistics;
  public loading = false;

  constructor(private statisticService: StatisticsService) { }

  ngOnInit(): void {
    this.getBooksStatistics();
  }


  getBooksStatistics() {
    this.loading = true;
    this.statisticService.getBooksStatistics().subscribe((resp: BooksStatistics) => {
      this.booksStatistics = resp;
      this.loading = false;
    });
  }



}
