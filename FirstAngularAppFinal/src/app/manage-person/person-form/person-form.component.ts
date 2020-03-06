import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne, Profil as Profils } from '../../tps/models/personne';
import { IsDirty } from 'src/app/shared/verify-saved-sign-up.guard';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.sass']
})

export class PersonFormComponent implements OnInit, IsDirty {
  componentIsDirty :boolean = false;
  
  
  @Input() currentUser : Personne = new Personne();
  @Output() ratingUserData : EventEmitter<Personne> = new EventEmitter<Personne>();
  
  Profils : string[] = Profils.values();
  constructor() { }

  ngOnInit() {
  }

  AddUser(){
    this.componentIsDirty = true;


    localStorage.setItem("IsConnected", 'true');
    
    this.ratingUserData.emit(this.currentUser);    
  }

  isDirty() {
    return this.componentIsDirty;
  }

}
