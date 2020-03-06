import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne, Profil as Profils } from '../../tps/models/personne';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.sass']
})
export class PersonFormComponent implements OnInit {
  @Input() currentUser : Personne = new Personne();
  @Output() ratingUserData : EventEmitter<Personne> = new EventEmitter<Personne>();

  Profils : string[] = Profils.values();
  constructor() { }

  ngOnInit() {
  }

  AddUser(){
    this.ratingUserData.emit(this.currentUser);
  }

}
