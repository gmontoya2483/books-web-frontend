import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorldRoutingModule } from './world-routing.module';
import { WorldComponent } from './pages/world/world.component';
import { BooksComponent } from './pages/books/books.component';
import { AuthorsComponent } from './pages/authors/authors.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewAuthorComponent } from './pages/new-author/new-author.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { ViewBookComponent } from './pages/view-book/view-book.component';
import {SharedModule} from '../shared/shared.module';
import { ViewAuthorComponent } from './pages/view-author/view-author.component';
import { AuthorBooksComponent } from './components/author-books/author-books.component';
import { CopyDetailsComponent } from './components/copy-details/copy-details.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import {CopyModule} from '../copy/copy.module';


@NgModule({
    declarations: [
        WorldComponent,
        BooksComponent,
        AuthorsComponent,
        NewAuthorComponent,
        NewBookComponent,
        ViewBookComponent,
        ViewAuthorComponent,
        AuthorBooksComponent,
        CopyDetailsComponent,
        BookDetailsComponent
    ],
    exports: [

    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WorldRoutingModule,
    SharedModule,
    CopyModule
  ]
})
export class WorldModule { }
