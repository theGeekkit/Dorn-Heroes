import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/hero';
import { Input } from '@angular/core';
import { HeroService } from '../hero.service';


@Component({
  selector: 'bigPicture',
  templateUrl: './big-picture.component.html',
  styleUrls: ['./big-picture.component.css']
})
export class BigPictureComponent implements OnInit {

  @Input() hero: Hero = {
    id: 0,
    name: '',
    imageUrl: '',
    bigImageUrl: '',
    description: ''
  }

  constructor(public heroService: HeroService) { }

  ngOnInit(): void {
  }


}
