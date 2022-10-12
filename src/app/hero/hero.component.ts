import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../Model/hero';
import { BigPictureComponent } from '../big-picture/big-picture.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero = {
    name: "",
    imageUrl: ""
}

  constructor() { }

  ngOnInit(): void {
  }

}