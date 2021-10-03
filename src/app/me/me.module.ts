import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import {CommunityComponent} from './components/community/community.component';
import {PhotoComponent} from './components/photo/photo.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { LibraryComponent } from './pages/library/library.component';
import {CopyModule} from '../copy/copy.module';
import { RequestedLoanHistoryComponent } from './pages/requested-loan-history/requested-loan-history.component';



@NgModule({
  declarations: [
    ProfileComponent,
    CommunityComponent,
    PhotoComponent,
    UserSettingsComponent,
    LibraryComponent,
    RequestedLoanHistoryComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CopyModule
  ]
})
export class MeModule { }
