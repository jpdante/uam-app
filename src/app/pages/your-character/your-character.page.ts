import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service.service';
import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from '@capacitor/camera';
interface Atrib {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}
@Component({
  selector: 'app-your-character',
  templateUrl: './your-character.page.html',
  styleUrls: ['./your-character.page.scss'],
})
export class YourCharacterPage implements OnInit {
  public id: '';
  public character;

  public defaultAtribs = {
    strength: 17,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  };

  constructor(
    private route: ActivatedRoute,
    public storageService: StorageService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.character = {
      image: '',
      name: '',
      gender: '',
      class: '',
      subClass: '',
      spellsList: '',
      itensList: '',
      level: 1,
      race: '',
      subRace: '',
      atrib: this.defaultAtribs,
    };
  }

  ngOnInit() {}

  async ionViewWillEnter() {
    let characters = await this.storageService.get('characters');
    this.character = characters[parseInt(this.id)];
  }

  public async updateImage(e: any) {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos,
      quality: 100,
    });
    console.log(capturedPhoto);
    if (capturedPhoto.dataUrl) {
      this.character.image = capturedPhoto.dataUrl;
    }
  }

  public async changeLifePoints(life: number) {
    if (life < 1000 && life > 0) this.character.lifePoints = life;
  }

  public async changeArmorClass(armor: number) {
    if (armor < 100 && armor > 0) this.character.armorClass = armor;
  }

  public async levelUp() {
    if (this.character.level < 20) this.character.level += 1;
  }

  public async levelDown() {
    if (this.character.level > 1) this.character.level -= 1;
  }

  public async strengthUp() {
    if (this.character.atrib.strength < 30) this.character.atrib.strength += 1;
  }

  public async strengthDown() {
    if (this.character.atrib.strength > 1) this.character.atrib.strength -= 1;
  }

  public async dexterityUp() {
    if (this.character.atrib.dexterity < 30)
      this.character.atrib.dexterity += 1;
  }

  public async dexterityDown() {
    if (this.character.atrib.dexterity > 1) this.character.atrib.dexterity -= 1;
  }

  public async constitutionUp() {
    if (this.character.atrib.constitution < 30)
      this.character.atrib.constitution += 1;
  }

  public async constitutionDown() {
    if (this.character.atrib.constitution > 1)
      this.character.atrib.constitution -= 1;
  }

  public async intelligenceUp() {
    if (this.character.atrib.intelligence < 30)
      this.character.atrib.intelligence += 1;
  }

  public async intelligenceDown() {
    if (this.character.atrib.intelligence > 1)
      this.character.atrib.intelligence -= 1;
  }

  public async wisdomUp() {
    if (this.character.atrib.wisdom < 30) this.character.atrib.wisdom += 1;
  }

  public async wisdomDown() {
    if (this.character.atrib.wisdom > 1) this.character.atrib.wisdom -= 1;
  }

  public async charismaUp() {
    if (this.character.atrib.charisma < 30) this.character.atrib.charisma += 1;
  }

  public async charismaDown() {
    if (this.character.atrib.charisma > 1) this.character.atrib.charisma -= 1;
  }

  public async changeXp(number: number) {
    if (number < 1000000000 && number > 0) this.character.xp = number;
  }

  public async changeAlignment(text: string) {
    this.character.alignment = text;
  }

  public async changeInitiative(number: number) {
    if (number < 21 && number > 0) this.character.initiative = number;
  }

  public async changeSpeed(number: number) {
    if (number < 100 && number > 0) this.character.speed = number;
  }

  public async changeName(string: string) {
    switch (string) {
      case 'Bolsonaro':
        this.character.name = string;
        this.character.image =
          'https://media1.tenor.com/images/44ba1d5c480bd4b5db0fd103e7ff1d31/tenor.gif';
        break;
      case 'Lula':
        this.character.name = string;
        this.character.image = 'https://i.imgur.com/73Rk6HV.jpg';
        break;
      case 'Furry':
        this.character.name = string;
        this.character.image = 'https://i.imgur.com/8n39m85.png';
        break;
      default:
        this.character.name = string;
    }
  }

  public async savePage(
    characterLifePoints: number,
    characterArmorClass: number,
    characterStory: string,
    characterSpellList: string,
    characterItemList: string,
    characterLangAndProf: string,
    characterXpValue: number,
    characterAligment: string,
    characterInitiative: number,
    characterSpeed: number,
    characterName: string,
    characterGender: string,
    characterRace: string,
    characterSubRace: string,
    characterClass: string,
    characterSubClass: string
  ) {
    this.changeLifePoints(characterLifePoints);
    this.changeArmorClass(characterArmorClass);
    this.character.story = characterStory;
    this.character.spellsList = characterSpellList;
    this.character.itensList = characterItemList;
    this.character.languagesAndProficiencies = characterLangAndProf;
    this.changeXp(characterXpValue);
    this.changeAlignment(characterAligment);
    this.changeInitiative(characterInitiative);
    this.changeSpeed(characterSpeed);
    this.changeName(characterName);
    this.character.gender = characterGender;
    this.character.race = characterRace;
    this.character.subRace = characterSubRace;
    this.character.class = characterClass;
    this.character.subClass = characterSubClass;
    let characters = await this.storageService.get('characters');
    characters[this.id] = this.character;
    await this.storageService.set('characters', characters);
  }

  public calculateMod(ability: number) {
    return Math.floor((ability - 10) / 2);
  }
}
