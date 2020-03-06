import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PersonFormComponent } from './manage-person/person-form/person-form.component';
import { PersonListComponent } from './manage-person/person-list/person-list.component';
import { AdminPersonComponent } from './manage-person/admin-person/admin-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonListComponent,
    AdminPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
