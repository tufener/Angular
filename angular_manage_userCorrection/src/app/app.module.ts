import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RatingModule } from 'ng-starrating';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router"; 
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { PersonFormComponent } from './manage-person/person-form/person-form.component';
import { PersonListComponent } from './manage-person/person-list/person-list.component';
import { AdminPersonComponent } from './manage-person/admin-person/admin-person.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  { path : "home", component : HomeComponent },
  { path : "users", component : AdminPersonComponent },
  { path : "catalogue", component : CatalogueComponent },
  { path : "inscription", component : PersonFormComponent },
  { path : "" , redirectTo : "home", pathMatch: "full"},
  { path : "**", component : PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonListComponent,
    AdminPersonComponent,
    HomeComponent,
    PageNotFoundComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    RatingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
