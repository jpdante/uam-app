import { Component, OnInit } from '@angular/core';

interface Character {
  image : string;
  name : string;
  class : string;
  level : number;
  race : string;
}
@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage {

  public characterList : Character[] = [
    {
      image : 'https://i.imgur.com/42paeQR.jpg',
      name : 'John Silver-Knife',
      class : 'Rogue',
      level : 2,
      race : 'Human',
    },
    {
      image : 'https://i.imgur.com/ycL7BE4.jpg',
      name : 'Greenskin',
      class : 'Fighter',
      level : 3,
      race : 'Goblin',
    },
    {
      image : 'https://i.imgur.com/ThCwYa1.png',
      name : 'Hagrid Treehugger',
      class : 'Druid',
      level : 7,
      race : 'High elf',
    },
    {
      image : 'https://i.imgur.com/SpDNgVh.png',
      name : 'Hael Darkstorm',
      class : 'Warlock',
      level : 4,
      race : 'Tiefling',
    },
    {
      image : 'https://i.imgur.com/KFl2nRN.png',
      name : 'Hemillion Rustybeard',
      class : 'Barbarian',
      level : 10,
      race : 'Dwarf',
    },
    {
      image : 'https://i.imgur.com/b9CVOhg.png',
      name : 'Fireflute',
      class : 'Bard',
      level : 1,
      race : 'Dragonborn',
    }
  ];
}
