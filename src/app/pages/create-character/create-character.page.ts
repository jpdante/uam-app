import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service.service';

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
  class: string;
  level: number;
  race: string;
  gender: string;
  story: string,
  itensList: string,
  spellsList: string,
  atrib: Atrib,
}

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.page.html',
  styleUrls: ['./create-character.page.scss'],
})
export class CreateCharacterPage implements OnInit {
  public defaultImg = 'https://i.imgur.com/svtbHpw.jpg';
  public currentImageLink: string;

  constructor(public storageService: StorageService, private router: Router) {}

  ngOnInit() {
    this.currentImageLink = this.defaultImg;
  }

  public defaultAtribs: Atrib = {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  };

  public newCharacter: Character = {
    image: this.defaultImg,
    name: '',
    class: '',
    level: 1,
    race: '',
    gender: '',
    story: 'Put your description here',
    itensList: 'Put your description here',
    spellsList: 'Put your description here',
    atrib: this.defaultAtribs,
  };

  public updateImage(e: any) {
    this.currentImageLink = e.target.value || this.defaultImg;
    this.newCharacter.image = this.currentImageLink;
  }

  public resetImage() {
    this.newCharacter.image = this.defaultImg;
  }

  public async submitCharacter() {
    const characters: Character[] | null = await this.storageService.get(
      'characters'
    );
    characters.push(this.newCharacter);
    await this.storageService.set('characters', characters);
    this.router.navigate(['/characters']);
  }
}
