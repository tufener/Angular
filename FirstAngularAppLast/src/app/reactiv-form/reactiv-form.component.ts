import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne, Profil as Profils } from 'src/app/tps/models/personne';
import { FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-person-form',
  templateUrl: './reactiv-form.component.html',
  styleUrls: ['./reactiv-form.component.sass']
})
export class ReactivFormComponent implements OnInit {
  @Input() currentUser : Personne = new Personne();
  @Output() ratingUserData : EventEmitter<Personne> = new EventEmitter<Personne>();
  Profils : string[] = Profils.values();

  userForm = new FormGroup({
    Email: new FormControl(),
    Nom: new FormControl(),
    Prenom: new FormControl(),
    DatedeNaissance: new FormControl(),
    Profil: new FormControl(),
    Tel: new FormControl(),
    Password: new FormControl(),

  })

  constructor() { }

  ngOnInit() {
  }

  submitUser(){
    console.log(this.userForm.value);
  }

  AddUser(){
    this.ratingUserData.emit(this.currentUser);
  }

}
