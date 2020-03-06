import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../../tps/models/personne';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.sass']
})
export class PersonListComponent implements OnInit {

  @Input() listUser : Array<Personne> = new Array<Personne>();
  @Output() ratingItemToDelete : EventEmitter<number> = new EventEmitter<number>();
  @Output() ratingItemToOpen : EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  DeletePersonne(selectedPersonId : number){
    alert(selectedPersonId);
    this.ratingItemToDelete.emit(selectedPersonId);
  }

  OpenSelectedPersonne(selectedPersonId : number){
    this.ratingItemToOpen.emit(selectedPersonId);
  }

}
