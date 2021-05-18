import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from "../../services/storage-service";

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
  constructor(public storageService: StorageService, private router: Router) {

  }

  public characterList : Character[] = [
    {
      image : 'https://i.imgur.com/42paeQR.jpg',
      name : 'John Silver-Knife',
      class : 'Rogue',
      level : 2,
      race : 'Human',
    },
    {
      image : 'https://media.tenor.com/images/a01030b83985fc4743e04f3ad7f7d1b1/tenor.gif',
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
    },
    {
      image : 'https://i.imgur.com/zv19ndH.jpg',
      name : 'Doritos',
      class : 'Mage',
      level : 11,
      race : 'Elf',
    },
    {
      image : 'https://i.imgur.com/f56w2ez.gif',
      name : 'Metalhead',
      class : 'Bard',
      level : 5,
      race : 'Human',
    },
    {
      image : 'https://media1.tenor.com/images/ce15c4ff31e7f18221a00ec55404f7c1/tenor.gif?itemid=15225693',
      name : 'Laurício',
      class : 'Demon',
      level : 9999,
      race : 'Cat',
    }, 
  ];

  async ngOnInit() {
    await this.loadFromStorage();
  }

  async ionViewWillEnter() {
    await this.loadFromStorage();
  }

  public redirectToCharacter(id: any) {
    this.router.navigate(['/your-character', id]);
  }

  private async loadFromStorage() {
    const loadedCharacter: Character[] | null = await this.storageService.get('characters');
    if (loadedCharacter) {
      this.characterList.length = 0;
      this.characterList.push(...loadedCharacter);
      console.info(loadedCharacter);
    } else {
      await this.saveAtStorage();
    }
  }

  private async saveAtStorage() {
    await this.storageService.set('characters', this.characterList);
  }
}
