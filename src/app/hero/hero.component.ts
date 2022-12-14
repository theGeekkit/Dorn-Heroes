import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Model/hero';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero = {
    name: "",
    imageUrl: "",
    route: "",
    id: 0,
    description: ''
  }

  constructor() { }

  ngOnInit(): void {

  }

}
