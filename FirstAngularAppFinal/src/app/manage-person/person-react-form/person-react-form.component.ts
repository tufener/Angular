import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-react-form',
  templateUrl: './person-react-form.component.html',
  styleUrls: ['./person-react-form.component.sass']
})
export class PersonReactFormComponent implements OnInit {

  
  constructor() { }
  
  ngOnInit() {
  }
  
  userForm = new FormGroup({
    Email: new FormControl(),
    Nom: new FormControl()
  });

  submitUser() {
      console.log(this.userForm.value);
  }
}
