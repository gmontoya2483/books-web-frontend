import { Component, OnInit } from '@angular/core';
import {CommunityStatistics, MyCopiesStatistics} from '../../interfaces/statistic.interface';
import {StatisticsService} from '../../services/statistics.service';

@Component({
  selector: 'app-my-copies-statistics',
  templateUrl: './my-copies-statistics.component.html',
  styles: [
  ]
})
export class MyCopiesStatisticsComponent implements OnInit {

  public myCopiesStatistics: MyCopiesStatistics;
  public loading = false;


  constructor(private statisticService: StatisticsService) { }

  ngOnInit(): void {
    this.getMyCopiesStatistics();
  }

  getMyCopiesStatistics() {
    this.loading = true;
    this.statisticService.getMyCopiesStatistics().subscribe((resp: MyCopiesStatistics) => {
      this.myCopiesStatistics = resp;
      this.loading = false;
    });
  }

}
