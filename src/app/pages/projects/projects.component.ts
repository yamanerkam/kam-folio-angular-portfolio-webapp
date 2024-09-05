import { Component } from '@angular/core';
import data from '../../../assets/projects.json'
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  dataArray:any[]= data.projects
  constructor(){
    console.log(this.dataArray)
  }

}
