import {Injectable} from '@angular/core';
import { Hero } from './Model/hero';



@Injectable({
  providedIn: 'root'
})

export class HeroService {

  loadHeroes() {
    this.heroes.next([
      {
        id: 1,
        name:"Alexis Polux",
        imageUrl:"https://i.postimg.cc/9fb1pdmH/Alexis-Pollux-portrait.jpg",
        bigImageUrl:'',
        description:''
      },
      {
        id: 2,
        name:"Fafnir Rann",
        imageUrl:"https://i.postimg.cc/RVjnkNs6/IF-warlord-Fafnir-portrait.jpg",
        bigImageUrl:'',
        description:''
      },
      {
        id: 3,
        name:"Sigismund",
        imageUrl:"https://i.postimg.cc/G2vnMg5S/sigismund-portrait.jpg",
        bigImageUrl:'',
        description:''
      },
      {
        id: 4,
        name:"Tor Garadon",
        imageUrl:"https://i.postimg.cc/1RLJR546/Tor-Garadon-02-650x650.jpg",
        bigImageUrl:'',
        description:''
      },
      {
        id: 5,
        name:"Dorn",
        imageUrl:"",
        bigImageUrl:'',
        description:''
      },
    ])
  }
    // this.heroService.heroes$(heroes => {
    //   this.heroes = heroes
    // })
}
