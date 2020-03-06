import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../tps/models/users';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.sass']
})
export class CatalogueComponent implements OnInit {
  
  ListUsers : Array<User> = new Array<User>(); 

  constructor( private _users : UsersService) { 
    console.log("Enter constructor");
    
    
    this._users.GetUsers().subscribe((data) =>{
      console.log("Enter GetUsers().subscribe");
      this.ListUsers = data as User[];
      console.log(data);
    });
  }

  ngOnInit() {
  }



}
