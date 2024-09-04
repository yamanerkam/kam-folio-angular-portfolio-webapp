import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    RouterLink
  ],exports:[NotFoundComponent]
})
export class NotFoundModule { }
