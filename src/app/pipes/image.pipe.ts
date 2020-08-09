import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '../../environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {
  private baseUrl = `${environment.booksServerUrl}/api/img`;

  transform(value: string | null, type: 'users'|'books'): string {
    if (!value){
      return `${this.baseUrl}/${type}/no-img`;
    }
    return `${this.baseUrl}/${type}/${value}`;
  }
}
