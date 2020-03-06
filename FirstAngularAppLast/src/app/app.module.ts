import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PersonFormComponent } from './manage-person/person-form/person-form.component';
import { PersonListComponent } from './manage-person/person-list/person-list.component';
import { AdminPersonComponent } from './manage-person/admin-person/admin-person.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductDetailComponent } from './catalogue/product-detail/product-detail.component';
import { ReactivFormComponent } from './reactiv-form/reactiv-form.component';

const routes: Routes = [
  { path : "home", component : HomeComponent },
  { path : "users", component : AdminPersonComponent },
  { path : "catalogue", component : CatalogueComponent },
  { path : "catalogue/:id", component : ProductDetailComponent},
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
    CatalogueComponent,
    ReactiveFormsModule,
    ProductDetailComponent,
    ReactivFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
