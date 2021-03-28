import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldRoutingModule } from './world-routing.module';
import { WorldComponent } from './pages/world/world.component';
import { BooksComponent } from './pages/books/books.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [WorldComponent, BooksComponent, AuthorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WorldRoutingModule
  ]
})
export class WorldModule { }
