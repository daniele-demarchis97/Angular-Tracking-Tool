import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '@app/models/Project';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {

  projects$!: Observable<Project[]>;

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.projects$ = this.projectService.getAll();
  }

  selectProject(project: Project) {
    this.router.navigate(['/projects', 'detail', project.id]);
  }

  submitProjectForm(project: Project) {
    this.projectService.add(project).subscribe(data => this.projects$ = this.projectService.getAll());
  }

}
