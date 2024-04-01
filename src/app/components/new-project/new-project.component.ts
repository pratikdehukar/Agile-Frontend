import { Component } from '@angular/core';
import { ProjectNameService } from 'src/app/Useful-Services/project-name.service';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
})
export class NewProjectComponent {
  projectName: String = '';

  constructor(private projectNameService: ProjectNameService) {
    this.projectNameService.projectName = this.projectName;
  }
}
