import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisAmigosRoutingModule } from './mis-amigos-routing.module';
import { MisAmigosComponent } from './pages/mis-amigos/mis-amigos.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {AmigosFollowerComponent} from './pages/amigos-follower/amigos-follower.component';
import {AmigosFollowingComponent} from './pages/amigos-following/amigos-following.component';
import { AmigosBooksComponent } from './pages/amigos-books/amigos-books.component';
import {CopyModule} from '../copy/copy.module';


@NgModule({
  declarations: [
    MisAmigosComponent,
    AmigosFollowerComponent,
    AmigosFollowingComponent,
    AmigosBooksComponent
  ],
    imports: [
        CommonModule,
        MisAmigosRoutingModule,
        FormsModule,
        SharedModule,
        CopyModule
    ]
})
export class MisAmigosModule { }
