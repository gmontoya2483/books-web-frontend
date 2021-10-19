import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';
import {CommunityStatistics, FollowStatistics} from '../../interfaces/statistic.interface';

@Component({
  selector: 'app-follow-statistics',
  templateUrl: './follow-statistics.component.html',
  styles: [
  ]
})
export class FollowStatisticsComponent implements OnInit {

  public followStatistics: FollowStatistics;
  public loading = false;

  constructor(private statisticService: StatisticsService) { }

  ngOnInit(): void {
    this.getFollowStatistics();
  }


  getFollowStatistics() {
    this.loading = true;
    this.statisticService.getFollowStatistics().subscribe((resp: FollowStatistics) => {
      this.followStatistics = resp;
      this.loading = false;
    });
  }

}
