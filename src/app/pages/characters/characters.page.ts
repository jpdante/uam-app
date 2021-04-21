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
      class : 'Ladino',
      level : 2,
      race : 'Humano',
    },
    {
      image : 'https://i.imgur.com/ycL7BE4.jpg',
      name : 'Greenskin',
      class : 'Guerreiro',
      level : 3,
      race : 'Goblin',
    },
    {
      image : 'https://i.imgur.com/ThCwYa1.png',
      name : 'Hagrid Treehugger',
      class : 'Druida',
      level : 7,
      race : 'Elfo Alto',
    },
    {
      image : 'https://i.imgur.com/SpDNgVh.png',
      name : 'Hael Darkstorm',
      class : 'Bruxo',
      level : 4,
      race : 'Tiefling',
    },
    {
      image : 'https://i.imgur.com/KFl2nRN.png',
      name : 'Hemillion Rustybeard',
      class : 'Barbáro',
      level : 10,
      race : 'Anão',
    },
    {
      image : 'https://i.imgur.com/b9CVOhg.png',
      name : 'Fireflute',
      class : 'Bardo',
      level : 1,
      race : 'Draconato',
    }
  ];

  themeToggle(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme','dark')
    }else{
      document.body.setAttribute('color-theme','light')
    }
  }
}
