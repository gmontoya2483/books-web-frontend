import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';
import {BooksStatistics, CommunityStatistics} from '../../interfaces/statistic.interface';

@Component({
  selector: 'app-community-statistics',
  templateUrl: './community-statistics.component.html',
  styles: [
  ]
})
export class CommunityStatisticsComponent implements OnInit {

  public communityStatistics: CommunityStatistics;
  public loading = false;

  constructor(private statisticService: StatisticsService) { }

  ngOnInit(): void {
    this.getCommunityStatistics();
  }


  getCommunityStatistics() {
    this.loading = true;
    this.statisticService.getCommunityStatistics().subscribe((resp: CommunityStatistics) => {
      this.communityStatistics = resp;
      this.loading = false;
    });
  }

}
