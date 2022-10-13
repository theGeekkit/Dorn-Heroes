import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { }

const routes: Routes = [
  {path: 'Alexis Polux', component:HeroesListComponent },
  {path: 'Fafnir Rann', component:HeroesListComponent },
  {path: 'Sigismund', component:HeroesListComponent },
  {path: 'Tor Garadon', component:HeroesListComponent },
  {path: 'Dorn', component: HeroesListComponent },
  {path: '', redirectTo:'app-component', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
