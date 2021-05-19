import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from "../../services/storage-service";

interface Atrib {
  strength : number;
  dexterity : number;
  constitution : number;
  intelligence : number;
  wisdom : number;
  charisma : number;
}
interface Character {
  image : string;
  name : string;
  class : string;
  level : number;
  race : string;
  gender: string;
  story : string;
  atrib : Atrib;
  itensList: string;
  spellsList : string;
}


@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage {
  constructor(public storageService: StorageService, private router: Router) {

  }

  public defaultAtribs = {
    strength : 10,
    dexterity : 10,
    constitution : 10,
    intelligence : 10,
    wisdom : 10,
    charisma : 10
  }

  public defaultStory = 'Put your description here';

  public defaultItens = '';

  public defaultSpells = '';

  public characterList : Character[] = [
    {
      image : 'https://i.imgur.com/42paeQR.jpg',
      name : 'John Silver-Knife',
      class : 'Rogue',
      level : 2,
      race : 'Human',
      gender: 'male',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : {
        strength : 9,
        dexterity : 18,
        constitution : 12,
        intelligence : 14,
        wisdom : 11,
        charisma : 17
      }
    },
    {
      image : 'https://media.tenor.com/images/a01030b83985fc4743e04f3ad7f7d1b1/tenor.gif',
      name : 'Greenskin',
      class : 'Fighter',
      level : 3,
      race : 'Goblin',
      gender: 'male',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : this.defaultAtribs
    },
    {
      image : 'https://i.imgur.com/ThCwYa1.png',
      name : 'Hagrid Treehugger',
      class : 'Druid',
      level : 7,
      race : 'High elf',
      gender: 'male',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : this.defaultAtribs
    },
    {
      image : 'https://i.imgur.com/SpDNgVh.png',
      name : 'Hael Darkstorm',
      class : 'Warlock',
      level : 4,
      race : 'Tiefling',
      gender: 'male',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : this.defaultAtribs
    },
    {
      image : 'https://i.imgur.com/KFl2nRN.png',
      name : 'Hemillion Rustybeard',
      class : 'Barbarian',
      level : 10,
      race : 'Dwarf',
      gender: 'male',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : this.defaultAtribs
    },
    {
      image : 'https://i.imgur.com/b9CVOhg.png',
      name : 'Fireflute',
      class : 'Bard',
      level : 1,
      race : 'Dragonborn',
      gender: 'female',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : this.defaultAtribs
    },
    {
      image : 'https://i.imgur.com/zv19ndH.jpg',
      name : 'Doritos',
      class : 'Mage',
      level : 11,
      race : 'Elf',
      gender: 'female',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : this.defaultAtribs
    },
    {
      image : 'https://i.imgur.com/f56w2ez.gif',
      name : 'Metalhead',
      class : 'Bard',
      level : 5,
      race : 'Human',
      gender: 'male',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : this.defaultAtribs
    },
    {
      image : 'https://media1.tenor.com/images/ce15c4ff31e7f18221a00ec55404f7c1/tenor.gif?itemid=15225693',
      name : 'Laurício',
      class : 'Demon',
      level : 9999,
      race : 'Cat',
      gender: 'furry cat',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : this.defaultAtribs
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
