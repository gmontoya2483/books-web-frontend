import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldComponent} from './pages/world/world.component';
import {BooksComponent} from './pages/books/books.component';
import {AuthorsComponent} from './pages/authors/authors.component';
import {NewAuthorComponent} from './pages/new-author/new-author.component';
import {NewBookComponent} from './pages/new-book/new-book.component';
import {ViewBookComponent} from './pages/view-book/view-book.component';
import {ViewAuthorComponent} from './pages/view-author/view-author.component';


const routes: Routes = [
  {
    path: '',
    component: WorldComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'books/new', component: NewBookComponent },
      { path: 'books/view/:bookId', component: ViewBookComponent },
      { path: 'authors', component: AuthorsComponent },
      { path: 'authors/new', component: NewAuthorComponent },
      { path: 'authors/view/:id', component: ViewAuthorComponent },
      { path: 'authors/view/:authorId/books/:bookId', component: ViewBookComponent },
      { path: 'copies/view/:copyId/books/:bookId', component: ViewBookComponent },
      { path: '**', redirectTo: '/world/books'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule { }
