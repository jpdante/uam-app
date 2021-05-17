import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service';

interface Character {
  image: string;
  name: string;
  class: string;
  level: number;
  race: string;
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

  public newCharacter = {
    img: this.defaultImg,
    name: '',
    class: '',
    race: '',
  };

  public updateImage(e: any) {
    this.currentImageLink = e.target.value || this.defaultImg;
    this.newCharacter.img = this.currentImageLink;
  }

  public resetImage() {
    this.newCharacter.img = this.defaultImg;
  }

  public async submitCharacter() {
    const characters: Character[] | null = await this.storageService.get(
      'characters'
    );
    characters.push({
      image: this.newCharacter.img,
      name: this.newCharacter.name,
      class: this.newCharacter.class,
      level: 1,
      race: this.newCharacter.race,
    });
    await this.storageService.set('characters', characters);
    this.router.navigate(['/characters'])
  }
}
