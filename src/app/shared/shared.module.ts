import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewImagePipe } from './pipes/new-image.pipe';



@NgModule({
  declarations: [NewImagePipe],
  imports: [
    CommonModule
  ],
  exports: [NewImagePipe]
})
export class SharedModule { }
