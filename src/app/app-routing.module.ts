import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { }

const routes: Routes = [
  {path: 'Alexis Polux', component: },
  {path: 'Fafnir Rann', component: },
  {path: 'Sigismund', component: },
  {path: 'Tor Garadon', component: },
  {path: 'Dorn', component: },
  {path: '', redirectTo:}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,

  ]
})
export class AppRoutingModule { }
