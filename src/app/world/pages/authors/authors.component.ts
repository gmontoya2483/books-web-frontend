import { Component, OnInit } from '@angular/core';
import {Pagination} from '../../../shared/interfaces/pagination.interface';
import {Author} from '../../../shared/interfaces/author.interface';
import {AuthorsService} from '../../services/authors/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styles: [
  ]
})
export class AuthorsComponent implements OnInit {

  public pageSize = 25;
  public search = '';
  public pagination: Pagination = undefined;

  private _authors: Author [] = [];

  get authors(): Author[]{
    return [... this._authors];
  }

  constructor(private authorService: AuthorsService) {
    this.getAuthors();
  }

  ngOnInit(): void {
  }

  getAuthors(page = 1) {
    if (this.search.length < 3){
      this.search =  '';
    }
    this.authorService.getAllAuthors(this.pageSize, page, this.search )
      .subscribe((resp: { pagination: Pagination, authors: Author [] }) => {
        this.pagination = resp.pagination;
        this._authors = resp.authors;
        this.pageSize = this.pagination.pageSize;
      });
  }


  goToPage(page) {
    this.getAuthors(page);
  }

  searchAuthor() {
    this.getAuthors();
  }

  changePageSize() {
    this.getAuthors();
  }

  showAuthor(_id: string): void {
    console.log(`Ir al Autor: ${_id}`);

  }

  newAuthor(): void {
    console.log(`Nuevo Autor`);

  }
}
