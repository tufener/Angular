import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { Personne } from '../models/personne';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.sass']
})

/* export class AppareilComponent implements OnInit {

  @Input() appareilName:string; 
  infoEmail:string;
  infoNom:string;
  infoPrenom:string;
  infoDatedeNaissance:string;
 

  
  constructor() { }

  ngOnInit(): void {
  } */

export class AppareilComponent implements OnChanges {


  ngOnChanges(): void {
  }

  @Input() appareilName: string;
  @Output() ratingAppareilName: EventEmitter<number> = new EventEmitter<number>();
  empList: Array<Personne> = [];
  infoEmail: string;
  infoNom: string;
  infoPrenom: string;
  infoPassword:string;
  infoDatedeNaissance: string;
  infoProfil: string; 

  NotifyAppareilName() {
    console.log("classe fille");
    this.ratingAppareilName.emit(this.appareilName.length);
  }

  constructor() { }

  enregistrerButton() {
    console.log("Email: " + this.infoEmail + "\n" + "Nom: " + this.infoNom + "\n" + "Prenom: " + this.infoPrenom + "\n" + "Date de naissance: " + this.infoDatedeNaissance);

  }

/*   AddUser(){
    console.log(this.infoEmail,this.infoNom, this.infoPrenom,this.infoPassword, this.infoDatedeNaissance, this.infoProfil);
    let customObj = new Personne();
    customObj.Email;
    customObj.Nom; 
    customObj.Prenom;
    customObj.Password;
    customObj.Date;
    customObj.Profil;
    this.empList.push(customObj);
    
  } */

}
