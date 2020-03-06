import { Component } from '@angular/core';
import { Personne } from './tps/models/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Formation - Angular ';

  checkConnexion() : boolean {
    if(localStorage.getItem("IsConnected") != null){
      return JSON.parse(localStorage.getItem("IsConnected"))
    } else
      return false;
  }

  logOut(){
    localStorage.setItem("IsConnected", "false");
  }

  logIn(){
    localStorage.setItem("IsConnected", "true");
  }
}
