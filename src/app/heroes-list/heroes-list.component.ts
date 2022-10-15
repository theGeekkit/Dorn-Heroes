import { Component, OnInit } from '@angular/core';
import { Hero } from '../Model/hero';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  hero: Hero[] = [];


  constructor(public heroService: HeroService) { }

  ngOnInit(): void {

  }


}
