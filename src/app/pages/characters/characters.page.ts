import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from '../../services/storage-service.service';

interface Atrib {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
interface Character {
  image: string;
  name: string;
  lifePoints: number;
  armorClass: number;
  class: string;
  level: number;
  race: string;
  gender: string;
  story: string;
  atrib: Atrib;
  languagesAndProficiencies: string;
  itensList: string;
  spellsList: string;
  xp: number;
  alignment: string;
  speed: number;
  initiative: number;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage {
  public characterList: Character[] = [];
  public showCheckBoxes: boolean;
  public characterHoldingList: boolean[] = [];
  public characterDeleteList: boolean[] = [];

  constructor(public storageService: StorageService, private router: Router) {
  }

  async ngOnInit() {
    await this.loadFromStorage();
  }

  async ionViewWillEnter() {
    await this.loadFromStorage();
  }

  public redirectToCharacter(id: number) {
    this.router.navigate(['/your-character', id]);
  }

  public startPressingCharacter(id: number) {
    if (this.showCheckBoxes) return;
    console.warn('Start pressing');
    this.characterHoldingList[id] = true;
    setTimeout(() => {
      if (this.characterHoldingList[id]) {
        console.warn('Enable delete');
        this.characterDeleteList[id] = true;
        this.showCheckBoxes = true;
      }
    }, 250);
  }

  public disableDelete() {
    this.showCheckBoxes = false;
    this.characterDeleteList.length = 0;
    this.characterList.forEach(() => {
      this.characterDeleteList.push(false);
    });
  }

  public async deleteCharacters() {
    this.showCheckBoxes = false;
    let deleteChars: Character[] = [];
    this.characterDeleteList.forEach((v, k) => {
      if (v) deleteChars.push(this.characterList[k]);
    });
    this.characterList = this.characterList.filter((el) => !deleteChars.includes(el));
    await this.saveAtStorage();
    await this.loadFromStorage();
  }

  public toggleDelete(id: number) {
    if (!this.showCheckBoxes) return;
    console.warn('Toggle delete');
    this.characterDeleteList[id] = !this.characterDeleteList[id];
    let disableDeleteCheckbox = true;
    this.characterDeleteList.forEach((e) => {
      if (e) disableDeleteCheckbox = false;
    });
    if (disableDeleteCheckbox) this.showCheckBoxes = false;
  }

  public stopPressingCharacter(id: number) {
    if (this.showCheckBoxes) return;
    console.warn('Stop pressing');
    this.characterHoldingList[id] = false;
  }

  private async loadFromStorage() {
    const loadedCharacter: Character[] | null = await this.storageService.get(
      'characters'
    );
    if (loadedCharacter) {
      this.showCheckBoxes = false;
      this.characterList.length = 0;
      this.characterHoldingList.length = 0;
      this.characterDeleteList.length = 0;
      this.characterList.push(...loadedCharacter);
      this.characterList.forEach(() => {
        this.characterHoldingList.push(false);
        this.characterDeleteList.push(false);
      });
      console.info(loadedCharacter);
    } else {
      await this.saveAtStorage();
    }
  }

  private async saveAtStorage() {
    await this.storageService.set('characters', this.characterList);
  }
}
