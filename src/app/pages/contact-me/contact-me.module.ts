import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [ContactMeComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RouterLink
  ],
  exports: [ContactMeComponent]
})
export class ContactMeModule { }
