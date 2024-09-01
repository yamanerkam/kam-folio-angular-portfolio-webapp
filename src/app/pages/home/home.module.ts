import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgxTypedJsModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
