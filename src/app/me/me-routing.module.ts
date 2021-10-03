import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './pages/profile/profile.component';
import {LibraryComponent} from './pages/library/library.component';
import {RequestedLoanHistoryComponent} from './pages/requested-loan-history/requested-loan-history.component';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'requestedLoanHistory',
    component: RequestedLoanHistoryComponent
  },
  {
    path: '**',
    redirectTo: '/me/profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeRoutingModule { }
