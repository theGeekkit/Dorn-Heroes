import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  hero: Hero[] = [
    {
      id: 1,
      name:"Alexis Polux",
      imageUrl:"https://i.postimg.cc/9fb1pdmH/Alexis-Pollux-portrait.jpg"
      bigImageUrl:'',
      description:''
    },
    {
      id: 2,
      name:"Fafnir Rann",
      imageUrl:"https://i.postimg.cc/RVjnkNs6/IF-warlord-Fafnir-portrait.jpg"
      bigImageUrl:'',
      description:''
    },
    {
      id: 3,
      name:"Sigismund",
      imageUrl:"https://i.postimg.cc/G2vnMg5S/sigismund-portrait.jpg"
      bigImageUrl:'',
      description:''
    },
    {
      id: 4,
      name:"Tor Garadon",
      imageUrl:"https://i.postimg.cc/1RLJR546/Tor-Garadon-02-650x650.jpg"
      bigImageUrl:'',
      description:''
    },
    {
      id: 5,
      name:"Dorn",
      imageUrl:""
      bigImageUrl:'',
      description:''
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

gotoList() {
  this.router.navigate(['/src/app/app.component.html'])
}

}
