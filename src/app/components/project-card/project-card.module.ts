import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ProjectCardComponent],
  imports: [
    CommonModule, CardModule, ButtonModule,
  ], exports: [
    ProjectCardComponent
  ]
})
export class ProjectCardModule { }
