import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/tps/models/personne';

@Component({
  selector: 'app-admin-person',
  templateUrl: './admin-person.component.html',
  styleUrls: ['./admin-person.component.sass']
})
export class AdminPersonComponent implements OnInit {
  
  listUser : Array<Personne> = new Array<Personne>();
  currentUser : Personne = new Personne();
  title = 'Gestion des utilisateurs';

  constructor() { }

  ngOnInit() {
  }

  catchNewUser(userData : Personne){
    this.currentUser = userData;

    let p1 = new Personne();
    p1.Nom = userData.Nom;
    p1.Prenom = userData.Prenom;
    p1.Email = userData.Email;
    p1.Password = userData.Password;
    p1.Telephone = userData.Telephone;
    p1.DateNaissance = userData.DateNaissance;
    p1.UserProfil = userData.UserProfil;
    this.listUser.push(p1);

    this.currentUser = new Personne();
  }

  DeletePerson(selectedItem : number){
    this.listUser.find((x)=> {
      return x.Id == selectedItem
    });
  }

  ModifyPerson(selectedItem : number) {
    this.currentUser =  this.listUser.find((x)=> {
                          return x.Id == selectedItem
                        });
    this.currentUser.IsCreate = false;
  }

}
