import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from "../../services/storage-service.service";

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
  lifePoints : number;
  armorClass : number;
  class : string;
  level : number;
  race : string;
  gender: string;
  story : string;
  atrib : Atrib;
  languagesAndProficiencies: string;
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

  public characterList : Character[] = [];

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
