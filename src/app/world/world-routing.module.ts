import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldComponent} from './pages/world/world.component';
import {BooksComponent} from './pages/books/books.component';
import {AuthorsComponent} from './pages/authors/authors.component';
import {NewAuthorComponent} from './pages/new-author/new-author.component';


const routes: Routes = [
  {
    path: '',
    component: WorldComponent,
    children: [
      { path: 'books', component: BooksComponent },
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
