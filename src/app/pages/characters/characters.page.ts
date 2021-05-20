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

  public defaultStory = 'Put your description here';

  public defaultItens = 'Put your description here';

  public defaultSpells = 'Put your description here';

  public characterList : Character[] = [
    {
      image : 'https://i.imgur.com/ThCwYa1.png',
      name : 'Hagrid Treehugger',
      class : 'Druid',
      level : 7,
      race : 'High elf',
      gender: 'Male',
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
      image : 'https://i.imgur.com/SpDNgVh.png',
      name : 'Hael Darkstorm',
      class : 'Warlock',
      level : 4,
      race : 'Tiefling',
      gender: 'Male',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : {
        strength : 17,
        dexterity : 10,
        constitution : 12,
        intelligence : 8,
        wisdom : 11,
        charisma : 3
      }
    },
    {
      image : 'https://i.imgur.com/KFl2nRN.png',
      name : 'Hemillion Rustybeard',
      class : 'Barbarian',
      level : 10,
      race : 'Dwarf',
      gender: 'Male',
      story: this.defaultStory,
      itensList: this.defaultItens,
      spellsList: this.defaultSpells,
      atrib : {
        strength : 15,
        dexterity : 12,
        constitution : 14,
        intelligence : 10,
        wisdom : 8,
        charisma : 10
      }
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
