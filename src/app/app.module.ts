import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroComponent } from './hero/hero.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AlexisPoluxComponent } from './alexis-polux/alexis-polux.component';
import { FafnirRannComponent } from './fafnir-rann/fafnir-rann.component';
import { SigismundComponent } from './sigismund/sigismund.component';
import { TorGaradonComponent } from './tor-garadon/tor-garadon.component';
import { DornComponent } from './dorn/dorn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesListComponent,
    HeroComponent,
    AlexisPoluxComponent,
    FafnirRannComponent,
    SigismundComponent,
    TorGaradonComponent,
    DornComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
