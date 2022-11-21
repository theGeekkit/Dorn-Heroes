import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BigPictureComponent } from './big-picture/big-picture.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { AlexisPoluxComponent } from './alexis-polux/alexis-polux.component';
import { FafnirRannComponent } from './fafnir-rann/fafnir-rann.component';
import { SigismundComponent } from './sigismund/sigismund.component';
import { TorGaradonComponent } from './tor-garadon/tor-garadon.component';
import { DornComponent } from './dorn/dorn.component';


const appRoutes: Routes = [
  {
    path: 'Alexis Polux',
    component: AlexisPoluxComponent
  },
  {
    path: 'Fafnir Rann',
    component: FafnirRannComponent
  },
  {
    path: 'Sigismund',
    component: SigismundComponent
  },
  {
    path: 'Tor Garadon',
    component: TorGaradonComponent
  },
  {
    path: 'Dorn',
    component: DornComponent
  },
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: HeroesListComponent
  },

  // {path: '', component: AppComponent}
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
