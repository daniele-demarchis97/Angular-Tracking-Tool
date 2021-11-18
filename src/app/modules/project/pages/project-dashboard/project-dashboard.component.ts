import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '@app/models/Project';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngprj-project-dashboard',
  templateUrl: './project-dashboard.component.html',
  styleUrls: ['./project-dashboard.component.css']
})
export class ProjectDashboardComponent implements OnInit {

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
