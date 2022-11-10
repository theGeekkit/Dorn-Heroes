import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { BigPictureComponent } from './big-picture/big-picture.component';


const appRoutes: Routes = [
  // {path: 'Alexis Polux', component: BigPictureComponent },
  // {path: 'Fafnir Rann', component: BigPictureComponent },
  // {path: 'Sigismund', component: BigPictureComponent },
  // {path: 'Tor Garadon', component: BigPictureComponent },
  // {path: 'Dorn', component: BigPictureComponent },
  {path:"appComponent", component:AppComponent}
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
