import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input () leftRight !: string
  @Input () imgSrc !: string
  @Input () description !: string
  @Input () title !: string
  @Input () tags !: string
  @Input () githubLink !: string
  @Input () liveLink !: string

}
