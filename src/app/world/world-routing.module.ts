import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldComponent} from './pages/world/world.component';
import {BooksComponent} from './pages/books/books.component';
import {AuthorsComponent} from './pages/authors/authors.component';
import {NewAuthorComponent} from './pages/new-author/new-author.component';
import {NewBookComponent} from './pages/new-book/new-book.component';
import {ViewBookComponent} from './pages/view-book/view-book.component';


const routes: Routes = [
  {
    path: '',
    component: WorldComponent,
    children: [
      { path: 'books', component: BooksComponent },
      { path: 'books/new', component: NewBookComponent },
      { path: 'books/view/:id', component: ViewBookComponent },
      { path: 'authors', component: AuthorsComponent },
      { path: 'authors/new', component: NewAuthorComponent },
      { path: '**', redirectTo: '/world/books'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldRoutingModule { }
