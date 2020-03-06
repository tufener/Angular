import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../models/personne';
import { stringify } from 'querystring';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.sass']
})
export class MonPremierComponent implements OnInit {
  title: string = "Hasret -------- Cadir";
  constructor() { };
  isAuth: boolean = true;
  heroes: string[] = ["Superman", "Batman", "Spiderman", "Tamere"];
  matos: string[] = ["MacBook Pro", "Huawei", "Hp", "Asus", "Samsung", "Razer", "AlienWare", "Dell", "Lenovo"];
  MyPersonne: Personne = new Personne();
  User: Array<Personne> = new Array<Personne>();



  ngOnInit(): void {

  }
  onAllumer() {
    console.log("On allume tout !")
    this.isAuth = !this.isAuth;
    console.log(this.isAuth);
  }

  onTest(event) {
    console.log(event, "class mere");
  }


}
