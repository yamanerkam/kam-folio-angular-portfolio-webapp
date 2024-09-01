import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';

import { ProjectCardModule } from "../../components/project-card/project-card.module";

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectCardModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
