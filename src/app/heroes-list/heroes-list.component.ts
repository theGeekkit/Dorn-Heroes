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
      name:"",
      imageUrl:""
    },
    {
      name:"",
      imageUrl:""
    },
    {
      name:"",
      imageUrl:""
    },
    {
      name:"",
      imageUrl:""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
