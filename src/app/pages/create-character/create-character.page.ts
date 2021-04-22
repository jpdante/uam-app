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

  public newCharacter = {
    img : this.defaultImg,
    name : 'Nome',
    class : '',
    race : '',
  }

}
