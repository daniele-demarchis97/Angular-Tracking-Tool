import { Component, OnInit } from '@angular/core';
import { Project } from '@app/models/Project';     //percorso relativo

@Component({
  selector: 'ngprj-project-container',
  templateUrl: './project-container.component.html',
  styleUrls: ['./project-container.component.css']
})
export class ProjectContainerComponent implements OnInit {

  selectedProject!: Project;     // con ! diciamo che il valore non può essere null o undefined, senza di esso angular avrebbe dato errore 

  projects: Project[] = [
    {
      id: 1,
      code: 'NHusYJl',
      name: 'Progetto Alpha',
      description: 'Lorem ipsum dolor sit amet',
      start: new Date(2021, 1, 30),
      end: new Date(2019, 3, 15),
      priority: 'medium',
      done: true,
      tasks: [],
    },
    {
      id: 2,
      code: 'SJieYKl',
      name: 'Progetto Beta',
      description: 'Lorem ipsum dolor sit amet',
      start: new Date(2019, 3, 30),
      end: new Date(2019, 6, 15),
      priority: 'low',
      done: true,
      tasks: [],
    },
    {
      id: 3,
      code: 'POjeGBs',
      name: 'Progetto Gamma',
      description: 'Lorem ipsum dolor sit amet',
      start: new Date(2019, 8, 15),
      priority: 'low',
      done: false,
      tasks: [],
    }
  ];

  constructor() {
    //setTimeout(() => this.projects[0].name = 'Spilungone', 3000);
    //setTimeout(() => delete this.projects[0].end, 3000);
    //setTimeout(() => this.projects = [] , 3000);
    //setTimeout(() => this.projects[0].done = false , 3000);
  }

  ngOnInit(): void {
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  submitProjectForm(project: Project) {
    this.projects.push({
      ...project,
      id: this.projects.length,
      code: Math.random().toString(36).replace('0', '').substring(2, 9),
      done: false,
      tasks: [],
    });
  }

}
