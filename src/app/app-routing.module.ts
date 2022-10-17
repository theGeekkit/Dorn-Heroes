import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
<<<<<<< HEAD

import { AppComponent } from './app.component';
=======
>>>>>>> 252827d835366a7ae663f1430e67e685a7fd2b12


const appRoutes: Routes = [
  {path: 'Alexis Polux', component:HeroesListComponent },
  {path: 'Fafnir Rann', component:HeroesListComponent },
  {path: 'Sigismund', component:HeroesListComponent },
  {path: 'Tor Garadon', component:HeroesListComponent },
  {path: 'Dorn', component: HeroesListComponent },
<<<<<<< HEAD
  {path: '', component: AppComponent},
=======
  {path: '', redirectTo: '/heroes-list', },
>>>>>>> 252827d835366a7ae663f1430e67e685a7fd2b12
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
