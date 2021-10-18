import { Component, Input, OnInit } from '@angular/core';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() project!: Project;       //la proprietà adesso potrà essere vista dall'esterno dal padre (n.b. aggiunta anche in import) COMUNICAZIONE PARENT-CHILD
//project!: Partial<Project>;       rende i parametri opzionali e non darà errore

  constructor() { 
  //this.project = { id: 1, name: 'Prova'};
  }

  ngOnInit(): void {
  }

}
