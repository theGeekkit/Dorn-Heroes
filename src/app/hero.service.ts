import { Injectable } from "@angular/core";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";
import { Router } from "@angular/router";
import { Hero } from "./Model/hero";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class HeroService{

  heroSelected=0

  constructor() { }

  heroes: Hero[] = [{
    id: 0,
    name:"Alexis Polux",
    imageUrl:"https://i.postimg.cc/9fb1pdmH/Alexis-Pollux-portrait.jpg",
    route: '/alexis-polux',
    description:'Founder of the Crimson fists. Big Boi'
  },
  {
    id: 1,
    name:"Fafnir Rann",
    imageUrl:"https://i.postimg.cc/RVjnkNs6/IF-warlord-Fafnir-portrait.jpg",
    route: '/fafnir-rann',
    description:'Likes to hit things with axes'
  },
  {
    id: 2,
    name:"Sigismund",
    imageUrl:"https://i.postimg.cc/G2vnMg5S/sigismund-portrait.jpg",
    route: '/sigismund',
    description:'Founder of the Black Templar and first Captain of the Imperial Fists'
  },
  {
    id: 3,
    name:"Tor Garadon",
    imageUrl:"https://i.postimg.cc/1RLJR546/Tor-Garadon-02-650x650.jpg",
    route: '/tor-garadon',
    description:'Tor Garadon is a Captain of the Imperial Fists Chapter and the longest-serving commander of the Imperial Fists 3rd Company, the "Sentinels of Terra. He is an unstoppable warrior in whom the lessons of the Primarch Rogal Dorn have been distilled to their most punishing form. Tested on a thousand worlds, he is a master of the battlefield, and an unyielding bulwark against those who would oppose Mankind.'
  },
  {
    id: 4,
    name:"Dorn",
    imageUrl:"https://i.pinimg.com/736x/12/b0/44/12b0444ae94fd43245a09a77f12a94eb.jpg",
    route: '/dorn',
    description:'Rogal Dorn, known as "The Vigilant," the "Praetorian of Terra" and the "Unyielding One," and to his gene-sons by the "wall-name" of "Defiance," was the primarch of the Imperial Fists Space Marine Legion and one of the greatest heroes in the history of the Imperium of Man. A being of thunderous zeal and stone made manifest is how many described the primarch of the VIIth Legion. He had a stern and naturally unsmiling face, topped with an unruly shock of short, bone-white hair. His zeal was the fire of a son who believed in his fathers dream for the Imperium without reservation and without question. To Rogal Dorn there was no higher purpose to the existence of the Legiones Astartes than the unification of Mankind, and the illumination of the Imperiums ideals. This idealism drove Dorn and his Legion ever onwards, never compromising, never stinting in any aspect of duty. The stone in his soul was his ability to bear whatever his father needed of him, an unyielding nature, which made him both a master of defence in war, and an indomitable aggressor on the attack. If the primarchs were the Emperors nature split like white light through a prisms rays, as many Imperial scholars of the Imperial Court suggested during the Great Crusade, then from such a point of view, Rogal Dorn was the Emperors implacable disciple in the pursuit of His cause given flesh; without compromise and in who loyalty and duty was as integral as blood and breath. It was perhaps for this reason, that even before the betrayal of Horus, the Emperor named Dorn the "Praetorian of Terra," and drew him to His side far away from the Warmaster and his newly-forged command. To some among his brother-primarchs, this served only to distance him and his Legion further from them, and those among them who had seen the sins of hubris and obstinacy in Dorns undoubted stubbornness and pride, saw this aggrandisement as a further cause for discord and disquiet. Rogal Dorn, primarch of the Imperial Fists Legion, during the Great Crusade. It was Dorn who supervised the construction of the formidable defences of the Imperial Palace in the Himalazian (Himalayan) Mountains on Terra that would be sorely tested by the forces of Chaos during the epic climax of the Horus Heresy in the terrible Siege of Terra. And it was Dorn who would find the broken body of the Emperor upon the battleship Vengeful Spirit after His terrible final duel with Horus. Dorn placed the Emperors broken body upon the Golden Throne, and received His last spoken instructions on how to shape the future of the war-devastated Imperium. Rogal Dorn allegedly died fighting aboard a Chaos Space Marine vessel in the late 31st Millennium, after attacking the 1st Black Crusades warfleet with a vastly outnumbered Imperial force. Seeing the importance of attacking the enemy fleet while they were still preparing to invade Imperial space, he relied on hit-and-run attacks until his reinforcements could arrive. Dorn was supposedly slain on board the Chaos Despoiler-class Battleship Sword of Sacrilege after leading a desperate attack on its bridge, but in fact the Imperial Fists and their Successor Chapters believe that Dorn is still alive somewhere and may yet return when the Imperium needs him most.'
  },];

  onChosen(selected:  number) {
    this.heroSelected = selected
  }

}

  //make service and observable!!!





