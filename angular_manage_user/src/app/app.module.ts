import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router"; 

import { AppComponent } from './app.component';
import { PersonFormComponent } from './manage-person/person-list/person-form/person-form.component';
import { PersonListComponent } from './manage-person/person-list/person-list/person-list.component';
import { AdminPersonComponent } from './manage-person/person-list/admin-person/admin-person.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ManagePersonComponent } from './manage-person/manage-person.component';

const appRoutes : Routes= [
  {path: "home", component: HomeComponent},
  {path: "adminPerson", component: AdminPersonComponent},
  {path: "catalogue", component: CatalogueComponent}, 
  {path: "inscription", component: PersonFormComponent},
  {path : "", redirectTo: "home", pathMatch:"full"}, 
/*   {path:"**", component: PageNotFoundComponent} */
];

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    PersonListComponent,
    AdminPersonComponent,
    HomeComponent,
    CatalogueComponent,
    InscriptionComponent,
    ManagePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
