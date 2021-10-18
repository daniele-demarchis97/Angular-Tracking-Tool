import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Project } from '@app/models/Project';

@Component({
  selector: 'ngprj-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  @Output() submitted = new EventEmitter<Project>();    //ngForm di project-form passerà il parametro f al metodo presente in project-form.ts che attreverso l'event emitter di tipo
                                                        //Project emetterà il contenuto del form che sarà ascoltato nel nostro genitore tramite l'event binding sull'evento custom 
                                                        //(ovvero EventEmitter). Il valore dell'evento sarà posizionato in $event che sarà il parametro del metodo già utilizzato
                                                        // in project.ts che si chiama submitProjectForm (nb abbiamo cambiato il parametro poichè nel eventemitter specifichiamo
                                                        // che il parametro deve essere di tipo Project)
  constructor() { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    this.submitted.emit({ ...f.value });
  }

}
