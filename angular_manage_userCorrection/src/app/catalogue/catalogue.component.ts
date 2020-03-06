import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../tps/models/users';
import { CatalogueService } from '../services/catalogue.service';
import { Catalogue } from '../tps/models/catalogue';
import { StarRatingComponent } from 'ng-starrating';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.sass']
})
export class CatalogueComponent implements OnInit {
  ListProducts : Array<Catalogue> = new Array<Catalogue>(); 

  constructor(private _products : CatalogueService) { 
    console.log("Enter constructor");

    this._products.getProducts().subscribe((data2) =>{
      console.log("Enter GetUsers().subscribe");
      this.ListProducts = data2 as Catalogue[];
      console.log(data2);
  });

}

  ngOnInit() {
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }



}
