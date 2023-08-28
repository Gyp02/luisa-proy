import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/coolever/navbar/navbar.component';

import { HomeComponent } from './component/coolever/home/home.component';
import { ContactComponent } from './component/coolever/contact/contact.component';

import { NavbarLinksComponent } from './component/navbar-links/navbar-links.component';
import { ContentPagesComponent } from './component/content-pages/content-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
    HomeComponent,
    ContactComponent,

    NavbarLinksComponent,
     ContentPagesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

