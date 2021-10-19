import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { BooksStatisticsComponent } from './components/books-statistics/books-statistics.component';
import { CommunityStatisticsComponent } from './components/community-statistics/community-statistics.component';
import { FollowStatisticsComponent } from './components/follow-statistics/follow-statistics.component';
import { MyCopiesStatisticsComponent } from './components/my-copies-statistics/my-copies-statistics.component';


@NgModule({
  declarations: [
    HomeComponent,
    BooksStatisticsComponent,
    CommunityStatisticsComponent,
    FollowStatisticsComponent,
    MyCopiesStatisticsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
