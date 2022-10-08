import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  hero: Hero[] = [
    {
      name:"Alexis Polux",
      imageUrl:"https://i.postimg.cc/9fb1pdmH/Alexis-Pollux-portrait.jpg"
    },
    {
      name:"Fafnir Rann",
      imageUrl:"https://i.postimg.cc/RVjnkNs6/IF-warlord-Fafnir-portrait.jpg"
    },
    {
      name:"Sigismund",
      imageUrl:"https://i.postimg.cc/G2vnMg5S/sigismund-portrait.jpg"
    },
    {
      name:"Tor Garadon",
      imageUrl:"https://i.postimg.cc/1RLJR546/Tor-Garadon-02-650x650.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
