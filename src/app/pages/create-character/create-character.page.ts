import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.page.html',
  styleUrls: ['./create-character.page.scss'],
})
export class CreateCharacterPage implements OnInit {

  public defaultImg = 'https://i.imgur.com/svtbHpw.jpg';
  public currentImageLink : string;

  constructor() { }

  ngOnInit() {
    this.currentImageLink = this.defaultImg;
  }
  
  public newCharacter = {
    img : this.defaultImg,
    name : '',
    class : '',
    race : '',
  }

  public updateImage(e: any) {
    this.currentImageLink = e.target.value || this.defaultImg;
    this.newCharacter.img = this.currentImageLink;
  }

  public resetImage() {
    this.newCharacter.img = this.defaultImg;
  }

  public submitCharacter(){
    console.log(this.newCharacter.img);
    console.log(this.newCharacter.name);
    console.log(this.newCharacter.class);
    console.log(this.newCharacter.race);
  }
}
