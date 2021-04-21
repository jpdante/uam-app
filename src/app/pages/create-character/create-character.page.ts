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

  public newCharacter = {
    img : 'https://brejodocruz.pb.gov.br/wp-content/uploads/2021/01/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg',
    name : 'Nome',
    class : '',
    race : '',
  }

}
