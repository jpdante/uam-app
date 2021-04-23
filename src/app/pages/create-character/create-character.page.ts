import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.page.html',
  styleUrls: ['./create-character.page.scss'],
})
export class CreateCharacterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public defaultImg = 'https://i.imgur.com/svtbHpw.jpg';
  public currentImageLink : string;
  
  public newCharacter = {
    img : this.defaultImg,
    name : '',
    class : '',
    race : '',
  }

  public refreshImage (){
    this.newCharacter.img = this.currentImageLink;
  }

  public resetImage(){
    this.newCharacter.img = this.defaultImg;
  }

  public submitCharacter(){
    console.log(this.newCharacter.img);
    console.log(this.newCharacter.name);
    console.log(this.newCharacter.class);
    console.log(this.newCharacter.race);
  }
}
