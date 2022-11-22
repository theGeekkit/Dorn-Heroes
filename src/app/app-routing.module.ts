import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { AlexisPoluxComponent } from './alexis-polux/alexis-polux.component';
import { FafnirRannComponent } from './fafnir-rann/fafnir-rann.component';
import { SigismundComponent } from './sigismund/sigismund.component';
import { TorGaradonComponent } from './tor-garadon/tor-garadon.component';
import { DornComponent } from './dorn/dorn.component';


const appRoutes: Routes = [
  {
    path: 'alexis-polux',
    component: AlexisPoluxComponent
  },
  {
    path: 'fafnir-rann',
    component: FafnirRannComponent
  },
  {
    path: 'sigismund',
    component: SigismundComponent
  },
  {
    path: 'tor-garadon',
    component: TorGaradonComponent
  },
  {
    path: 'dorn',
    component: DornComponent
  },
  {
    path: 'home',
    component: HeroesListComponent
  },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
