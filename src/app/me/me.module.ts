import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeRoutingModule } from './me-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import {CommunityComponent} from './components/community/community.component';
import {PhotoComponent} from './components/photo/photo.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    CommunityComponent,
    PhotoComponent,
    UserSettingsComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class MeModule { }
